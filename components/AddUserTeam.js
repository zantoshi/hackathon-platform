import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Select from "react-select";
import ButtonSecondary from "@/components/ButtonSecondary";

function AddUserTeam({ id, editPage }) {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();
  const [values, setValue] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("");
  const [team, setTeam] = useState({});
  const [requests, setRequest] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchJudgeUser = async () => {
      try {
        const response = await fetch(`/api/users/users`, {
          cache: "no-store",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          next: { revalidate: 1 },
        });

        if (response) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error(
            "this is Error for fetching users:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("this is Error for fetching users:", error);
      }
    };
    fetchJudgeUser();
  }, []);

  const handleChange = (search) => {
    setValue(search);
  };

  let options = [];
  if (session) {
    options = users.map((user) => ({
      value: user.id,
      label: user.gamertag,
      image: user.image,
      email: user.email,
    }));
  }

  const getRequest = async () => {
    try {
      if (id) {
        const response = await fetch(`/api/request/${id}/teamRequest`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setRequest(data);
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  useEffect(() => {
    const fetchRequests = async () => {
      getRequest();
    };
    fetchRequests();
  }, [id]);

  useEffect(() => {
    const getMembers = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/members/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setMembers(data);
        } 
      } catch (error) {
        console.log(error);
      }
    };

    getMembers();
  }, [id]);

  useEffect(() => {
    const getTeam = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/team/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setTeam(data);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    getTeam();
  }, [id]);

  const create = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const body = {
          teamId: id,
          teamName: team.name,
          userReceiver: values.value,
        };
        const response = await fetch(`/api/request/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        getRequest();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRequest = async (id) => {
    try {
      if (id) {
        const response = await fetch(`/api/request/${id}/delete`, {
          cache: "no-store",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        setRequest((prevRequest) =>
          prevRequest.filter((request) => request.id !== id)
        );
      }
    } catch (error) {
      console.log("this is the error for deleting a judge: " + error);
    }
  };

  const deleteMember = async (id) => {
    try {
      if (id) {
        const response = await fetch(`/api/members/${id}/delete`, {
          cache: "no-store",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        setMembers((prevMember) =>
          prevMember.filter((member) => member.id !== id)
        );
      }
    } catch (error) {
      console.log("this is the error for deleting a judge: " + error);
    }
  };

  return (
    <div className="">
      <div>
        {editPage ? (
          <form onSubmit={create} className="flex">
            <Select
              type="text"
              className="peer block min-h-[auto] rounded border-0 bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:opacity-0 focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none  text-purple-600  "
              id="exampleFormControlInput3"
              placeholder="Type the gamertag of the user to make him judge"
              options={options}
              defaultValue={search}
              onChange={handleChange}
              values={options}
            ></Select>
            <ButtonSecondary
              buttonText="Add member"
              functionCall={create}
            ></ButtonSecondary>
          </form>
        ) : (
          <form onSubmit={create} className="flex items-center justify-center">
            <Select
              type="text"
              className="peer block min-h-[auto] rounded border-0 bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:opacity-0 focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none  text-purple-600  "
              id="exampleFormControlInput3"
              placeholder="Type the gamertag of the user to make him judge"
              options={options}
              defaultValue={search}
              onChange={handleChange}
              values={options}
            ></Select>
            <ButtonSecondary
              buttonText="Add member"
              functionCall={create}
            ></ButtonSecondary>
          </form>
        )}
      </div>
      <div className="text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {members.map((member) => {
          const user = users.find((user) => user.id === member.userId);
          return (
            <React.Fragment key={user.id}>
              {user && (
                <div className="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                    src={user.image}
                  />
                  <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5 flex-cols items-center">
                      <p className="text-xl text-white font-semibold">
                        {user.gamertag}
                      </p>
                      <div>
                        {editPage && team.creatorId !== user.id &&(
                          <button
                            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            type="button"
                            onClick={() => {
                              deleteMember(member.id);
                            }}
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
        {requests.map((request) => {
          const user = users.find((user) => user.id === request.userReceiver);
          return (
            <React.Fragment key={request.id}>
              {user && (
                <div className="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                    src={user.image}
                  />
                  <div className="text-center space-y-3 sm:text-left">
                    <div className="space-y-0.5 flex-cols items-center">
                      <p className="text-xl text-white font-semibold">
                        {user.gamertag}
                      </p>
                      <div className=" text-gray-900 focus:outline-none bg-transparent rounded-lg border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white text-center">
                        Pending
                      </div>
                      {editPage && (
                        <button
                          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                          type="button"
                          onClick={() => {
                            deleteRequest(request.id);
                          }}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default AddUserTeam;

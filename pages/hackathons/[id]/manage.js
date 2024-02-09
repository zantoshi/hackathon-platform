import { useSession } from "next-auth/react";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import ButtonSecondary from "@/components/ButtonSecondary";
import Select from "react-select";

export default function ManageHackathon() {
  const [hackathon, setHackathon] = useState([]);
  const [teams, setTeams] = useState([]);
  const [details, setDetails] = useState([]);
  const [projects, setProject] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  const [Userdetails, setUserdetails] = useState([]);
  const [judges, setJudges] = useState([]);
  const [id, setId] = useState("");
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [values, setValue] = useState([]);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleChange = (search) => {
    console.log(search.image);
    setValue(search);
  };

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/hackathons/${id}`, {
            cache: 'no-store' ,
            method: "GET",
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 1 },
          });
          if (response.ok) {
            const hackathonData = await response.json();
            setHackathon(hackathonData);
          } else {
            console.error("Error fetching hackathon:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchHackathon();
  }, [id]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await fetch(`/api/users`, {
          cache: 'no-store' ,
          method: "GET",
          headers: { "Content-Type": "application/json" },
          next: { revalidate: 1},
        });

        if (users.ok) {
          const usersData = await users.json();
          setUserdetails(usersData);
        } else {
          console.error("Error fetching teams:", users.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchJudgeUser = async () => {
      try {
        const response = await fetch(`/api/users/users`, {
          cache: 'no-store',
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

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/teams`, {
          cache: 'no-store',
          method: "GET",
          headers: { "Content-Type": "application/json" },
          next: { revalidate: 1},
        });

        if (teams.ok) {
          const teamsData = await teams.json();
          setDetails(teamsData);
        } else {
          console.error("Error fetching teams:", teams.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []);

  useEffect(() => {
    const fetchHackathonProjects = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}/hackathonDetails`, {
            cache: 'no-store' ,
            method: "GET",
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 10 },
          });
          if (response.ok) {
            const projectsData = await response.json();
            setProject(projectsData);
          } else {
            console.error("Error fetching of projects:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchHackathonProjects();
  }, [id]);


const judgeGetting = async ()=>{
  try {
    if (id) {
      const response = await fetch(`/api/judges/${id}/hackathonDetails`, {
        cache: 'no-store',
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 1 },
      });

      if (response.ok) {
        const data = await response.json();
        setJudges(data);
      } else {
        console.error("Error fetching judges:", response.statusText);
      }
    }
  } catch (error) {
    console.error("Error fetching judges:", error);
  }
}

  useEffect(() => {
    const fetchJudges = async () => {
      judgeGetting()
    };
  
    fetchJudges();
  
  }, [id]);

  const create = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const body = {
          userId: values.value,
          judgeGamertag: values.label,
          email: values.email,
          judgeImage: values.image,
          hackathonId: id,
        };

        await fetch(`/api/judges/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          next: { revalidate: 1 },
          cache: 'no-store'
        });
        judgeGetting()
        
        console.log(values.value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  let options = "";
  if (session) {
    options = users.map((user) => ({
      value: user.id,
      label: user.gamertag,
      image: user.image,
      email: user.email,
    }));
  }

  const handleClickJudge = async (id) => {
    try {
      if (id) {
        const response = await fetch(`/api/judges/${id}/delete`, {
          cache: 'no-store',
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        setJudges(prevJudges => prevJudges.filter(judge => judge.id !== id));

      }
    } catch (error) {
      console.log("this is the error for deleting a judge: " + error);
    }
  };

  const handleClickProject = async (id) => {
    try {
      if (id) {
        const response = await fetch(`/api/projects/${id}/delete`, {
          cache: 'no-store',
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          setProject(prevProject => prevProject.filter(projects => projects.id !== id));
         
        } else {
          console.error("Error deleting judge:", response.statusText);
        }
      }
    } catch (error) {
      console.log("this is the error for deleting a project: " + error);
    }
  };

  let content;
  switch (selectedTab) {
    case "judges":
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Judges)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200"></p>
          <form onSubmit={create}>
            <div className="pt-5 pb-5 flex">
              <div
                class="relative  bg-black text-purple-600"
                data-te-input-wrapper-init
                id="async"
              >
                <Select
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:opacity-0 focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                  id="exampleFormControlInput3"
                  placeholder="Type the gamertag of the usar to make him judge"
                  options={options}
                  defaultValue={search}
                  onChange={handleChange}
                  values={options}
                ></Select>

                <div></div>
              </div>
              <ButtonSecondary
                functionCall={create}
                buttonText="Add Judge"
              ></ButtonSecondary>
            </div>
          </form>
          <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {judges.map((judge) => {
              return (
                <div
                  class="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                  key={judge.id}
                >
                  <img
                    class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                    src={judge.judgeImage}
                  ></img>

                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5 flex-cols items-center">
                      <p class="text-xl text-white font-semibold">
                        {judge.judgeGamertag}
                      </p>
                    </div>

                    <button
                      className="bg-red-500 text-white rounded-3xl font-bold pt-2 p-2 text-xs hover:opacity-80"
                      onClick={() => {
                        handleClickJudge(judge.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
      break;
    case "teams":
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Teams)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">
            Manage the Hackathon - Teams
          </p>
          <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {projects.map((project) => {
              return (
                <>
                  <div class="">
                    <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-5 flex flex-col justify-center items-center text-center">
                      <div key={project.id}>
                        {details.map((detail) => {
                          return (
                            <>
                              {project.teamId === detail.id && (
                                <div key={detail.id}>
                                  <p class="text-base text-gray-400 font-normal">
                                    {detail.name}
                                  </p>
                                  <br></br>
                                  <div class="mb-8">
                                    <img
                                      class="object-center object-cover rounded-full h-32 w-32"
                                      src={detail.teamAvatar}
                                      alt="photo"
                                    ></img>
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })}
                      </div>

                      <div class="text-center">
                        <p class="text-xl text-white font-bold mb-2">
                          {" "}
                          {project.name}
                        </p>
                        <p class="text-base text-gray-400 font-normal">
                          {project.description}
                        </p>
                      </div>
                      <br></br>
                        <div className="space-x-5"> 
                        <button
                        className="bg-red-500 text-white rounded-3xl font-bold pt-2 p-2 text-xs hover:opacity-80"
                        onClick={() => {
                          handleClickProject(project.id);
                        }}
                      >
                        Remove
                      </button>
                      <button
                        className="bg-green-500 text-white rounded-3xl font-bold pt-2 p-2 text-xs hover:opacity-80"
                        onClick={() => {
                          router.push(`/projects/${project.id}`)
                        }}
                      >
                        Details
                      </button>
                          </div>

                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
      break;
    case "scores":
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Scores)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">
            Manage the Hackathon - Scores
          </p>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">
            Manage the Hackathon
          </p>
        </div>
      );
  }

  if (session && Userdetails.role === "ADMIN") {
    return (
      <Layout>
        <div className="min-w-full w-auto md:pl-14 text-white px-5 h-screen ">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">
            Manage the Hackathon
          </p>
          <br></br>
          <table>
            <thead>
              <tr className=" max-[435px]:grid grid-cols-2">
                <th>
                  <ButtonSecondary
                    buttonLink={`/hackathons/${id}/edit`}
                    buttonText="Edit"
                  ></ButtonSecondary>
                </th>
                <th>
                  <ButtonSecondary
                    functionCall={() => handleTabClick("judges")}
                    buttonText="Judges"
                  
                  ></ButtonSecondary>
                </th>
                <th>
                  <ButtonSecondary
                    functionCall={() => handleTabClick("teams")}
                    buttonText="Teams"
                  ></ButtonSecondary>
                </th>
                <th>
                  <ButtonSecondary
                    functionCall={() => handleTabClick("scores")}
                    buttonText="Scores"
                  ></ButtonSecondary>
                </th>
              </tr>
            </thead>
          </table>

          <br></br>
          <div className="pt-5">{content}</div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
}

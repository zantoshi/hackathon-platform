import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import Image from "next/image";
import avatarTeam from "../../../public/users-group.svg";
import ButtonSecondary from "@/components/ButtonSecondary";
import { getServerSideProps } from "../../../util/authUtils";

export { getServerSideProps };
function Index() {
  const [team, setTeam] = useState({});
  const router = useRouter();
  const [id, setId] = useState("");
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id || "");
    }
  }, [router.isReady, router.query.id]);

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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users`, {
          cache: "no-store",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          next: { revalidate: 1 },
        });

        if (response) {
          const data = await response.json();
          setUser(data);
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
    fetchUser();
  }, []);
  return (
    <>
      <Layout>
      <header>
          <title>GHL | My Team</title>
        </header>
        <div className="w-full md:pl-14 text-white px-5">
          <ButtonSecondary buttonText={"Back"} buttonLink={"/team"} />
          <div className="mb-2 mt-5">
            <div className="px-5 mb-3">
              {team.teamAvatar && team && team.teamAvatar === "" ? (
                <Image
                  src={team.teamAvatar}
                  alt="Avatar profile"
                  className="h-12 w-12 rounded-full mr-2 inline-block"
                  width={12}
                  height={12}
                />
              ) : (
                <Image
                  src={avatarTeam}
                  alt="Avatar profile"
                  className="h-12 w-12 rounded-full mr-2 inline-block bg-purple-500 py-2 hover:bg-purple-600"
                  width={30}
                  height={30}
                />
              )}
            </div>
            <h1 className="font-bold mb-3 custom-text-shadow text-4xl">
              {team.name}
            </h1>
            <div className="px-5 py-2">
              <h2 className="font-semibold  text-lg ">Team Description</h2>
              <p>{team.description}</p>
            </div>
            <div className="px-5 py-2">
              <h2 className="font-semibold  text-lg ">Team Members</h2>
              {members ? (
                <div className="text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                  {members.map((member) => {
                    const user = users.find(
                      (user) => user.id === member.userId
                    );
                    return (
                      <React.Fragment >
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
                              </div>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
              {
            user && ( <React.Fragment >
               
              {user.id === team.creatorId  && (
                <>
               <ButtonSecondary
                  buttonText={"Edit"}
                  buttonLink={`/team/${id}/edit`}
                />
                </>
              )}
            </React.Fragment>)
          }
      </Layout>
    </>
  );
}

export default Index;

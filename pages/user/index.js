import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import avatarUser from "../../public/user-filled.svg";
import avatarTeam from "../../public/users-group.svg";
import ButtonSecondary from "@/components/ButtonSecondary";
import Link from "next/link";
import { getServerSideProps } from "../../util/authUtils";

export { getServerSideProps };
function index() {
  const [user, setUser] = useState({});
  const [teams, setTeams] = useState([]);
  const [myteams, setMyTeams] = useState([]);
  const [allteams, setAllTeams] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("/api/users", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Error getting data from table user ", error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await fetch("/api/team", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.log("Error getting data from table user ", error);
      }
    };
    getTeam();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/teamsUser/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (teams.ok) {
          const teamsData = await teams.json();
          setMyTeams(teamsData);
        } else {
          console.error("Error fetching teams:", teams.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []); //

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/teams`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (teams.ok) {
          const teamsData = await teams.json();
          setAllTeams(teamsData);
        } else {
          console.error("Error fetching teams:", teams.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []);

  return (
    <Layout>
      <div className="w-full md:pl-14 text-white px-5">
        <ButtonSecondary buttonText={"Back"} buttonLink={"/"} />
        <div className="mb-2 mt-5">
          <div className="px-5 mb-3">
            {user && user.image ? (
              <Image
                src={user.image}
                alt="Avatar profile"
                className="h-12 w-12 rounded-full mr-2 inline-block"
                width={128}
                height={128}
              />
            ) : (
              <Image
                src={avatarUser}
                alt="Avatar profile"
                className="h-12 w-12 rounded-full mr-2 inline-block bg-purple-500 py-2 hover:bg-purple-600"
                width={30}
                height={30}
              />
            )}
          </div>
          <h1 className="font-bold mb-3 custom-text-shadow text-4xl">
            {user.gamertag}
          </h1>
          <div className="px-5 py-2">
            <h2 className="font-semibold  text-lg ">Lightning Address</h2>
            <p>{user.lightningAddress}</p>
          </div>
          <div className="px-5 py-2">
            <h2 className="font-semibold  text-lg ">Email</h2>
            <p className="block text-sm font-medium leading-6 text-white">
              {user.email}
            </p>
          </div>
          <div className="px-5 py-2 space-y-5">
            <h2 className="font-semibold  text-lg ">My teams</h2>
            {teams.map((team) => {
              return (
                <>
                  <Link href={`/team/${team.id}`}>
                    <div className="flex items-center space-x-5 space-y-2">
                      <p className="block text-sm font-medium leading-6 text-white">
                        {team.name}
                      </p>

                      {team.teamAvatar && team && team.teamAvatar !== null ? (
                        <img
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
                  </Link>
                </>
              );
            })}
            {allteams.map((Alltm) => {
              return (
                <>
                  {myteams.map((myteam) => {
                    return (
                      <>
                        {myteam.teamId === Alltm.id &&
                          myteam.userId !== Alltm.creatorId && (
                            <>
                              <Link href={`/team/${Alltm.id}`}>
                                <div className="flex items-center space-x-5 space-y-2">
                                  <p className="block text-sm font-medium leading-6 text-white">
                                    {Alltm.name}
                                  </p>

                                  {Alltm.teamAvatar !== null ? (
                                    <img
                                      src={Alltm.teamAvatar}
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
                              </Link>
                            </>
                          )}
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;

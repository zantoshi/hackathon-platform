import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import avatarUser from "../../../public/user-filled.svg";
import avatarTeam from "../../../public/users-group.svg";
import ButtonSecondary from "@/components/ButtonSecondary";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import SessionGuard from "@/components/SessionGuard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function index() {
  const [user, setUser] = useState({});
  const [teams, setTeams] = useState([]);
  const [myteams, setMyTeams] = useState([]);
  const [allteams, setAllTeams] = useState([]);
  const [social, setSocial] = useState({});
  const { data: session, status } = useSession();
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/users/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setUser(data);
          setSocial(data.social);
        }
      } catch (error) {
        console.log("Error getting data from table user ", error);
      }
    };
    getUser();
  }, [id]);

  useEffect(() => {
    const getTeam = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/team/${id}/teamListUser`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setTeams(data);
        }
      } catch (error) {
        console.log("Error getting data from table user ", error);
      }
    };
    getTeam();
  }, [id]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        if (id) {
          const teams = await fetch(`/api/team/${id}/teamMembers`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (teams.ok) {
            const teamsData = await teams.json();
            setMyTeams(teamsData);
          } else {
            console.error("Error fetching teams:", teams.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, [id]); //

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
      <header>
        <title>GHL | Profile</title>
      </header>
      <SessionGuard>
        {session && (
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
                {user.lightningAddress && (
                  <>
                    <h2 className="font-semibold  text-lg ">
                      Lightning Address
                    </h2>
                    <p>{user.lightningAddress}</p>
                  </>
                )}
              </div>
              {user.skill !== null &&
                user.skill !== undefined &&
                user.skill !== "" && (
                  <div className="px-5 py-2">
                    <h2 className="font-semibold  text-lg ">Skills</h2>
                    <p className="block text-sm font-medium leading-6 text-white">
                      {user.skill}
                    </p>
                  </div>
                )}
              {user.publicBio !== null &&
                user.publicBio !== undefined &&
                user.publicBio !== "" && (
                  <div className="px-5 py-2">
                    <h2 className="font-semibold  text-lg ">Bio</h2>
                    <p className="block text-sm font-medium leading-6 text-white">
                      {user.publicBio}
                    </p>
                  </div>
                )}
              {social && (
                <>
                  {Object.keys(social).length !== 0 && (
                    <>
                      {((social.github !== "" && social.github !== undefined) ||
                        (social.twitter !== "" &&
                          social.twitter !== undefined) ||
                        (social.linkedin !== "" &&
                          social.linkedin !== undefined)) && (
                        <div className="px-5 py-2">
                          <h2 className="font-semibold  text-lg mb-2 ">
                            Social networks
                          </h2>
                          <div className="flex items-center gap-2">
                            {social.github && social.github !== null && (
                              <Link
                                href={social.github}
                                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 space-x-1"
                              >
                                <Github></Github>
                                <p>Github</p>
                              </Link>
                            )}
                            {social.twitter && social.twitter !== null && (
                              <Link
                                href={social.twitter}
                                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 space-x-1"
                              >
                                <FaXTwitter />
                                <p>Twitter/ X</p>
                              </Link>
                            )}
                            {social.linkedin && social.linkedin !== null && (
                              <Link
                                href={social.linkedin}
                                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 space-x-1"
                              >
                                <Linkedin></Linkedin>
                                <p>LinkedIn</p>
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
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

                          {team.teamAvatar &&
                          team &&
                          team.teamAvatar !== null ? (
                            <h1
                              className="text-4xl py-2 px-1 inline-block rounded-full border-solid border-2 border-purple-500"
                              style={{ backgroundColor: team.colorAvatar }}
                            >
                              {team.teamAvatar}
                            </h1>
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
                                      
                                        <h1
                                        className="text-4xl py-2 px-1 inline-block rounded-full border-solid border-2 border-purple-500"
                                        style={{ backgroundColor: Alltm.colorAvatar }}
                                      >
                                        {Alltm.teamAvatar}
                                      </h1>
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
        )}
      </SessionGuard>
    </Layout>
  );
}

export default index;

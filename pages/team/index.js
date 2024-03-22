import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import ButtonSecondary from "@/components/ButtonSecondary";
import HackathonCard from "@/components/HackathonCard";
import { useRouter } from "next/navigation";
import { getServerSideProps } from "../../util/authUtils";
import SessionGuard from "@/components/SessionGuard";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [myteams, setMyTeams] = useState([]);
  const [allteams, setAllTeams] = useState([]);
  const { data: session, status } = useSession();

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

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (teams.ok) {
          const teamsData = await teams.json();
          setTeams(teamsData);
        } else {
          console.error("Error fetching teams:", teams.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []); // Empty dependency array to ensure the effect runs only once on mount

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

  return (
    <Layout>
      <header>
        <title>GHL | Teams</title>
      </header>
      <SessionGuard>
        {session && (
          <div>
            <div className="mx-auto px-6 lg:px-8">
              <div className="my-2">
                <h1 className="font-bold custom-text-shadow text-4xl">Teams</h1>
                <p className="text-gray-400 font-semibold text-lg ">
                  Create a team in order to compete in hackathons and also edit
                  and add members to your team in order to participate.
                </p>
              </div>

              <div className="my-4">
                <ButtonSecondary
                  buttonText={"Create team"}
                  buttonLink={"/team/create"}
                />
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 h-full">
                {teams.map((team) => {
                  return (
                    <>
                      <HackathonCard
                        headerText={team.name}
                        descriptionText={team.description}
                        hackathonLink={`/team/${team.id}`}
                        buttonLink={`/team/${team.id}/members`}
                        buttonText={"Add to"}
                      />
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
                                <HackathonCard
                                  headerText={Alltm.name}
                                  descriptionText={Alltm.description}
                                  buttonLink={`/team/${Alltm.id}`}
                                />
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

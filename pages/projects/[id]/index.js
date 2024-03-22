import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import HackathonCard from "@/components/HackathonCard";
import ButtonSecondary from "@/components/ButtonSecondary";
import { getServerSideProps } from "../../../util/authUtils";
import SessionGuard from "@/components/SessionGuard";
import Link from "next/link";

function Project() {
  const [projects, setProject] = useState([]);
  const [Userdetails, setUserdetails] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();
  const [id, setId] = useState("");

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchHackathonProjects = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await fetch(`/api/users`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
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

    fetchUsers(); // Call the fetchTeams function
  }, []);

  if (session && Userdetails.role === "ADMIN") {
    return (
      <div className="">
        <Layout>
        <header>
          <title>GHL | Project</title>
        </header>
          <>
            {id && projects && (
              <div className="w-full md:pl-14 text-white px-5">
                <table>
                  <thead>
                    <tr className=" max-[435px]:grid grid-cols-2">
                      <th>
                        <ButtonSecondary
                          buttonText={"Back to Hackathon Management"}
                          buttonLink={`/hackathons/${projects.hackathonId}/manage`}
                        />
                      </th>
                      <th>
                        <ButtonSecondary
                          buttonText={"Back to Judge Dashboard"}
                          buttonLink={`/judge/${projects.hackathonId}/dashboard`}
                        />
                      </th>
                    </tr>
                  </thead>
                </table>
                <h1 className="text-3xl font-bold pt-4"></h1>
                <br></br>
                <h1 className="text-2xl font-bold ">{projects.description}</h1>
                <br></br>
                <h1 className="text-1xl font-bold text-purple-600 hover:cursor-pointer "><a href={projects.loomLink} >Loom Project Link </a></h1>
                <h1 className="text-1xl font-bold text-purple-600 hover:cursor-pointer"><a href={projects.pitchLink} >Pitch  Project Link </a></h1>
                <h1 className="text-1xl font-bold text-purple-600 hover:cursor-pointer">
                  <a href={projects.projectResourceLink}>Github project Link</a>
                </h1>
                <br></br>
                <h1 className="text-1xl font-bold ">{projects.comments}</h1>
                <br></br>
                <ButtonSecondary
                  buttonText={"Assess >"}
                  buttonLink={`/judge/${projects.id}/assessment`}
                ></ButtonSecondary>
              </div>
            )}
          </>
        </Layout>
      </div>
    );
  } else {
    return (
      <div className="">
        <Layout>
          <>
            {id && projects && (
              <div className="w-full md:pl-14 text-white px-5">
                <ButtonSecondary
                  buttonText={"Back to Judge Dashboard"}
                  buttonLink={`/judge/${projects.hackathonId}/dashboard`}
                />

                <h1 className="text-3xl font-bold pt-4">{projects.name}</h1>
                <br></br>
                <h1 className="text-2xl font-bold ">{projects.description}</h1>
                <br></br>
                <h1 className="text-1xl font-bold text-purple-600 hover:cursor-pointer "><a href={projects.loomLink} >Loom Project Link </a></h1>
                <h1 className="text-1xl font-bold text-purple-600 hover:cursor-pointer"><a href={projects.pitchLink} >Pitch  Project Link </a></h1>
                <h1 className="text-1xl font-bold text-purple-600 hover:cursor-pointer">
                  <a href={projects.projectResourceLink}>Github project Link</a>
                </h1>
                <br></br>
                <h1 className="text-1xl font-bold ">{projects.comments}</h1>
                <br></br>
                <ButtonSecondary
                  buttonText={"Assess >"}
                  buttonLink={`/judge/${projects.id}/assessment`}
                ></ButtonSecondary>
              </div>
            )}
          </>
        </Layout>
      </div>
    );
  }
}
export default Project;

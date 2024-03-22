import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import HackathonCard from "@/components/HackathonCard";
import ButtonSecondary from "@/components/ButtonSecondary";
import { getServerSideProps } from "../../../util/authUtils";
import SessionGuard from "@/components/SessionGuard";
import { useSession } from "next-auth/react";

function Assessment() {
  const [Userdetails, setUserdetails] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();
  const [id, setId] = useState("");
  const [assess, setAssess] = useState([]);
  const [details, setDetails] = useState([]);
  const [projects, setProject] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchAssessment = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/assessment/${id}/scoreDetails`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const assessData = await response.json();
            setAssess(assessData);
          } else {
            console.error("Error fetching of projects:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchAssessment();
  }, [id]);

  useEffect(() => {
    const fetchHackathonProjects = async () => {
      try {
        if (assess) {
          const response = await fetch(`/api/projects/${assess.projectId}`, {
            cache: "no-store",
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
  }, [assess]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
       if(projects){
        const teams = await fetch(`/api/team/${projects.teamId}`, {
          cache: "no-store",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          next: { revalidate: 1 },
        });

        if (teams.ok) {
          const teamsData = await teams.json();
          setDetails(teamsData);
        } else {
          console.error("Error fetching teams:", teams.statusText);
        }
       }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, [projects]);



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
    const overall_score_rounded = parseFloat(assess.overall_score).toFixed(2);
    return (
      <div className="">
        <Layout>
        <header>
          <title>GHL | Score</title>
        </header>
         <SessionGuard>
          {session && (
             <>
          
             {id && assess && projects && details && (
               <div className="w-full md:pl-14 text-white px-5">
               
                 <table>
                   <thead>
                     <tr className=" max-[435px]:grid grid-cols-2">
                       <th>
                         <ButtonSecondary
                           buttonText={"Back to Hackathon Management"}
                           buttonLink={`/hackathons/${assess.hackathonId}/manage`}
                         />
                       </th>
                       <th>
                         <ButtonSecondary
                           buttonText={"Back to Judge Dashboard"}
                           buttonLink={`/judge/${assess.hackathonId}/dashboard`}
                         />
                       </th>
                     </tr>
                   </thead>
                 </table>
 
                 <></>
                 <br></br>
                 <h1 className="text-3xl font-bold ">Assessment details for {projects.name} project</h1>
                 <br></br>
                 <h1 className="text-2xl font-bold " >Team: {details.name}</h1>
                 <br></br>
                 <h1 className="text-2xl font-bold ">
                   {" "}
                   Project Impact Score: {assess.impact}
                 </h1>
                 <h1 className="text-2xl font-bold ">
                   {" "}
                   Project Feasability Score: {assess.feasability}
                 </h1>
                 <h1 className="text-2xl font-bold ">
                   {" "}
                   Project User Experience Score: {assess.user_experience}
                 </h1>
                 <h1 className="text-2xl font-bold ">
                   {" "}
                   Project Scalability Score: {assess.scalability}
                 </h1>
                 <h1 className="text-2xl font-bold ">
                   {" "}
                   Project Innovate Score: {assess.innovate}
                 </h1>
                 <h1 className="text-2xl font-bold ">
                   {" "}
                   Project Pitch Score: {assess.pitch}
                 </h1>
                 <br></br>
                 <h1 className="text-2xl font-bold ">
                   {" "}
                   Overall Score: {overall_score_rounded}
                 </h1>
                 <br></br>
               </div>
             )}
           </>
          )}
         </SessionGuard>
        </Layout>
      </div>
    );
  } else {
    const overall_score_rounded = parseFloat(assess.overall_score).toFixed(2);
    return (
      <div className="">
        <Layout>
         
        <SessionGuard>
          {session && (
              <>
              {id && assess && projects && details && (
                <div className="w-full md:pl-14 text-white px-5">
                  <table>
                    <thead>
                      <tr className=" max-[435px]:grid grid-cols-2">
                        <th>
                          <ButtonSecondary
                            buttonText={"Back to Judge Dashboard"}
                            buttonLink={`/judge/${assess.hackathonId}/dashboard`}
                          />
                        </th>
                      </tr>
                    </thead>
                  </table>
  
                  <></>
  
                  <br></br>
                  <h1 className="text-3xl font-bold ">Assessment details for {projects.name} project</h1>
                  <br></br>
                  <h1 className="text-2xl font-bold " >Team: {details.name}</h1>
                  <br></br>
                  <h1 className="text-2xl font-bold ">
                    {" "}
                    Project Impact Score: {assess.impact}
                  </h1>
                  <h1 className="text-2xl font-bold ">
                    {" "}
                    Project Feasability Score: {assess.feasability}
                  </h1>
                  <h1 className="text-2xl font-bold ">
                    {" "}
                    Project User Experience Score: {assess.user_experience}
                  </h1>
                  <h1 className="text-2xl font-bold ">
                    {" "}
                    Project Scalability Score: {assess.scalability}
                  </h1>
                  <h1 className="text-2xl font-bold ">
                    {" "}
                    Project Innovate Score: {assess.innovate}
                  </h1>
                  <h1 className="text-2xl font-bold ">
                    {" "}
                    Project Pitch Score: {assess.pitch}
                  </h1>
                  <br></br>
                  <h1 className="text-2xl font-bold ">
                    {" "}
                    Overall Score: {overall_score_rounded}
                  </h1>
                  <br></br>
                </div>
              )}
            </>
          )}
        </SessionGuard>
        </Layout>
      </div>
    );
  }
}
export default Assessment;

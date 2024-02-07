import { useSession } from "next-auth/react";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import ButtonSecondary from "@/components/ButtonSecondary";



export default function ManageHackathon() {

    const [hackathon, setHackathon] = useState([]);
    const [teams, setTeams] = useState([]);
    const [details, setDetails] = useState([])
    const [projects, setProject] = useState([])
    const [selectedTab, setSelectedTab] = useState('edit');
    const [Userdetails, setUserdetails] = useState([])
    const [judges, setJudges] = useState([])
    const [id, setId] = useState("");
    const router = useRouter();
    const { data: session } = useSession();

    const handleTabClick = (tabName) => {
      setSelectedTab(tabName);
    };
  
    
    useEffect(() => {
        if (router.isReady) {
          setId(router.query.id);
        }
      }, [router.isReady]);

    useEffect(() => {
        const fetchHackathon= async () => {
          try {
            if (id) {
              const response = await fetch(`/api/hackathons/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
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

    fetchUsers(); 

  }, []);



  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/teams`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
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
            method: "GET",
            headers: { "Content-Type": "application/json" }
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
    const fetchJudges = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/judges/${id}/hackathonDetails`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            const data = await response.json();
            setJudges(data);
          } else {
            console.error("Error fetching teams:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching j:", error);
      }
    };

    fetchJudges(); // Call the fetchTeams function
  }, [id]);

  let content;
  switch (selectedTab) {
    case 'edit':
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Edit)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">Manage the Hackathon - Edit</p>
        </div>
      );
      break;
    case 'judges':
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Judges)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">Manage the Hackathon - Judges</p>
          <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"> 
              { 
                judges.map(judge => { 
                  return ( 
                    <div 
                      class="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" key={judge.id}> 
                      <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={judge.judgeImage} alt="Woman's Face"></img> 
                      <div class="text-center space-y-2 sm:text-left"> 
                        <div class="space-y-0.5 flex-cols items-center"> 
                          <p class="text-xl text-white font-semibold"> 
                            {judge.judgeGamertag} 
                          </p> 
                        </div> 
                      </div> 
                    </div> 
                  ) 
                }) 
              } 
 
            </div>
        </div>
      );
      break;
    case 'teams':
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Teams)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">Manage the Hackathon - Teams</p>
          <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {projects.map((project) => {
                  return (
                    <>

                      <div class="">
                        <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-5 flex flex-col justify-center items-center text-center">
                          <div key={project.id}>
                            {details.map(detail => {
                              return (
                                <>
                                  {project.teamId === detail.id &&
                                    (
                                      <div key={detail.id}>
                                        <p class="text-base text-gray-400 font-normal">{detail.name}</p>
                                        <br></br>
                                        <div class="mb-8">
                                          <img class="object-center object-cover rounded-full h-32 w-32" src={detail.teamAvatar} alt="photo"></img>
                                        </div>
                                      </div>
                                    )
                                  }
                                </>
                              )
                            })}
                          </div>

                          <div class="text-center">
                            <p class="text-xl text-white font-bold mb-2"> {project.name}</p>
                            <p class="text-base text-gray-400 font-normal">{project.description}</p>


                          </div>
                        </div>
                      </div>



                    </>
                  )
                })}
              </div>
        </div>
      );
      break;
    case 'scores':
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Scores)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">Manage the Hackathon - Scores</p>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">Manage the Hackathon</p>
        </div>
      );
  }

  if (session && Userdetails.role ==="ADMIN") {
    return (
      
      <Layout>
        <div className='w-full md:pl-14 text-white px-5'>
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                 {hackathon.title} Hackathon Information
               </h2>
               <p className="mt-2 text-lg leading-8 text-gray-200">
                Manage the Hackathon
               </p>
               <br></br>
               <div class="inline-flex gap-6 rounded-md shadow-sm pb-5" role="group">
               <ButtonSecondary functionCall={() => handleTabClick('edit')} buttonText="Edit"></ButtonSecondary>
               <ButtonSecondary functionCall={() => handleTabClick('judges')} buttonText="Judges"></ButtonSecondary>
               <ButtonSecondary functionCall={() => handleTabClick('teams')} buttonText="Teams"></ButtonSecondary>
               <ButtonSecondary functionCall={() => handleTabClick('scores')} buttonText="Scores"></ButtonSecondary>
                

               </div>
               <br></br>
           <div className="pt-5">
              {content}
          </div>

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

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
  const [assess,setAssess] = useState([])
  const [sponsors,setSponsors] = useState([])

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleChange = (search) => {
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

  const handleClickDeleteSponsor = async (id) => {
    try {
      if (id) {
        const response = await fetch(`/api/hackathonsponsors/${id}/delete`, {
          cache: 'no-store',
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        setSponsors(prevSponsor => prevSponsor.filter(sponsors => sponsors.id !== id));

      }
    } catch (error) {
      console.log("this is the error for deleting a sponsor: " + error);
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


  useEffect(() => {
    const fetchAssessment = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/assessment`, {
            cache: 'no-store' ,
            method: "GET",
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 10 },
          });
          if (response.ok) {
            const data = await response.json();
            setAssess(data);
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
    const fetchSponsors = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/hackathonsponsors/${id}/sponsorsDetails`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            const data = await response.json();
            setSponsors(data);
          } else {
            console.error("Error fetching sponsors:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching j:", error);
      }
    };

    fetchSponsors(); // Call the fetchTeams function
  }, [id]);


  let content;
  switch (selectedTab) {
    case "judges":
      content = (
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Judges)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200"></p>
          <form onSubmit={create}>
            <div className="pt-5 pb-5 flex">
              <div
                class="relative  text-purple-600 w-1/4"
                data-te-input-wrapper-init
                id="async"
              >
                <Select
                  type="text"
                  className="peer block min-h-[auto] rounded border-0 bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:opacity-0 focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none  text-purple-600"
                  id="exampleFormControlInput3"
                  placeholder="Type the gamertag of the user to make him judge"
                  options={options}
                  defaultValue={search}
                  onChange={handleChange}
                  values={options}
                ></Select>

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
      case "sponsors":
      content = (
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {hackathon.title} Hackathon Information (Sponsor)
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200"></p>
            <div className="pt-5 pb-5 flex">
              <ButtonSecondary
                buttonText="Add New Sponsor"
                buttonLink={`/hackathons/${id}/addsponsor`}
              ></ButtonSecondary>
            </div>
        
          <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {sponsors.map((sponsor) => {
              return (
                <div
                  class="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                  key={sponsor.id}
                >
                  <img
                    class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                    src={sponsor.image}
                  ></img>

                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5 flex-cols items-center">
                      <p class="text-xl text-white font-semibold">
                        {sponsor.name}
                      </p>
                      <p class="text-lg text-white font-semibold">
                        {sponsor.email}
                      </p>
                    </div>

                    <div className="space-x-5"> 
                        <button
                        className="bg-red-500 text-white rounded-3xl font-bold pt-2 p-2 text-xs hover:opacity-80"
                        onClick={() => {
                          handleClickDeleteSponsor(sponsor.id);
                        }}
                      >
                        Remove
                      </button>
                      <button
                        className="bg-green-500 text-white rounded-3xl font-bold pt-2 p-2 text-xs hover:opacity-80"
                        onClick={() => {
                          router.push(`/hackathons/${id}/${sponsor.id}/editsponsor`)
                        }}
                      >
                        Edit
                      </button>
                          </div>
                  </div>
                </div>
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
          <p className="mt-2 text-lg leading-8 text-gray-200 pt-5">
           {
            assess.map(score=>{
              return(<>
                {
                  projects.map(project =>{
                    return (<>
                      {
                       details.map(detail=>{
                        return (<>
                          {score.hackathonId === id && score.projectId == project.id  && detail.id ===  project.teamId && (
                            <>
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Project Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Team Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Overall Score
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {project.name}
                </th>
                <td class="px-6 py-4">
                  {detail.name}
                </td>
                <td class="px-6 py-4">
                {score.overall_score}
                </td>

            </tr>
        </tbody>
    </table>
</div>
                            </>
                          )}
                        </>)
                       })
                      }
                    </>)
                  })
                }
              </>)
            })
           }
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
            Manage this Hackathon
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
                <th>
                  <ButtonSecondary
                    functionCall={() => handleTabClick("sponsors")}
                    buttonText="Sponsors"
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

import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import HackathonCard from "@/components/HackathonCard";
import { fetchingData } from "../../../util/fetchingData";
import Select from "react-select";
import { getServerSideProps } from "../../../util/authUtils";

export { getServerSideProps };
function dashboard() {
  const [projects, setProject] = useState([]);
  const router = useRouter();
  const [id, setId] = useState("");
  const [hackathon, setHackathon] = useState(null);
  const [assess, setAssess] = useState([]);
  const [details, setDetails] = useState([]);
  const [judges, setJudges] = useState([]);
  const [assessments, setData] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await fetchingData(`/api/hackathons/${id}`);
          setHackathon(data);
        }
      } catch (error) {
        console.error("Error fetching judge data:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchAssessment = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/assessment/${id}`, {
            cache: "no-store",
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
    const fetchHackathonProjects = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}/hackathonDetails`, {
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
    const fetchJudges = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/judges/${id}/hackathonDetails`, {
            cache: "no-store",
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
    };

    fetchJudges();
  }, [id]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/teams`, {
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
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []);

  const handleSort = (order) => {
    const sortedAssessment = [...assessments].sort((a, b) => {
      // Sorting by overall score
      if (order === "asc") {
        return parseFloat(a.overall_score) - parseFloat(b.overall_score);
      } else {
        return parseFloat(b.overall_score) - parseFloat(a.overall_score);
      }
    });
    setData(sortedAssessment);
  };

  useEffect(() => {
    const fetchAssesHackathon = async () => {
      try {
        if (id) {
          const response = await fetch(
            `/api/assessment/${id}/showAssessHackathon`,
            {
              cache: "no-store",
              method: "GET",
              headers: { "Content-Type": "application/json" },
              next: { revalidate: 1 },
            }
          );
          const data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.error("the fetching is have an error ");
      }
    };
    fetchAssesHackathon();
  }, [id]);

  return (
    <div>
      <Layout>
      <header>
          <title>GHL | Judge Dashboard</title>
        </header>
        {projects && hackathon && (
          <div className="px-12">
            <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              Assess Projects for {hackathon.title}
            </h1>
            <h2 className="mt-2 text-lg leading-8 text-gray-200">
              Find a Hackathon Submision to rate
            </h2>
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 h-full my-4">
                {projects.map((project) => (
                  <HackathonCard
                    key={project.id}
                    headerText={project.name}
                    descriptionText={project.description}
                    buttonLink={`/projects/${project.id}`}
                    buttonText={"Evaluate"}
                  />
                ))}

                <h1></h1>
              </div>
            ) : (
              <h2 className="mt-2 text-2xl font-semibold leading-8 text-gray-200">
                No project has been submitted yet for this hackathon
              </h2>
            )}
          </div>
        )}
        <br></br>
        {assess && hackathon && assessments && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              My assessments
            </h1>
            <h2 className="mt-2 text-lg leading-8 text-gray-200">
              Projects already evaluated for this hackathon
            </h2>
            {assess.length > 0 ? (
              <div className="flex flex-col items-center justify-center">
                <div className="h-lvh w-lvw ">
                  {" "}
                  <Select
                    className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    options={[
                      { value: "", label: "Default" }, // Opción por defecto
                      { value: "asc", label: "Low to High" },
                      { value: "desc", label: "High to Low" },
                    ]}
                    defaultValue={{ value: "", label: "Sort by" }} // Valor predeterminado
                    onChange={(selectedOption) =>
                      handleSort(selectedOption.value)
                    }
                  />
                </div>
                <br></br>
                <table class="min-w-full  w-lvw text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-1 py-2">
                        Project Name
                      </th>
                      <th scope="col" class="px-1 py-2">
                        Team Name
                      </th>

                        <th scope="col" class="px-1 py-2">
                          Overall Score
                        </th>
                        <th scope="col" class="px-1 py-2">
                          Details
                        </th>
                        <th scope="col" class="px-1 py-2">
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {assessments.map((score) => {
                        const overall_score_rounded = parseFloat(
                          score.overall_score
                        ).toFixed(2);

                      return projects.map((project) => {
                        return judges.map((judge) => {
                          return details.map((detail) => {
                            return (
                              score.projectId == project.id &&
                              score.judgeId === judge.id &&
                              project.teamId === detail.id && (
                                <tr
                                  key={score.id}
                                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                  <th
                                    scope="row"
                                    class="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    {project.name}
                                  </th>
                                  <td class="px-1 py-2">{detail.name}</td>

                                    <td class="px-1 py-2">
                                      {overall_score_rounded}
                                    </td>
                                    <td class="px-1 py-2">
                                      <a href={`/assessment/${score.id}`}>
                                        Details
                                      </a>
                                    </td>
                                    <td class="px-1 py-2">
                                      <a href={`/assessment/${score.id}/editassessment`}>
                                        Edit
                                      </a>
                                    </td>
                                  </tr>
                                )
                              );
                            });
                          });
                        });
                      })}
                    </tbody>
                  </table>
                

                <h1></h1>
              </div>
            ) : (
              <h2 className="mt-2 text-2xl font-semibold leading-8 text-gray-200">
                No project has been evaluated yet for this hackathon
              </h2>
            )}
          </div>
        )}
      </Layout>
    </div>
  );
}

export default dashboard;

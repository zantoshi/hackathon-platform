import React from "react";
import { useState, useEffect } from "react";

//this is the hackathon's id
function Podium({ id }) {
  const [scores, setScores] = useState();
  const [projects, setProjects] = useState();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      try {
        if (id) {
          const respone = await fetch(`/api/assessment/${id}/scoreHackathon`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (respone.ok) {
            const data = await respone.json();
            setScores(data);
          } else {
            console.error(
              "it's getting some issues with the endpoint  :" + respone.status
            );
          }
        }
      } catch (error) {
        console.error(
          "There was a problem getting scores from the hackathon: " + error
        );
      }
    };
    getScores();
  }, [id]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}/hackathonDetails`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            setProjects(data);
          } else {
            console.error(
              "there some issues with endpoint : " + response.statusText
            );
          }
        }
      } catch (error) {
        console.error(
          "there was a problem getting project from the hackathon: " + error
        );
      }
    };
    getProjects();
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

  const calculateProjectScores = () => {
    if (!scores || !projects) return; // Check if data is loaded
    const projectScores = projects.map((project) => {
      const projectScore = scores.reduce((acc, score) => {
        if (score.projectId === project.id) {
          const sum = parseFloat(acc) + parseFloat(score.overall_score);
          return sum.toFixed(2); // Add score if project IDs match
        }
        return acc;
      }, 0);
      return { ...project, totalScore: projectScore }; // Add totalScore to project
    });
    return projectScores;
  };

  const projectScores = calculateProjectScores();

  const getTop3 = () => {
    if (!projectScores) return []; // Check if projectScores is available
    return projectScores
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 3); // Sort by score and get top 3
  };

  const top3Projects = getTop3();

  return (
    <div className="mt-4">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Top 3 podium
      </h2>
      <table class="min-w-full w-lvw text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-0.5 py-2">
              Project Name
            </th>
            <th scope="col" class="px-0.5 py-2">
              Team Name
            </th>
            <th scope="col" class="px-0.5 py-2">
              Total Score
            </th>
          </tr>
        </thead>
        <tbody>
          {top3Projects.length > 0 && (
            <>
              {top3Projects.map((project) => (
                <>
                  {details.map((detail) => (
                    <>
                      {project.teamId === detail.id && (
                        <>
                          <tr
                            key={project.id}
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              class="px-0.5 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {project.name}
                            </th>
                            <td class="px-0.5 py-2">{detail.name}</td>

                            <td class="px-0.5 py-2">{project.totalScore}</td>
                          </tr>
                        </>
                      )}
                    </>
                  ))}
                </>
              ))}
            </>
          )}
        </tbody>
      </table>
      {/* Display top 3 projects here */}

      {/* Handle cases where there are no top 3 projects */}
      {top3Projects.length === 0 && <p>No projects with scores yet.</p>}
    </div>
  );
}

export default Podium;
/*Total Score: {project.totalScore}
            </li> */

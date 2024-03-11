import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import HackathonCard from "@/components/HackathonCard";
import { fetchingData } from "../../../util/fetchingData";
import { getServerSideProps } from "../../../util/authUtils";

export { getServerSideProps };
function dashboard() {
  const [projects, setProject] = useState([]);
  const router = useRouter();
  const [id, setId] = useState("");
  const [hackathon, setHackathon] = useState(null);

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

  return (
    <div>
      <Layout>
        {projects && hackathon && (
          <div className="px-12">
            <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              Assess Projects for {hackathon.title}
            </h1>
            <h2 className="mt-2 text-lg leading-8 text-gray-200">
              Find a Hackathon Submision to rate
            </h2>
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-full my-4">
                {projects.map((project) => (
                  <HackathonCard
                    key={project.id}
                    headerText={project.name}
                    descriptionText={project.description}
                    buttonLink={`/projects/${project.id}`}
                    buttonText={"Evaluate"}
                  />
                ))}
              </div>
            ) : (
              <h2 className="mt-2 text-2xl font-semibold leading-8 text-gray-200">
                No project has been submitted yet for this hackathon
              </h2>
            )}
          </div>
        )}
      </Layout>
    </div>
  );
}

export default dashboard;

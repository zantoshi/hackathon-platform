import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import HackathonCard from "@/components/HackathonCard";

function dashboard() {
  const [projects, setProject] = useState([]);
  const router = useRouter();
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
        <div>
          <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Judge Hackathons
          </h1>
          <h2 className="mt-2 text-lg leading-8 text-gray-200">
            Find a Hackathon Submision to rate
          </h2>
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
        </div>
      </Layout>
    </div>
  );
}

export default dashboard;

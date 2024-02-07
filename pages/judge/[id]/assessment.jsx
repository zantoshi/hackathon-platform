import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import HackathonCard from "@/components/HackathonCard";
import ButtonSecondary from "@/components/ButtonSecondary";
import CreateAssessForm from "@/components/CreateAssessForm";

function assessment() {
  const [projects, setProject] = useState();
  const [hackathon, setHackathon] = useState();
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
    const fetchHackathon = async () => {
      try {
        if (id && projects) {
          const data = await fetch(`/api/hackathons/${projects.hackathonId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (data.ok) {
            const response = await data.json();
            setHackathon(response);
          } else {
            console.error(
              "Error fetching Registration Hackthon:",
              data.statusText
            );
          }
        }
      } catch (error) {
        console.error("Error fetching hackathon data", error);
      }
    };
    fetchHackathon();
  }, [id, projects]);
  return (
    <Layout>
      <div className="w-full md:pl-14 text-white px-5">
       
          {hackathon && projects && (
             <div className="mb-10 space-y-5">
            <h1 className="font-bold mb-3 custom-text-shadow text-4xl">
              Rate {projects.name} for {hackathon.title}{" "}
            </h1>
            <p className="text-gray-400 font-semibold  text-lg ">
            Interested in helping us spreading innovation? Reach out.
          </p>
     
        <CreateAssessForm hackathonId={hackathon.id} projectId={projects.id}></CreateAssessForm>
            </div>
          )}

      </div>
    </Layout>
  );
}

export default assessment;

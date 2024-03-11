import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProjectSubmissionForm from "@/components/ProjectSubmissionForm";
import { getServerSideProps } from "../../../util/authUtils";

export { getServerSideProps };
export default function SubmitProject() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [id, setId] = useState("");
  const [hackathon, setHackathon] = useState([]);
  const [project, setProject] = useState([]);
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];
  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
      setLoading(false);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/hackathons/${id}`, {
            cache: "no-store",
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
    const fetchProject = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}/projectUser`, {
            method: "GET",
            cache: "no-store",
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 1 },
          });
          if (response.ok) {
            const data = await response.json();
            setProject(data);
          } else {
            console.error("Error fetching hackathon:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchProject();
  }, [id]);

  useEffect(() => {
    if (formattedCurrentDate > hackathon.endDate) {
      router.push("/");
    }
  }, [formattedCurrentDate, hackathon.endDate]);

  return (
    <Layout>
      {formattedCurrentDate <= hackathon.endDate && (
        <div className="py-4 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ButtonSecondary
              buttonText={"Back"}
              buttonLink={`/hackathons/${id}`}
            />
            <PageHeader
              headerText={"Submit Project for " + hackathon.title}
              descriptionText={
                "Fill out the form to complete the hackathon! :)"
              }
            />

            {loading ? (
              <p>Loading...</p>
            ) : (
              <ProjectSubmissionForm hackathonId={id} project={project} />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProjectSubmissionForm from "@/components/ProjectSubmissionForm";

export default function SubmitProject() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [id, setId] = useState("");
  const [hackathon, setHackathon] = useState([]);

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

  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonSecondary buttonText={"Back"} buttonLink={`/hackathons/${id}`} />
          <PageHeader
            headerText={"Submit Project for " + hackathon.title + " Hackathon"}
            descriptionText={"Fill out the form to complete the hackathon! :)"}
          />
        
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ProjectSubmissionForm hackathonId={id} />
          )}
        </div>
      </div>
    </Layout>
  );
}

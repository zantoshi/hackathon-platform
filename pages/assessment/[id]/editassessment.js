import { useSession } from "next-auth/react";
import { useState, useEffect, use } from "react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateAssessForm from "@/components/CreateAssessForm";
import PageHeader from "@/components/PageHeader";
import { useRouter} from "next/router";
import { getServerSideProps } from "../../../util/authUtils";
import ButtonSecondary from "@/components/ButtonSecondary";

export { getServerSideProps };
export default function addscore() {

const { data: session } = useSession();
  const [Userdetails, setUserdetails] = useState([])
  const router = useRouter();
  const [id, setId] = useState("");
  const [scoreid, setscoreId] = useState("");
  const [projects, setProject] = useState();
  const [hackathon, setHackathon] = useState();
  const [assess, setAssess] = useState();

  useEffect(() => {
    if (router.isReady) {
    setId(router.query.id);
    setscoreId(router.query.sponsorid);
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

  

  // If session exists and is an admin user, display content
  // Only allow my email because I am the only one allowed to create hackathons ATM.
  if (session && Userdetails.role ==="ADMIN") {
    return (
      
      <Layout>
        
        <>
        {id && assess && projects && (
        <>
       <ButtonSecondary
                    buttonLink={`/judge/${assess.hackathonId}/dashboard`}
                    buttonText="Back to judge dashboard"
                  ></ButtonSecondary>
        
        <PageHeader
              headerText={"Edit Score for " + projects.name + " project" }  />
              <CreateAssessForm id={id} scoreid={scoreid} /></>
        )}
        </>
        
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

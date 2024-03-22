import { useSession } from "next-auth/react";
import { useState, useEffect} from "react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateHackathonForm from "@/components/CreateHackathonForm";
import { useRouter} from "next/router";
import { getServerSideProps } from "../../../util/authUtils";
import SessionGuard from "@/components/SessionGuard";

export default function CreateHackathon() {
  const { data: session } = useSession();
  const [Userdetails, setUserdetails] = useState([]);
  const [hackathon,setHackathon] = useState([])
  const router = useRouter();
  const [id, setId] = useState("");


  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

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
    const fetchHackathon = async () => {
      try {
        if (id) {
          const data = await fetch(`/api/hackathons/${id} `, {
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
  }, [id]);

  // If session exists and is an admin user, display content
  // Only allow my email because I am the only one allowed to create hackathons ATM.
  if (session && Userdetails.role === "ADMIN") {
    return (
      <Layout>
      <SessionGuard >{session && (   <CreateHackathonForm id={id}/>)}</SessionGuard>
     
      </Layout>
    );
  } else {
    return (
      <Layout>
        <header>
          <title>GHL | Hackathons</title>
        </header>
        <SessionGuard >{session && ( <AccessDenied />)}</SessionGuard>
      </Layout>
    );
  }
}

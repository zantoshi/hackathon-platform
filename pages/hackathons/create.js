import { useSession } from "next-auth/react";
import { useState, useEffect, use } from "react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateHackathonForm from "@/components/CreateHackathonForm";
import { getServerSideProps } from "../../util/authUtils";

export { getServerSideProps };
export default function CreateHackathon() {

const { data: session } = useSession();
  const [Userdetails, setUserdetails] = useState([])

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

  

  // If session exists and is an admin user, display content
  // Only allow my email because I am the only one allowed to create hackathons ATM.
  if (session && Userdetails.role ==="ADMIN") {
    return (
      
      <Layout>
        <header>
          <title>GHL | Create Hackathon</title>
        </header>
        <CreateHackathonForm />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <header>
          <title>GHL | Not access</title>
        </header>
        <AccessDenied />
      </Layout>
    );
  }
}

import { useSession } from "next-auth/react";
import { useState, useEffect, use } from "react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import SponsorSubmissionForm from "@/components/SponsorSubmissionForm";
import { useRouter} from "next/router";
import { getServerSideProps } from "../../../../util/authUtils";

export default function addsponsor() {

const { data: session } = useSession();
  const [Userdetails, setUserdetails] = useState([])
  const router = useRouter();
  const [id, setId] = useState("");
  const [sponsorid, setsponsorId] = useState("");

  useEffect(() => {
    if (router.isReady) {
    setId(router.query.id);
    setsponsorId(router.query.sponsorid);
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

  

  // If session exists and is an admin user, display content
  // Only allow my email because I am the only one allowed to create hackathons ATM.
  if (session && Userdetails.role ==="ADMIN") {
    return (
      
      <Layout>
        <header>
          <title>GHL | Edit Sponsor</title>
        </header>
        <SponsorSubmissionForm id = {id} sponsorid = {sponsorid} />
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

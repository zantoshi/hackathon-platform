import { useSession } from "next-auth/react";
import { useState, useEffect, use } from "react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateTeamForm from "@/components/CreateTeamForm";
import { useRouter } from "next/router";
import ButtonSecondary from "@/components/ButtonSecondary";
import PageHeader from "@/components/PageHeader";
import { getServerSideProps } from "../../../util/authUtils";
import SessionGuard from "@/components/SessionGuard";

function edit() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [team, setTeam] = useState([]);
  const [user, setUser] = useState();
  const [test, setTest] = useState();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const team = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/team/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            setTeam(data);
          } else console.log("Error fetching the:", response.statusText);
        }
      } catch (error) {
        console.log(
          "it's no able to get the data from the database because of ",
          error
        );
      }
    };
    team();
  }, [id]);

  useEffect(() => {
    const getUser = async () => {
      if (team) {
        try {
          const response = await fetch(`/api/users/${team.creatorId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) {
            throw new Error(`Error fetching user data: ${response.statusText}`);
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.log("Error getting data from table user: ", error);
        }
      }
    };
    getUser();
  }, [team]);


  useEffect(()=>{
    if(user && session){
      if(user.email !== session.user.email)
        router.push("/")
    }
  },[user])
  

  return (
    <Layout>
      <header>
        <title>GHL | Edit Team</title>
      </header>
      <SessionGuard>
        {session && (
          <div className="">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ButtonSecondary buttonText={"Back"} buttonLink={`/team/${id}`} />
              <PageHeader
                headerText={"Teams"}
                descriptionText={
                  "Edit some features of the team and get ready to compete."
                }
              />
              <CreateTeamForm id={id}></CreateTeamForm>
            </div>
          </div>
        )}
      </SessionGuard>
    </Layout>
  );
}

export default edit;

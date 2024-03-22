import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
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
  const [test, setTest] = useState();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  return (
    <Layout>
        <header>
          <title>GHL | Edit Team</title>
        </header>
      <SessionGuard>
        {session && ( <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonSecondary buttonText={"Back"} buttonLink={`/team/${id}`} />
          <PageHeader
            headerText={"Teams"}
            descriptionText={"Edit some features of the team and get ready to compete."}
          />
          <CreateTeamForm id={id}></CreateTeamForm>
        </div>
      </div>)}
      </SessionGuard>
    </Layout>
  );
}

export default edit;

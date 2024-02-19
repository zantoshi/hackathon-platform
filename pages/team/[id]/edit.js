import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateTeamForm from "@/components/CreateTeamForm";
import { useRouter } from "next/router";
import ButtonSecondary from "@/components/ButtonSecondary";
import PageHeader from "@/components/PageHeader";

function edit() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [test, setTest] = useState();

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonSecondary buttonText={"Back"} buttonLink={"/team"} />
          <PageHeader
            headerText={"Teams"}
            descriptionText={"Create a team in order to compete in hackathons."}
          />
          <CreateTeamForm id={id}></CreateTeamForm>
        </div>
      </div>
    </Layout>
  );
}

export default edit;

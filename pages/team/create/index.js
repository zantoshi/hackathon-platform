import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import CreateTeamForm from "@/components/CreateTeamForm";
import { signIn, useSession } from "next-auth/react";
import ButtonSecondary from "@/components/ButtonSecondary";

export default function HackathonList() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <Layout>
       <div className="py-4 sm:py-12">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <ButtonSecondary buttonText={"Back"} buttonLink={"/"} />
         <PageHeader
           headerText={"Teams"}
           descriptionText={"Create a team in order to compete in hackathons."}
         />
         <CreateTeamForm />
       </div>
     </div>
   { !loading && !session && signIn()}
    </Layout>
  );
}

import { useSession } from "next-auth/react";
import { useState, useEffect} from "react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateTeamForm from "@/components/CreateTeamForm";
import { useRouter} from "next/router";

function edit() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [test,setTest] =  useState()

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);



  return (
    <Layout>
      <CreateTeamForm id={id}></CreateTeamForm>
    </Layout>
  )
}

export default edit

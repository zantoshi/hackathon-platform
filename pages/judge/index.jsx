import Layout from "../../components/layout";
import HeroModule from "@/components/HeroModule";
import JudgeView from "@/components/JudgeView";
import hackathons from "@/data/content/hackathons.json";
import { useEffect, useState } from "react";
import { fetchingData } from "../../util/fetchingData";
import AccessDenied from "@/components/access-denied";
import { getServerSideProps } from "../../util/authUtils";
import SessionGuard from "@/components/SessionGuard";
import { useSession } from "next-auth/react";

export default function IndexPage() {
  const [judge, setJudge] = useState(null);
  const { data: session, status } = useSession();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingData("/api/judges");
        setJudge(data);
      } catch (error) {
        console.error("Error fetching judge data:", error);
      }
    };
    fetchData();
  }, []);


  if(judge){
  return (
    <Layout>
        <header>
          <title>GHL | Judge Dashboard</title>
        </header>
    <SessionGuard>
      {session && (
          <JudgeView></JudgeView>
      )}
    </SessionGuard>
    </Layout>
  );
  }else{     
    return(
      <Layout>
        <header>
          <title>GHL | Not access</title>
        </header>
      <SessionGuard>
        {session && (
          <AccessDenied />
        )}
      </SessionGuard>
    </Layout>
    )
  }

}

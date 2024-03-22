import Layout from "../../components/layout";
import HeroModule from "@/components/HeroModule";
import JudgeView from "@/components/JudgeView";
import hackathons from "@/data/content/hackathons.json";
import { useEffect, useState } from "react";
import { fetchingData } from "../../util/fetchingData";
import AccessDenied from "@/components/access-denied";
import { getServerSideProps } from "../../util/authUtils";

export default function IndexPage() {
  const [judge, setJudge] = useState(null);

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
      <JudgeView></JudgeView>
    </Layout>
  );
  }else{     
    return(
      <Layout>
        <header>
          <title>GHL | Not access</title>
        </header>
      <AccessDenied />
    </Layout>
    )
  }

}

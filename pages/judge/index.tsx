import Layout from "../../components/layout";
import HeroModule from "@/components/HeroModule";
import JudgeView from "@/components/JudgeView";
import hackathons from "@/data/content/hackathons.json"

export default function IndexPage() {
  return (
    <Layout>
        <JudgeView></JudgeView>
    </Layout>
  );
}

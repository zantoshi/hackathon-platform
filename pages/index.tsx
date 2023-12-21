import Layout from "../components/layout";
import HeroModule from "@/components/HeroModule";

export default function IndexPage() {
  return (
    <Layout>
      <HeroModule />

      <BenefitsModule data={developerBenefits} />

      <UpcomingHackathons data={hackathons} />

      <Sponsors data={sponsors} />

      <CallToAction data={homePage} />
    </Layout>
  );
}

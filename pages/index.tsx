import Layout from "../components/layout";
import HeroModule from "@/components/HeroModule";
import { useEffect } from "react";
export default function IndexPage() {
  useEffect(() => {
    localStorage.setItem("title", "GHL");
  }, []);
  return (
    <Layout>
      <HeroModule />
    </Layout>
  );
}

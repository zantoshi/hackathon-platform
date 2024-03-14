import React from "react";
import Sponsors from "@/components/Sponsors";
import sponsors from "@/data/content/sponsors.json"
import Layout from "@/components/layout";
import { useEffect } from "react";
const sponsor = () => {
  useEffect(() => {
    localStorage.setItem("title", "GHL | Sponsor");
  }, []);
  return (
  <Layout>
    <Sponsors data={sponsors}></Sponsors>
  </Layout>
  );
};

export default sponsor;

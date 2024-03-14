import Layout from "@/components/layout";
import Contact from "@/components/Contact";
import { useEffect } from "react";
const contact = () => {
  useEffect(() => {
    localStorage.setItem("title", "GHL | Contact");
  }, []);
  return (
      <Layout>
        <Contact></Contact>
      </Layout>
  );
};

export default contact;

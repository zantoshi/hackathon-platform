import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import AddUserTeam from "@/components/AddUserTeam";
import { useRouter } from "next/router";

function members() {
  const router = useRouter();
  const [id, setId] = useState("");
 

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  return (
    <Layout>
      <div className="h-screen p-5">
        <div className="mx-auto px-6 lg:px-8 ">
          <div className="my-2">
            <h1 className="font-bold custom-text-shadow text-4xl text-center">
              Adding Members to the Team
            </h1>
            <p className="text-gray-400 font-semibold text-lg text-center ">
              Enter the username or gamertag of the user you want to invite to
              your team.
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-center mb-4">
          <AddUserTeam id={id}></AddUserTeam>
        </div>

      </div>
    </Layout>
  );
}

export default members;

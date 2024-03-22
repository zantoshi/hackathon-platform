import React, { useEffect } from "react";
import Layout from "@/components/layout";
import { getServerSideProps } from "../../util/authUtils";
import EditUserForm from "@/components/EditUserForm";
import { useSession } from "next-auth/react";
import SessionGuard from "@/components/SessionGuard";

export default function settings() {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <header>
        <title>GHL | Settings</title>
      </header>
      <SessionGuard>
        {session && (
          <div className="lg:w-1/2 md:w-full w-full md:px-4 px-10">
            <h1 className="font-bold custom-text-shadow text-4xl text-center">
              Edit profile
            </h1>
            <div className="">
              <EditUserForm></EditUserForm>
            </div>
          </div>
        )}
      </SessionGuard>
    </Layout>
  );
}

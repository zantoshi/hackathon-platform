import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import AddUserTeam from "@/components/AddUserTeam";
import { useRouter } from "next/router";
function members() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [members, setMembers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchJudgeUser = async () => {
      try {
        const response = await fetch(`/api/users/users`, {
          cache: "no-store",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          next: { revalidate: 1 },
        });

        if (response) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error(
            "this is Error for fetching users:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("this is Error for fetching users:", error);
      }
    };
    fetchJudgeUser();
  }, []);

  useEffect(() => {
    const getMembers = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/members/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setMembers(data);
        } else {
          console.log(`there's no id for team ${id} `);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    getMembers();
  }, [id]);

  return (
    <Layout>
      {console.log(members)}
      <div className="h-screen">
        <div className="mx-auto px-6 lg:px-8 ">
          <div className="my-2">
            <h1 className="font-bold custom-text-shadow text-4xl text-center">
              Adding Members to the Team
            </h1>
            <p className="text-gray-400 font-semibold text-lg ">
              Enter the username or gamertag of the user you want to invite to
              your team.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <AddUserTeam></AddUserTeam>
        </div>
        <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {users.map((user) => {
            return (
              <>
                {members.map((member) => {
                  return (
                    <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {user.id === member.userId && (
                        <div
                          class="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                          key={member.userId}
                        >
                          <img
                            class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                            src={user.image}
                          ></img>

                          <div class="text-center space-y-2 sm:text-left">
                            <div class="space-y-0.5 flex-cols items-center">
                              <p class="text-xl text-white font-semibold">
                                {user.gamertag}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default members;

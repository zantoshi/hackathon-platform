import React, { useState, useEffect } from 'react';
import Layout from '../../../components/layout';
import { useRouter } from 'next/router';
import Image from 'next/image'
import avatarTeam from "../../../public/users-group.svg";
import ButtonSecondary from "@/components/ButtonSecondary";

function Index() {
  const [team, setTeam] = useState({});
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id || "");
    }
  }, [router.isReady, router.query.id]);

  useEffect(() => {
    const getTeam = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/team/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setTeam(data);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    getTeam();
  }, [id]);

  return (
    <>
      <Layout>
        <div className='w-full md:pl-14 text-white px-5'>
        <ButtonSecondary buttonText={"Back"} buttonLink={"/"} />
          <div className="mb-2 mt-5">
            <div className='px-5 mb-3'>
              {team.teamAvatar && team && team.teamAvatar === "" ? (<Image
                src={team.teamAvatar}
                alt="Avatar profile"
                className="h-12 w-12 rounded-full mr-2 inline-block"
                width={12}
                height={12}
              />) :
                <Image
                  src={avatarTeam}
                  alt="Avatar profile"
                  className="h-12 w-12 rounded-full mr-2 inline-block bg-purple-500 py-2 hover:bg-purple-600"
                  width={30}
                  height={30}
                />
              }
            </div>
            <h1 className="font-bold mb-3 custom-text-shadow text-4xl">
              {team.name}
            </h1>
            <div className='px-5 py-2'>
              <h2 className="font-semibold  text-lg ">
                Team Description
              </h2>
              <p>{team.description}
              </p>
            </div>
            <div className='px-5 py-2'>
              <h2 className="font-semibold  text-lg ">
                Team Members
              </h2>
              <p className="block text-sm font-medium leading-6 text-white">
                {team.teamMembers}
              </p>
            </div>
          </div>
        </div>
        <ButtonSecondary buttonText={"Edit"} buttonLink={`/team/${id}/edit`} />
      </Layout>
    </>
  );
}

export default Index;

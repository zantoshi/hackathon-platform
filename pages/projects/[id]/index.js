import React, { useEffect, useState } from 'react'
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import HackathonCard from "@/components/HackathonCard";
import ButtonSecondary from "@/components/ButtonSecondary";

function Project() {
  const [projects, setProject] = useState([])
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchHackathonProjects = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
          if (response.ok) {
            const projectsData = await response.json();
            setProject(projectsData);
          } else {
            console.error("Error fetching of projects:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchHackathonProjects();
  }, [id]);

  return (
    <div className=''>
      <Layout>
    
        {console.log(projects)}
        <>
        
          {
            id && projects && (<div className='w-full md:pl-14 text-white px-5'>
              <ButtonSecondary buttonText={"Back"} buttonLink={`/hackathons/${projects.hackathonId}/manage`} />
               
            <h1 className='text-3xl font-bold pt-4'>{projects.name}</h1>
            <br></br>
            <h1 className='text-2xl font-bold '>{projects.description}</h1>
            <br></br>
            <h1 className='text-1xl font-bold '>{projects.loomLink}</h1>
            <h1 className='text-1xl font-bold '>{projects.pitchLink}</h1>
            <h1 className='text-1xl font-bold '>{projects.projectResourceLink}</h1>
            <h1 className='text-1xl font-bold '>{projects.comments}</h1>
            <br></br>
            <ButtonSecondary buttonText={"Assess >" } buttonLink={`/judge/${projects.id}/assessment`}></ButtonSecondary>
            </div>)
          }
        </>

      </Layout>

    </div>
  )
}
export default Project
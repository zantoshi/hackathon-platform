import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import RegisterTeamForm from "@/components/RegisterTeamForm";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function HackathonRegistration() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [hackathon,setHackathon] = useState([])

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(()=>{
    const fetchHackathon = async()=>{
      try{
        if(id){
          const data =  await fetch(`/api/hackathons/${id} `,{
            method:"GET",
            headers: { "Content-Type": "application/json" }
          })
          if(data.ok){
            const response = await data.json()
            setHackathon(response)
            setPrices([["1st Place Prize", response.firstPlacePrize], ["2nd Place Prize", response.secondPlacePrize], ["3rd Place Prize", response.thirdPlacePrize]])
          }else{
            console.error("Error fetching Registration Hackthon:", data.statusText);
          }
        }
      }catch(error){
        console.error("Error fetching hackathon data",error)
      }
    }
    fetchHackathon()
  },[id])

  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonSecondary buttonText={"Back"} buttonLink={"/"} />
          <PageHeader
            headerText={`Confirm Registration for ${hackathon.title} Hackathon `}
            descriptionText={"Fill out the form to complete your registration."}
          />
          <RegisterTeamForm hackathonId={id} />
        </div>
      </div>
    </Layout>
  );
}

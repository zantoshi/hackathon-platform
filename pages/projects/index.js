import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import BenefitsModule from "@/components/BenefitsModule";
import bitblockboom from "@/data/content/bitBlockBoom.json";
import sponsors from "@/data/content/sponsors.json";
import Sponsors from "@/components/Sponsors";
import { Check } from "lucide-react";
import PrizePool from "@/components/PrizePool";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import Hackathons from "@/components/Hackathons";
import hackathons from "@/data/content/hackathons.json";
import { useEffect, useState } from "react";
import JudgeView from "@/components/JudgeView"

export default function HackathonList() {
  const [user,setUser] = useState();
  
  useEffect(()=>{
    const getRole = async()=>{
      const response = await fetch("/api/users",
      {
        method:"GET",
        headers: { "Content-Type": "application/json"}
      })
      const data= await response.json()
      setUser(data)
    }
    getRole()
  },[])

  return (
    <Layout>
      {user && user.role === "JUDGE" ? (
       <JudgeView/>
      ):
      (
        <Hackathons data={hackathons} />
      )}
     
    </Layout>
  );
}

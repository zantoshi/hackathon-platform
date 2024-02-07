import React, { useEffect, useState } from 'react';
import HackathonCard from "@/components/HackathonCard";
import { fetchingData } from "../util/fetchingData.js";
import { useSession } from "next-auth/react";

function JudgeView() {
  const [hackathons, setHackathons] = useState([]);
  const [hackathonJudges, setHackathonJudges] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingData("/api/judges");
        setHackathonJudges(data);
      } catch (error) {
        console.error("Error fetching judge data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const hackathonsResponse = await fetch(`/api/hackathons/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (hackathonsResponse.ok) {
          const hackathonsData = await hackathonsResponse.json();
          setHackathons(hackathonsData);
        } else {
          console.error("Error fetching hackathons:", hackathonsResponse.statusText);
        }
      } catch (error) {
        console.error("Error fetching hackathons:", error);
      }
    };

    fetchHackathons(); // Call the fetchHackathons function
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>Judge Hackathons</h1>
      <h2 className='mt-2 text-lg leading-8 text-gray-200'>Find a Hackathon Submission to rate</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-full my-4">
        {hackathons.map((hackathon) => (
          <React.Fragment key={hackathon.id}>
            {hackathonJudges.map(judge => {
              if (judge.email === session.user.email && judge.hackathonId === hackathon.id) {
                return (
                  <HackathonCard
                    key={hackathon.id}
                    headerText={hackathon.title}
                    descriptionText={hackathon.description}
                    buttonLink={`/judge/${hackathon.id}/dashboard`}
                  />
                );
              }
              return null;
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default JudgeView;

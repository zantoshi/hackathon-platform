import React from 'react'
import { useEffect, useState } from 'react';
import HackathonCard from "@/components/HackathonCard";

function JudgeView() {
  const [hackathons, setHackathons] = useState([]);
  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const hackathons = await fetch(`/api/hackathons/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (hackathons.ok) {
          const hackathonsData = await hackathons.json();
          setHackathons(hackathonsData);
        } else {
          console.error("Error fetching hackathons:", hackathons.statusText);
        }
      } catch (error) {
        console.error("Error fetching hackathons:", error);
      }
    };

    fetchHackathons(); // Call the fetchHackathons function
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div>
      <h1 className='text-3xl font-bold tracking-tight  sm:text-4xl'>Judge Hackathons</h1>
      <h2 className='mt-2 text-lg leading-8 text-gray-200'>Find a Hackathon Submision to rate</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-full my-4">
        {hackathons.map((hackathon) => (
          <HackathonCard
            key={hackathon.id}
            headerText={hackathon.title}
            descriptionText={hackathon.description}
            buttonLink={`/judge/${hackathon.id}/dashboard`}
          />
        ))}
      </div>
    </div>
  )
}

export default JudgeView

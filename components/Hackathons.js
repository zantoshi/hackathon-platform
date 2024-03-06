import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import HackathonCard from "@/components/HackathonCard";
import ButtonSecondary from "@/components/ButtonSecondary";

const Hackathons = ({ data }) => {
  const [hackathons, setHackathons] = useState([]);
  const [Userdetails, setUserdetails] = useState([]);
  const { data: session } = useSession();

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await fetch(`/api/users`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (users.ok) {
          const usersData = await users.json();
          setUserdetails(usersData);
        } else {
          console.error("Error fetching teams:", users.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchUsers(); // Call the fetchTeams function
  }, []);

  if (session && Userdetails.role === "ADMIN") {
    return (
      <div className="py-12 text-left">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              Hackathons
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-200">
              Create a new Hackathon
            </p>
            <br></br>
            <ButtonSecondary
              buttonText="Create"
              buttonLink="hackathons/create"
            ></ButtonSecondary>
          </div>

          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-full my-4">
            {hackathons.map((hackathon) => (
              <HackathonCard
                key={hackathon.id}
                headerText={hackathon.title}
                descriptionText={hackathon.description}
                buttonText={"Manage"}
                state = {hackathon.endDate}
                buttonLink={`/hackathons/${hackathon.id}/manage`}
                flagDate={true}
                hackathonLink={`/hackathons/${hackathon.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="py-12 text-left">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              {data.headerText}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-200">
              {data.descriptionText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-full my-4">
            {hackathons.map((hackathon) => (
              <HackathonCard
                key={hackathon.id}
                headerText={hackathon.title}
                descriptionText={hackathon.description}
                state = {hackathon.endDate}
                flagDate={true}
                buttonLink={`/hackathons/${hackathon.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Hackathons;

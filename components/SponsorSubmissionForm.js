import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";
import PageHeader from "@/components/PageHeader";

const SponsorSubmissionForm = ({sponsorid,id}) => {
  const router = useRouter();

  const [sponsorName, setsponsorName] = useState("");
  const [sponsorEmail, setsponsorEmail] = useState("");
  const [sponsorImage, setsponsorImage] = useState("");

  const create = async (e) => {
    e.preventDefault();
    try {
      if(sponsorid){
        const body = {
        sponsorName,
        sponsorEmail,
        sponsorImage,
        };
        await fetch(`/api/hackathonsponsors/${sponsorid}/update`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        router.push(`/hackathons/${id}/manage`);
      }else{
        const body = {
          sponsorName,
          sponsorEmail,
          sponsorImage,
        };
  
        await fetch(`/api/hackathons/${id}/addsponsor`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        router.push(`/hackathons/${id}/manage`);
      }
    } catch (error) {
      console.error(error);
    }

    // const forumId = await createForum({ subject, description });
  };


  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        if (id) {
          const data = await fetch(`/api/hackathons/${id} `, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

        }
      } catch (error) {
        console.error("Error fetching hackathon data", error);
      }
    };
    fetchHackathon();
  }, [id]);

  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        if (sponsorid) {
          const data = await fetch(`/api/hackathonsponsors/${sponsorid}/findsponsor `, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (data.ok) {
            const response = await data.json();
            setsponsorName(response.name)
            setsponsorEmail(response.email)
            setsponsorImage(response.image)
          } else {
            console.error(
              "Error fetching Registration Hackthon:",
              data.statusText
            );
          }
        }
      } catch (error) {
        console.error("Error fetching hackathon data", error);
      }
    };
    fetchSponsor();
  }, [sponsorid]);


  return (
  
    <form onSubmit={create}>
      {console.log(sponsorName)}
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
      <PageHeader
            headerText={"Add Sponsor"}
            descriptionText={"Wohooo! LFG and create a hackathon."}
          />
        <div className="sm:col-span-4">
          <label
            htmlFor="sponsorName"
            className="block text-sm font-medium leading-6 text-white"
          >
            Sponsor Name
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="sponsorName"
                id="sponsorName"
                autoComplete="sponsor-name"
                onChange={(e) => setsponsorName(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                required
                value={sponsorName}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="sponsorEmail"
            className="block text-sm font-medium leading-6 text-white"
          >
            Sponsor Email
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="sponsorDescription"
                id="sponsorDescription"
                autoComplete="sponsor-email"
                onChange={(e) => setsponsorEmail(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                required
                value={sponsorEmail}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="loomLink"
            className="block text-sm font-medium leading-6 text-white"
          >
            SponsorImage
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="sponsorImage"
                id="sponsorImage"
                autoComplete="sponsorImage"
                onChange={(e) => setsponsorImage(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                required
                value={sponsorImage}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <div className="mb-4 mt-6">
            <div>
              <ButtonPrimary buttonText={"Add Sponsor"} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SponsorSubmissionForm;

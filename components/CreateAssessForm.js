import React from 'react'
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";


function CreateAssessForm({ hackathonId, projectId,id }) {

  const router = useRouter();
  const [projects, setProject] = useState();
  const [hackathon, setHackathon] = useState();
  const [values, setValues] = useState({
    impact: "",
    feasability: "",
    user_experience: "",
    scalability: "",
    innovate: "",
    pitch: "",
    hackathonId: hackathonId,
    projectId: projectId,
  });

  useEffect(() => {
    const fetchHackathonProjects = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
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

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        if (id && projects) {
          const data = await fetch(`/api/hackathons/${projects.hackathonId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (data.ok) {
            const response = await data.json();
            setHackathon(response);
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
    fetchHackathon();
  }, [id, projects]);


  useEffect(() => {
    const fetchAssessment = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/assessment/${id}/scoreDetails`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const assessData = await response.json();
            setValues({
              feasability:assessData.feasability,
              scalability: assessData.scalability,
              user_experience: assessData.user_experience,
              innovate: assessData.innovate,
              pitch: assessData.pitch,
              impact: assessData.impact
            });
          } else {
            console.error("Error fetching of projects:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchAssessment();
  }, [id]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
console.log("feasability: "+values.feasability)
  },[values])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (values) {
        if(id){
          const impact = parseInt(values.impact);
          const feasability = parseInt(values.feasability);
          const user_experience = parseInt(values.user_experience);
          const scalability = parseInt(values.scalability);
          const innovate = parseInt(values.innovate);
          const pitch = parseInt(values.pitch);

          const overall_score = (impact + feasability + user_experience + scalability + innovate + pitch) / 6;
          
          const response = await fetch(`/api/assessment/${id}/update`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              impact,
              feasability,
              user_experience,
              scalability,
              innovate,
              pitch,
              overall_score,
            }),
          });
         router.push(`/judge`);
        }else{
          const impact = parseInt(values.impact);
          const feasability = parseInt(values.feasability);
          const user_experience = parseInt(values.user_experience);
          const scalability = parseInt(values.scalability);
          const innovate = parseInt(values.innovate);
          const pitch = parseInt(values.pitch);
   
          const overall_score = (impact + feasability + user_experience + scalability + innovate + pitch) / 6;
  
      
          const response = await fetch(`/api/assessment/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              impact,
              feasability,
              user_experience,
              scalability,
              innovate,
              pitch,
              hackathonId: hackathonId,
              projectId: projectId,
              overall_score,
            }),
          });
          console.log(response);
          router.push(`/judge`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className='space-y-6'>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 md:flex">
            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="Impact"
                className="block text-sm font-medium leading-6 text-white"
              >
                Impact
              </label>
              <div className="">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="impact"
                    id="impact"
                    autoComplete=""
                    placeholder="Rate 1-5"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold
                    lg:w-60 md:w-40"
                    onChange={handleChange}
                    value={values.impact}
                    min={1}
                    max={5}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="feasability"
                className="block text-sm font-medium leading-6 text-white"
              >
                feasability
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="feasability"
                    id="feasability"
                    autoComplete=""
                    placeholder="Rate 1-5"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold
                    lg:w-60 md:w-40"
                    onChange={handleChange}
                    value={values.feasability}
                    min={1}
                    max={5}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="User Experience"
                className="block text-sm font-medium leading-6 text-white"
              >
                User Experience
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="user_experience"
                    id="user_experience"
                    autoComplete=""
                    placeholder="Rate 1-5"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold
                    lg:w-60 md:w-40"
                    onChange={handleChange}
                    value={values.user_experience}
                    min={1}
                    max={5}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 md:flex">
            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="Scalability"
                className="block text-sm font-medium leading-6 text-white"
              >
                Scalability
              </label>
              <div className="">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="scalability"
                    id="scalability"
                    autoComplete=""
                    placeholder="Rate 1-5"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold
                    lg:w-60 md:w-40"
                    onChange={handleChange}
                    value={values.scalability}
                    min={1}
                    max={5}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="Innovate"
                className="block text-sm font-medium leading-6 text-white"
              >
                Innovate
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="innovate"
                    id="innovate"
                    autoComplete=""
                    placeholder="Rate 1-5"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold
                    lg:w-60 md:w-40"
                    onChange={handleChange}
                    value={values.innovate}
                    min={1}
                    max={5}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="The Pitch"
                className="block text-sm font-medium leading-6 text-white"
              >
                The Pitch
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="pitch"
                    id="pitch"
                    autoComplete=""
                    placeholder="Rate 1-5"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold
                    lg:w-60 md:w-40"
                    onChange={handleChange}
                    value={values.pitch}
                    min={1}
                    max={5}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 mt-6 flex justify-center md:justify-start">
            <div>
              <button className="w-15 md:w-30 bg-purple-500 hover:bg-purple-600 text-white border-1 border-black font-bold md:py-2 ,md:px-4 px-6 rounded-full text-base py-4">
                <div className="flex justify-center align-middle items-center">
                  <span className="mr-2 text-white text-base ">
                    Submit
                  </span>
                  <ChevronRight color="white" className=" w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default CreateAssessForm

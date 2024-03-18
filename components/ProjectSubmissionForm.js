import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";

const ProjectSubmissionForm = ({ hackathonId, project }) => {
  const router = useRouter();

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [loomLink, setLoomLink] = useState("");
  const [pitchLink, setPitchLink] = useState("");
  const [projectResourceLink, setProjectResourceLink] = useState("");
  const [comments, setComments] = useState("");
  const [htId,setHackathonId]=useState("")
  const create = async (e) => {
    e.preventDefault();
    try {
      if(project.length){
        const body = {
          projectName,
          projectDescription,
          loomLink,
          pitchLink,
          projectResourceLink,
          comments,
          htId
        };
       const response= await fetch(`/api/projects/${project[0].id}/update`,{ 
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)},
          )
          const data =await response.json()

      router.push(`/hackathons/${htId}`)
      
      }else{
        const body = {
          projectName,
          projectDescription,
          loomLink,
          pitchLink,
          projectResourceLink,
          comments,
        };
  
        await fetch(`/api/hackathons/${hackathonId}/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        router.push("/success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const setVariables = () => {
      if (project.length) {
        setProjectName(project[0].name);
        setProjectDescription(project[0].description)
        setLoomLink(project[0].loomLink)
        setPitchLink(project[0].pitchLink)
        setProjectResourceLink(project[0].projectResourceLink)
        setComments(project[0].comments)
        setHackathonId(project[0].hackathonId)
      }
    };
    setVariables();
  }, [project]);

  return (
    <form onSubmit={create}>
      <div className="mt-10 grid md:grid-cols-1 gap-x-6 gap-y-8 grid-cols-1 ">
        <div className="sm:col-span-4">
          <label
            htmlFor="projectName"
            className="block text-sm font-medium leading-6 text-white"
          >
            Project Name
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="projectName"
                id="projectName"
                autoComplete="project-name"
                onChange={(e) => setProjectName(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field  placeholder:opacity-60 placeholder:font-semibold w-full"
                required
                value={projectName}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium leading-6 text-white"
          >
            Project Description
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="projectDescription"
                id="projectDescription"
                autoComplete="project-description"
                onChange={(e) => setProjectDescription(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-full placeholder:opacity-60 placeholder:font-semibold"
                required
                value={projectDescription}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="loomLink"
            className="block text-sm font-medium leading-6 text-white"
          >
            Loom Link
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="loomLink"
                id="loomLink"
                autoComplete="loom-link"
                onChange={(e) => setLoomLink(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-full placeholder:opacity-60 placeholder:font-semibold"
                required
                value={loomLink}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="pitchLink"
            className="block text-sm font-medium leading-6 text-white"
          >
            Pitch Link
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="pitchLink"
                id="pitchLink"
                autoComplete="pitch-link"
                onChange={(e) => setPitchLink(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-full placeholder:opacity-60 placeholder:font-semibold"
                required
                value={pitchLink}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="projectResourceLink"
            className="block text-sm font-medium leading-6 text-white"
          >
            Project Resource Link
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="projectResourceLink"
                id="projectResourceLink"
                autoComplete="project-resource-link"
                onChange={(e) => setProjectResourceLink(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-full placeholder:opacity-60 placeholder:font-semibold"
                value={projectResourceLink}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="comments"
            className="block text-sm font-medium leading-6 text-white"
          >
            Comments
          </label>
          <div className="mb-4">
            <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea
                id="comments"
                name="comments"
                rows={3}
                onChange={(e) => setComments(e.target.value)}
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-full placeholder:opacity-60 placeholder:font-semibold"
                required
                value={comments}
              />
            </div>
          </div>
          <div className="mb-4 mt-6">
            <div>
              <ButtonPrimary buttonText={"Submit"} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProjectSubmissionForm;

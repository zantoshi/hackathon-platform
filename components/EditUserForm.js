import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function EditUserForm() {
  const [user, setUser] = useState({
    skill: "",
    publicBio: "",
    location: "",
  });
  const [social, setSocial] = useState({
    github: "",  
    linkedin: "", 
    twitter: ""  
  });
  const navigate = useRouter()

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("/api/users", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setUser(data);
        if(data.social){
          setSocial(data.social);
        }
      } catch (error) {
        console.log("Error getting data from table user ", error);
      }
    };
    getUser();
  }, []);

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    setSocial({...social,[e.target.name]:e.target.value})
  }

  const create = async (e) => {
    e.preventDefault();
    try{
      if(user){
        const body = {
          skill:user.skill
          ,publicBio:user.publicBio
          ,location:user.location
          ,github:social.github
          ,twitter:social.twitter
          ,linkedin:social.linkedin
        }
        const response = await fetch("/api/users/updateUser",{
          method:"PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
        navigate.push('/user')
      }
    }catch(error){
      console.error("Something happend when you try to send the new data "+error)
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <Image
        src={user.image}
        alt="Avatar profile"
        className="rounded-full mr-2 inline-block"
        width={120}
        height={120}
      />
      </div>
      <form onSubmit={create} className="">
        <div className=" grid md:grid-cols-1 gap-x-6 gap-y-8 grid-cols-1 ">
          <div className="sm:col-span-4">
            <label
              htmlFor="skills"
              className="block text-sm font-medium leading-6 text-white"
            >
              Skills
            </label>
            <div className="mb-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600  w-full">
                <textarea
                  type="text"
                  name="skill"
                  id="skill"
                  onChange={handleChange}
                  className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold w-full resize-none"
                  value={user.skill}
                  placeholder="Backend Dev, Fronted Dev, UI/UX Designer, Data Engineer"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="Location"
              className="block text-sm font-medium leading-6 text-white"
            >
              Location
            </label>
            <div className="mb-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  name="location"
                  id="location"
                  onChange={handleChange}
                  className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold w-full"
                  value={user.location}
                  placeholder="US, California"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium leading-6 text-white"
            >
              Bio
            </label>
            <div className="mb-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <textarea
                  type="text"
                  name="publicBio"
                  id="publicBio"
                  onChange={handleChange}
                  className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field  placeholder:opacity-60 placeholder:font-semibold w-full resize-none"
                  placeholder="Tell us about yourself so others can know you"
                  rows={4}
                  value={user.publicBio}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="github"
              className="block text-sm font-medium leading-6 text-white"
            >
              Github URL
            </label>
            <div className="mb-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600  ">
                <textarea
                  type="text"
                  name="github"
                  id="github"
                  onChange={handleChange}
                  className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold w-full resize-none"
                  value={social.github}
                  placeholder="https://github.com/MyUser"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium leading-6 text-white"
            >
              LinkedIn URL
            </label>
            <div className="mb-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600  ">
                <textarea
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  onChange={handleChange}
                  className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold w-full resize-none"
                  value={social.linkedin}
                  placeholder="https://www.linkedin.com/in/myuser-linkedin/"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="twitter"
              className="block text-sm font-medium leading-6 text-white"
            >
              twitter URL
            </label>
            <div className="mb-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600  ">
                <textarea
                  type="text"
                  name="twitter"
                  id="twitter"
                  onChange={handleChange}
                  className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold w-full resize-none"
                  value={social.twitter}
                  placeholder="https://twitter.com/twitter-handle"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <ButtonPrimary buttonText={"Finish"} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;

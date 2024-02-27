import React, { useState } from "react";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import TipTap from "../components/TipTap";

const CreateHackathonForm = ({ id }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [benefits, setBenefits] = useState("");
  const [rules, setRules] = useState();
  const [judgingCriteria, setJudgingCriteria] = useState("");
  const [firstPlacePrize, setFirstPlacePrize] = useState("");
  const [secondPlacePrize, setSecondPlacePrize] = useState("");
  const [thirdPlacePrize, setThirdPlacePrize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tiptap, setTiptap] = useState();
  const [flag, setFlag] = useState();

  const create = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const body = {
          title,
          description,
          benefits,
          rules,
          judgingCriteria,
          firstPlacePrize,
          secondPlacePrize,
          thirdPlacePrize,
          startDate,
          endDate,
        };
        await fetch(`/api/hackathons/${id}/update`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        router.push(`/hackathons/${id}/manage`);
      } else {
        const body = {
          title,
          description,
          benefits,
          rules,
          judgingCriteria,
          firstPlacePrize,
          secondPlacePrize,
          thirdPlacePrize,
          startDate,
          endDate,
        };

        await fetch(`/api/hackathons/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          cache: "no-store",
          next: { revalidate: 10 },
        });

        router.push("/hackathons/");
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
            cache: "no-store",
            next: { revalidate: 10 },
          });
          if (data.ok) {
            const response = await data.json();
            setTitle(response.title);
            setDescription(response.description);
            setBenefits(response.benefits);
            setFlag(response.benefits);
            setRules(response.rules);
            setTiptap(response.rules);
            setJudgingCriteria(response.judgingCriteria);
            setFirstPlacePrize(response.firstPlacePrize);
            setSecondPlacePrize(response.secondPlacePrize);
            setThirdPlacePrize(response.thirdPlacePrize);
            setStartDate(response.startDate);
            setEndDate(response.endDate);
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
  }, [id]);

  return (
    <form onSubmit={create}>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonSecondary buttonText={"Back"} buttonLink={`/hackathons/`} />
          {!id ? (
            <PageHeader
              headerText={"Create a Hackathon"}
              descriptionText={"Wohooo! LFG and create a hackathon."}
            />
          ) : (
            <PageHeader
              headerText={`Edit details ` + title + ` hackathon`}
              descriptionText={"Wohooo! LFG and create a hackathon."}
            />
          )}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 "
              >
                Title
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    defaultValue={""}
                    value={title}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 "
              >
                Description
              </label>
              <div className="mb-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    defaultValue={""}
                    value={description}
                    required
                  />
                </div>
              </div>
            </div>

            {flag === null ||
              (flag === undefined && (
                <div className="sm:col-span-4">
                  <label
                    htmlFor="benefits"
                    className="block text-sm font-medium leading-6 "
                  >
                    Benefits (To add a new benefit, insert a line break in this
                    input.)
                  </label>
                  <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <TipTap onDataChange={setBenefits} rules={benefits} />
                  </div>
                </div>
              ))}

            {flag !== null && flag !== undefined && (
              <div className="sm:col-span-4">
                <label
                  htmlFor="benefits"
                  className="block text-sm font-medium leading-6 "
                >
                  Benefits (To add a new benefit, insert a line break in this
                  input.)
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <TipTap onDataChange={setBenefits} rules={benefits} />
                </div>
              </div>
            )}

            {/* <div className="mb-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    id="benefits"
                    name="benefits"
                    rows={3}
                    onChange={(e) => setBenefits(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    defaultValue={""}
                    value={benefits}
                    required
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="sm:col-span-4">
              <label
                htmlFor="rules"
                className="block text-sm font-medium leading-6 "
              >
                Rules
              </label>
              <div className="mb-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    id="rules"
                    name="rules"
                    rows={3}
                    onChange={(e) => setRules(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    defaultValue={""}
                    value={rules}
                    required
                  />
                </div>
              </div>
            </div> */}

            {tiptap === null ||
              (tiptap === undefined && (
                <div className="sm:col-span-4">
                  <label
                    htmlFor="rules"
                    className="block text-sm font-medium leading-6"
                  >
                    Rules (To add a new rule, insert a line break in this
                    input.)
                  </label>
                  <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <TipTap onDataChange={setRules} rules={rules} />
                  </div>
                </div>
              ))}

            {tiptap !== null && tiptap !== undefined && (
              <div className="sm:col-span-4">
                <label
                  htmlFor="rules"
                  className="block text-sm font-medium leading-6"
                >
                  Rules (To add a new rule, insert a line break in this input.)
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <TipTap rules={rules} onDataChange={setRules} />
                </div>
              </div>
            )}

            <div className="sm:col-span-4">
              <label
                htmlFor="judgingCriteria"
                className="block text-sm font-medium leading-6 "
              >
                Judging Criteria
              </label>
              <div className="mb-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    id="judgingCriteria"
                    name="judgingCriteria"
                    rows={3}
                    onChange={(e) => setJudgingCriteria(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    defaultValue={""}
                    value={judgingCriteria}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="firstPlacePrize"
                className="block text-sm font-medium leading-6 "
              >
                First Place Prize
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="firstPlacePrize"
                    id="firstPlacePrize"
                    autoComplete="first-place-prize"
                    onChange={(e) => setFirstPlacePrize(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    value={firstPlacePrize}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="secondPlacePrize"
                className="block text-sm font-medium leading-6 "
              >
                Second Place Prize
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="secondPlacePrize"
                    id="secondPlacePrize"
                    autoComplete="second-place-prize"
                    onChange={(e) => setSecondPlacePrize(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    value={secondPlacePrize}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="thirdPlacePrize"
                className="block text-sm font-medium leading-6 "
              >
                Third Place Prize
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="thirdPlacePrize"
                    id="thirdPlacePrize"
                    autoComplete="third-place-prize"
                    onChange={(e) => setThirdPlacePrize(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    value={thirdPlacePrize}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium leading-6 "
              >
                Start Date
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    autoComplete="start-date"
                    onChange={(e) => setStartDate(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    value={startDate}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium leading-6 "
              >
                End Date
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    autoComplete="end-date"
                    onChange={(e) => setEndDate(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                    value={endDate}
                    required
                  />
                </div>
              </div>
              <div className="mb-4 mt-6">
                <div>
                  <ButtonSecondary buttonText={"Finish"} functionCall={create}></ButtonSecondary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateHackathonForm;

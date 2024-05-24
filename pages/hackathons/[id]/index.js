import { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { useSession } from "next-auth/react";

import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import BenefitsModule from "@/components/BenefitsModule";
import bitblockboom from "@/data/content/bitBlockBoom.json";
import sponsors from "@/data/content/sponsors.json";
import Sponsors from "@/components/Sponsors";
import { Check } from "lucide-react";
import { Dot } from "lucide-react";
import PrizePool from "@/components/PrizePool";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import { useRouter } from "next/router";
import { match } from "assert";

export default function HackathonDetail() {
  const { data: session } = useSession();

  const router = useRouter();
  const [id, setId] = useState("");
  const [teams, setTeams] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [hackathon, setHackathon] = useState([]);
  const [submit, setSubmit] = useState();
  const [mentors, setMentors] = useState([]);
  const [edit, setEdit] = useState();
  const [prices, setPrices] = useState([]);
  const signedUp = teams.length > 0;
  const [ruleList, setRuleList] = useState("");
  const [projects, setProject] = useState([]);
  const [details, setDetails] = useState([]);
  const [judges, setJudges] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [judgeCriteria, setjudgeCriteria] = useState([]);
  const startDate = new Date(hackathon.startDate);
  const endDate = new Date(hackathon.endDate);
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function formatDate(date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const suffix = getOrdinalSuffix(day);
    return `${month} ${day}${suffix}, ${year}`;
  }

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (teams.ok) {
          const teamsData = await teams.json();
          setTeams(teamsData);
        } else {
          console.error("Error fetching teams:", teams.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  useEffect(() => {
    const fetchRegistrationHackathon = async () => {
      try {
        if (id) {
          const registration = await fetch(`/api/hackathonRegister/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (registration.ok) {
            const registrationData = await registration.json();
            setRegistration(registrationData);
          } else {
            console.error(
              "Error fetching Registration Hackthon:",
              registration.statusText
            );
          }
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };
    fetchRegistrationHackathon();
  }, [id]);

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        if (id) {
          const data = await fetch(`/api/hackathons/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (data.ok) {
            const response = await data.json();
            setHackathon(response);
            setPrices([
              ["1st Place Prize", response.firstPlacePrize],
              ["2nd Place Prize", response.secondPlacePrize],
              ["3rd Place Prize", response.thirdPlacePrize],
            ]);
            setRuleList(response.rules);
            setBenefits(response.benefits);
            setjudgeCriteria(response.judgingCriteria);
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

  useEffect(() => {
    const findTeam = (team, registration) => {
      let isMatching = false;
      for (const t2 of registration) {
        const matching = team.some((t1) => t1.id === t2.teamId);
        if (matching) {
          isMatching = true;
          break;
        }
      }
      setSubmit(isMatching);
    };

    findTeam(teams, registration);
  }, [teams, registration]);

  useEffect(() => {
    const findTeam = (team, projects) => {
      let isMatching = false;
      for (const t2 of projects) {
        const matching = team.some((t1) => t1.id === t2.teamId);
        if (matching) {
          isMatching = true;
          break;
        }
      }
      setEdit(isMatching);
    };

    findTeam(teams, projects);
  }, [teams, projects]);

  useEffect(() => {
    const fetchHackathonProjects = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/projects/${id}/hackathonDetails`, {
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
    const fetchDetails = async () => {
      try {
        const response = await fetch(`/api/team/teams`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const dataDetails = await response.json();
          setDetails(dataDetails);
        } else {
          console.error("Error fetching teams:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchDetails(); // Call the fetchTeams function
  }, []);

  useEffect(() => {
    const fetchJudges = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/judges/${id}/hackathonDetails`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            const data = await response.json();
            setJudges(data);
          } else {
            console.error("Error fetching teams:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching j:", error);
      }
    };

    fetchJudges(); // Call the fetchTeams function
  }, [id]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/mentors/${id}/hackathonDetails`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            const data = await response.json();
            setMentors(data);
          } else {
            console.error("Error fetching teams:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching j:", error);
      }
    };

    fetchMentors(); // Call the fetchTeams function
  }, [id]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        if (id) {
          const response = await fetch(
            `/api/hackathonsponsors/${id}/sponsorsDetails`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );

          if (response.ok) {
            const data = await response.json();
            setSponsors(data);
          } else {
            console.error("Error fetching sponsors:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching j:", error);
      }
    };

    fetchSponsors(); // Call the fetchTeams function
  }, [id]);

  return (
    <Layout>
      <div className="w-full">
        <div className="text-center bg-gradient-to-b from-slate-950 to-purple-900">
          <h1 className="mx-auto py-5 font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl items-center justify-center">
            Ideate. Design. <br />
            Build. Ship.
            <br />
            <span className="relative whitespace">
              <span className="relative text-violet-500	 sm:text-7xl">
                {hackathon.title}
              </span>
            </span>
          </h1>
          <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-200  text-gray-300 leading-7">
            {hackathon.description}
          </h2>
          <h1 className="mx-auto max-w-3xl text-center font-display text-md font-bold tracking-normal text-gray-300 sm:text-3xl my-10">
            From {formattedStartDate} <br /> to <br /> {formattedEndDate}
            <div className="py-6">
              {session && (!signedUp || !submit) ? (
                formattedCurrentDate <= hackathon.endDate ? (
                  <ButtonPrimary
                    buttonText={"Register Team"}
                    buttonLink={`/hackathons/${id}/register`}
                  />
                ) : (
                  <></>
                )
              ) : session && !edit ? (
                formattedCurrentDate <= hackathon.endDate && (
                  <ButtonPrimary
                    buttonText={"Submit Project"}
                    buttonLink={`/hackathons/${id}/submit`}
                  />
                )
              ) : (
                session &&
                formattedCurrentDate <= hackathon.endDate && (
                  <ButtonPrimary
                    buttonText={"Edit Project Submission"}
                    buttonLink={`/hackathons/${id}/submit`}
                  />
                )
              )}
            </div>
          </h1>
          <h1 className="mx-auto max-w-3xl py-8 font-display text-3xl font-bold tracking-normal text-gray-300 sm:text-5xl">
            $5K+ in prizes 🏆
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="my-2 mb-4"></div>
          <div className="mx-auto max-w-4xl gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {bitblockboom.headerText}
              </p>
              <p className="mt-6 text-lg leading-8 ">
                {bitblockboom.descriptionText}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 my-10 text-base leading-7  lg:max-w-none ">
                <div className="relative">
                  <dt className=" font-semibold">
                    <ul className="flex flex-col ">
                      {typeof benefits === "string" &&
                        benefits.split("</p><p>").map((benefit, index) => (
                          <li
                            key={index}
                            className="relative flex items-center"
                          >
                            <span className="absolute left-0 top-0">
                              <Check className="h-5 w-5 text-green-400" />
                            </span>
                            <span
                              className="ml-6"
                              dangerouslySetInnerHTML={{ __html: benefit }}
                            />
                          </li>
                        ))}
                    </ul>
                  </dt>
                </div>
              </div>
            </div>
          </div>
          <div className="my-24">
            <SectionHeader headerText={"Rules"} descriptionText={""} />
            <ul className="text-xl list-disc ml-6">
              {typeof ruleList === "string" &&
                ruleList.split("</p><p>").map((rule, index) => (
                  <li key={index}>
                    <span dangerouslySetInnerHTML={{ __html: rule }} />
                  </li>
                ))}
            </ul>
          </div>
          <PrizePool data={prices} />
          <div className="mt-24">
            <SectionHeader
              headerText={"Judging Criteria"}
              descriptionText={
                "The judges will evaluate your project submission using the following criteria."
              }
            />
            <ul className="text-xl  list-disc ml-6">
              {typeof judgeCriteria === "string" &&
                judgeCriteria.split("</p><p>").map((criteria, index) => (
                  <li key={index}>
                    <span dangerouslySetInnerHTML={{ __html: criteria }} />
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-24">
            <SectionHeader headerText={"Teams"} />
            {registration.length ? (
              <>
                <SectionHeader
                  descriptionText={
                    "Teams and their projects already registered for this hackathon  "
                  }
                />
                <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {registration.map((registration) => {
                    return (
                      <>
                        <div class="">
                          <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-5 flex flex-col justify-center items-center text-center">
                            <div key={registration.id}>
                              {details.map((detail) => {
                                return (
                                  <>
                                    {registration.teamId === detail.id && (
                                      <div key={detail.id}>
                                        <p class="text-base text-gray-400 font-normal">
                                          {detail.name}
                                        </p>
                                        <br></br>
                                        <div class="mb-8">
                                          <h1
                                            className="text-6xl py-5 px-2  inline-block rounded-3xl border-solid border-2 border-purple-500"
                                            style={{
                                              backgroundColor:
                                                detail.colorAvatar,
                                            }}
                                          >
                                            {detail.teamAvatar}
                                          </h1>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                );
                              })}
                            </div>

                            <div class="text-center">
                              <p class="text-xl text-white font-bold mb-2"> </p>
                              <p class="text-base text-gray-400 font-normal"></p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              <div class="p-4 mb-4 text-white border border-purple-800 rounded-lg bg-gray-900">
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <h3 class="text-lg font-medium">No teams registered yet</h3>
                </div>
                <div class="mt-2 mb-4 text-sm">
                  There are no teams registered yet for this Hackathon. Be the
                  first to register your team now!
                </div>
              </div>
            )}
          </div>
          <div className="mt-24">
            <SectionHeader headerText={"Projects"} />
            {projects.length ? (
              <>
                <SectionHeader
                  descriptionText={
                    "Teams and their projects already registered for this hackathon  "
                  }
                />
                <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {projects.map((project) => {
                    return (
                      <>
                        <div class="">
                          <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-5 flex flex-col justify-center items-center text-center">
                            <div key={project.id}>
                              {details.map((detail) => {
                                return (
                                  <>
                                    {project.teamId === detail.id && (
                                      <div key={detail.id}>
                                        <p class="text-base text-gray-400 font-normal">
                                          {detail.name}
                                        </p>
                                        <br></br>
                                        <div class="mb-8">
                                          <h1
                                            className="text-6xl py-5 px-2  inline-block rounded-3xl border-solid border-2 border-purple-500"
                                            style={{
                                              backgroundColor:
                                                detail.colorAvatar,
                                            }}
                                          >
                                            {detail.teamAvatar}
                                          </h1>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                );
                              })}
                            </div>

                            <div class="text-center">
                              <p class="text-xl text-white font-bold mb-2">
                                {" "}
                                {project.name}
                              </p>
                              <p class="text-base text-gray-400 font-normal">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              <div class="p-4 mb-4 text-white border border-purple-800 rounded-lg bg-gray-900">
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <h3 class="text-lg font-medium">
                    No projects registered yet
                  </h3>
                </div>
                <div class="mt-2 mb-4 text-sm">
                  There are no projects registered yet for this Hackathon. Be
                  the first to submit your project now!
                </div>
              </div>
            )}
          </div>

          <div className="mt-24">
            <SectionHeader headerText={"Judges"} />
            {judges.length ? (
              <>
                <SectionHeader
                  descriptionText={"Judges that will evaluate the projects"}
                />
                <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {judges.map((judge) => {
                    return (
                      <div
                        class="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                        key={judge.id}
                      >
                        <img
                          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                          src={judge.judgeImage}
                          alt="Woman's Face"
                        ></img>
                        <div class="text-center space-y-2 sm:text-left">
                          <div class="space-y-0.5 flex-cols items-center">
                            <p class="text-xl text-white font-semibold">
                              {judge.judgeGamertag}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>{" "}
              </>
            ) : (
              <div class="p-4 mb-4 text-white border border-purple-800 rounded-lg bg-gray-900">
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <h3 class="text-lg font-medium">No judges assigned yet</h3>
                </div>
                <div class="mt-2 mb-4 text-sm">
                  There are no judges registered for this Hackathon. Make sure
                  to check once in a while to see who is going to evaluate your
                  project
                </div>
              </div>
            )}
          </div>
          <div className="mt-24">
            <SectionHeader headerText={"Mentors"} />
            {mentors.length ? (
              <>
                <SectionHeader
                  descriptionText={"Judges that will evaluate the projects"}
                />
                <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {mentors.map((mentor) => {
                    return (
                      <div
                        class="py-8 px-8 max-w-sm  bg-gray-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                        key={mentor.id}
                      >
                        <img
                          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                          src={mentor.mentorImage}
                          alt="Woman's Face"
                        ></img>
                        <div class="text-center space-y-2 sm:text-left">
                          <div class="space-y-0.5 flex-cols items-center">
                            <p class="text-xl text-white font-semibold">
                              {mentor.mentorGamertag}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>{" "}
              </>
            ) : (
              <div class="p-4 mb-4 text-white border border-purple-800 rounded-lg bg-gray-900">
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <h3 class="text-lg font-medium">No mentors assigned yet</h3>
                </div>
                <div class="mt-2 mb-4 text-sm">
                  There are no mentors registered for this Hackathon. Make sure
                  to check once in a while to see who can help you out with your
                  project
                </div>
              </div>
            )}
          </div>
          <div className="mt-24 items-center">
            <SectionHeader headerText={"Sponsors"} />
            {sponsors.length ? (
              <>
                <SectionHeader descriptionText={"Sponsors of this hackathon"} />
                <div className="text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                  {sponsors.map((sponsor) => {
                    return (
                      <div
                        class="flex items-center justify-center"
                        key={sponsor.id}
                      >
                        <div>
                          <img
                            class="h-auto w-auto  rounded-lg"
                            src={sponsor.image}
                            alt=""
                          ></img>
                        </div>
                      </div>
                    );
                  })}
                </div>{" "}
              </>
            ) : (
              <div class="p-4 mb-4 text-white border border-purple-800 rounded-lg bg-gray-900">
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <h3 class="text-lg font-medium">No sponsors assigned yet</h3>
                </div>
                <div class="mt-2 mb-4 text-sm">
                  There are no sponsors assigned for this Hackathon yet. Make
                  sure to check once in a while to see who is going to sponsor
                  this wonderful competition
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, stagger, AnimatePresence } from "framer-motion";
import userIcon from "../public/user-filled.svg";
import { fetchingData,updateGamertag } from "../util/fetchingData.js";
import NotificationBell from "./NotificationBell";

export default function Header() {
  const [click, setClick] = useState(false);
  const [gradient, setGradient] = useState("");
  const [judge, setJudge] = useState([]);
  const [user, setUser] = useState(null);
  const [userImage, setImage] = useState();
  const [request, setRequest] = useState([]);
  const [isChecked, setIsChecked] = useState();
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = async (e) => {
    const availability = e.target.checked;
    setIsChecked(availability);
    const body = { availability };
    try {
      const response = await fetch("/api/users/changeAvailability", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
    } catch (error) {
      console.error(
        "There's some kind of error when you try to be available " + error
      );
    }
  };

  const getUser = async () => {
    try {
      const response = await fetch(`/api/users`, {
        cache: "no-store",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Error fetching users:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      return null;
    }
  };

  const getRequest = async () => {
    try {
      if (user) {
        const response = await fetch(`/api/request/${user.id}/userRequest`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });
        const data = await response.json();
        setRequest(data);
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
      return [];
    }
  };

  useEffect(()=>{
    getRequest()
})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, judgeData] = await Promise.all([
          getUser(),
          fetchingData("/api/judges"),
        ]);

        if (userData) {
          setUser(userData);
          setImage(userData.image);
          setIsChecked(userData.availability);
        }

        if (judgeData) {
          setJudge(judgeData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updating = async () => {
      try {
        const response = await fetchingData("/api/users")
        if(!response.gamertag)
        {
          await updateGamertag("/api/users/githubGamer");
        }
      } catch (error) {
        console.log(error);
      }
    };
    updating();
  }, []);

  useEffect(() => {
    const UpdateImage = async () => {
      try {
        if (userImage === null) {
          const body = {
            image: "/user-filled.svg",
          };
          const response = await fetch("/api/users/addUserImage", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          console.log(response);
          const data = await response.json();
        }
      } catch (error) {
        console.error("Error updating user table for image field ", error);
      }
    };
    UpdateImage();
  }, [userImage]);

  const toggleNavbar = () => {
    setClick(!click);
    if (!click) {
      setGradient("linear-gradient(to bottom right, #000000,#6E39A8)");
    } else {
      setGradient("");
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setGradient("");
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const signInHandler = (e) => {
    e.preventDefault();
    signIn();
  };

  const signOutHandler = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div>
      <header>
        <nav className="flex flex-row align-middle p-4  text-white justify-between border-b-4 border-purple-400/[.20]">
          <div className="flex flex-row space-x-4 z-50">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Global Hackathon League Logo"
                width={84}
                height={42}
              />
            </Link>
            <ul className="hidden lg:flex flex-row space-x-6 items-center">
              <li>
                <Link className="hover:text-purple-500" href="/hackathons">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-purple-500"
                  href="https://emeralize.app/marketplace"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-500" href="/organizers">
                  Organizers
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-500" href="/sponsor">
                  Sponsor
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-500" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                {!loading && session?.user && (
                  <Link className="hover:text-purple-500" href="/team">
                    Teams
                  </Link>
                )}
              </li>
              <li>
                {!loading && session?.user && judge.length > 0 && (
                  <Link className="hover:text-purple-500" href="/judge">
                    Judge
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="lg:block hidden">
            {!loading && !session && (
              <ButtonSecondary
                buttonText={"Log In"}
                functionCall={signInHandler}
              />
            )}
            {!loading && session?.user && (
              <div className="flex flex-row">
                <NotificationBell point={request}></NotificationBell>
                <span>
                  <div
                    className="flex mr-10"
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                  >
                    {session.user.image !== null ? (
                      <Image
                        src={session.user.image}
                        alt="User Profile Image"
                        className="h-12 w-12 rounded-full mr-2 inline-block"
                        width={128}
                        height={128}
                        onClick={toggleDropdown}
                      />
                    ) : (
                      <Image
                        src={userIcon}
                        alt="User Profile Image"
                        className="h-12 w-12 rounded-full mr-2 inline-block bg-purple-500 py-2 hover:bg-purple-600"
                        width={128}
                        height={128}
                        onClick={toggleDropdown}
                      />
                    )}
                  </div>
                  {isOpen && (
                    <div
                      id="dropdownHover"
                      class="z-10 absolute  divide-y  rounded-lg shadow w-44  right-10 mt-2  bg-gray-950 divide-purple-400/[.20] border-2 border-solid border-purple-400/[.20]"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownHoverButton"
                      >
                        <li>
                          <Link
                            href={`/user`}
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/user/settings"}
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </Link>
                        </li>
                        {session.user && (
                          <li>
                            <Link
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={signOutHandler}
                            >
                              Log out
                            </Link>
                          </li>
                        )}

                        <li className="flex items-center gap-8 px-4 py-2">
                          <span
                            class="text-gray-900 dark:text-gray-300"
                            title="Make yourself available to receive requests to join a team and participate in a hackathon."
                          >
                            Available
                          </span>
                          <label
                            class="inline-flex items-center me-5 cursor-pointer"
                            title="Make yourself available to receive requests to join a team and participate in a hackathon."
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              class="sr-only peer"
                              onChange={handleChange}
                            />
                            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                          </label>
                        </li>
                      </ul>
                    </div>
                  )}
                </span>
              </div>
            )}
          </div>
          {/*Navbar for responsive */}
          <div className="lg:hidden flex items-center justify-center space-x-3">
            <NotificationBell point={request}></NotificationBell>
            <button
              className="inline-flex items-center justify-center rounded-md text-white md:text-white hover:text-white focus:ring-3 focus:ring-inset focus:ring-white z-50"
              onClick={toggleNavbar}
            >
              {click ? (
                <X
                  className="bg-white border-none rounded-sm"
                  color="#6E39A8"
                />
              ) : (
                <Menu />
              )}
            </button>
          </div>
          {click && (
            <AnimatePresence>
              <motion.div
                className="lg:hidden absolute inset-x-0 transform -translate-y-1/2 z-20 mt-52 border-b-2  border-black py-20 shadow-lg "
                style={{ background: gradient }}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, y: 50 }}
                animate={{ opacity: click ? 1 : 0 }}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <motion.ul
                    variants={stagger(0.1)}
                    className="gap-3 font-bold text-lg flex flex-col items-center justify-center "
                  >
                    <li>
                      <Link
                        className="hover:text-purple-500"
                        href="/hackathons"
                      >
                        Hackathons
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-purple-500"
                        href="https://emeralize.app/marketplace"
                      >
                        Learn
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-purple-500"
                        href="/organizers"
                      >
                        Organizers
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-purple-500" href="/sponsor">
                        Sponsor
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-purple-500" href="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      {!loading && session?.user && (
                        <Link className="hover:text-purple-500" href="/team">
                          Team
                        </Link>
                      )}
                    </li>
                    <li>
                      {!loading && session?.user && judge.length > 0 && (
                        <Link className="hover:text-purple-500" href="/judge">
                          Judge
                        </Link>
                      )}
                    </li>
                    <li>
                      <div className="lg:hidden mt-10">
                        {user == null && (
                          <ButtonSecondary
                            buttonText={"Log In"}
                            functionCall={signInHandler}
                          />
                        )}
                        {!loading && session && (
                          <div className="flex flex-row mx-auto mt-5 ml-6">
                            <span>
                              <div>
                                {session.user.image !== null ? (
                                  <Image
                                    src={session.user.image}
                                    alt="User Profile Image"
                                    className="h-12 w-12 rounded-full mr-2 inline-block "
                                    width={128}
                                    height={128}
                                    onClick={toggleDropdown}
                                  />
                                ) : (
                                  <Image
                                    src={userIcon}
                                    alt="User Profile Image"
                                    className="h-12 w-12 rounded-full mr-2 inline-block"
                                    width={128}
                                    height={128}
                                    onClick={toggleDropdown}
                                  />
                                )}
                              </div>
                              {isOpen && session.user && (
                                <div
                                  id="dropdownHover"
                                  class="z-10 divide-y  rounded-lg shadow w-44 mt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-gray-950 divide-purple-400/[.20] border-2 border-solid absolute  border-purple-400/[.20] "
                                >
                                  <ul
                                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownHoverButton"
                                  >
                                    <li>
                                      <Link
                                        href={`/user`}
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Profile
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={"/user/settings"}
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Settings
                                      </Link>
                                    </li>
                                    {session.user && (
                                      <li>
                                        <Link
                                          href="#"
                                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                          onClick={signOutHandler}
                                        >
                                          Log out
                                        </Link>
                                      </li>
                                    )}
                                    <li className="flex items-center gap-8 px-4 py-2">
                                      <span class=" text-gray-900 dark:text-gray-300">
                                        Available
                                      </span>
                                      <label class="inline-flex items-center me-5 cursor-pointer">
                                        <input
                                          type="checkbox"
                                          checked={isChecked}
                                          class="sr-only peer"
                                          onChange={handleChange}
                                        />
                                        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </span>
                          </div>
                        )}
                      </div>
                    </li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </nav>
      </header>
    </div>
  );
}

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Menu } from 'lucide-react';
import { motion, stagger, AnimatePresence } from "framer-motion"
import userIcon from "../public/user-filled.svg"
import { fetchingData } from "../util/fetchingData.js"

export default function Header() {
  const [click, setClick] = useState(false);
  const [gradient, setGradient] = useState("");
  const [judge, setJudge] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingData("/api/judges");
        setJudge(data);
      } catch (error) {
        console.error("Error fetching judge data:", error);
      }
    };
    fetchData()
  }, [])


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

  const { data: session, status } = useSession();
  const loading = status === "loading";

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
            <ul className="hidden md:flex flex-row space-x-6 items-center">
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
                {!loading && session?.user && judge.length > 0 &&(
                  <Link className="hover:text-purple-500" href="/judge">
                    Judge
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="md:block hidden">
            {!loading && !session && (
              <ButtonSecondary
                buttonText={"Log In"}
                functionCall={signInHandler}
              />
            )}
            {!loading && session?.user && (
              <div className="flex flex-row">
                <span>
                  <Link href="/user">
                    {
                      session.user.image !== null ? (
                        <Image
                          src={session.user.image}
                          alt="User Profile Image"
                          className="h-12 w-12 rounded-full mr-2 inline-block"
                          width={128}
                          height={128}
                        />
                      ) : (
                        <Image
                          src={userIcon}
                          alt="User Profile Image"
                          className="h-12 w-12 rounded-full mr-2 inline-block bg-purple-500 py-2 hover:bg-purple-600"
                          width={128}
                          height={128}
                        />
                      )
                    }
                  </Link>
                </span>
                <span>
                  {session.user && (
                    <div className="align-middle px-5">
                      <ButtonSecondary
                        buttonText={"Log Out"}
                        functionCall={signOutHandler}
                      />
                    </div>
                  )}
                </span>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
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
          {click && (<AnimatePresence>
            <motion.div
              className="md:hidden absolute inset-x-0 transform -translate-y-1/2 z-20 mt-52 border-b-2  border-black py-20 shadow-lg "
              style={{ background: gradient }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, }}
              exit={{ opacity: 0, y: 50 }}
              animate={{ opacity: click ? 1 : 0 }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <motion.ul variants={stagger(0.1)} className="gap-3 font-bold text-lg flex flex-col items-center justify-center ">
                  <li>
                    <Link className="hover:text-purple-500" href="/hackathons">
                      Hackathons
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-purple-500" href="https://emeralize.app/marketplace">
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
                        Team
                      </Link>
                    )}
                  </li>
                  <li>
                {!loading && session?.user && judge && judge.email === session.user.email && (
                  <Link className="hover:text-purple-500" href="/judge">
                    Judge
                  </Link>
                )}
              </li>
                  <li>
                    <div className="md:hidden mt-10">
                      {!loading && !session && (
                        <ButtonSecondary
                          buttonText={"Log In"}
                          functionCall={signInHandler}
                        />
                      )}
                      {!loading && session?.user && (
                        <div className="flex flex-row">
                          <span>
                            <Link href="/user">
                              {
                                session.user.image !== null ? (
                                  <Image
                                    src={session.user.image}
                                    alt="User Profile Image"
                                    className="h-12 w-12 rounded-full mr-2 inline-block"
                                    width={12}
                                    height={12}
                                  />
                                ) : (
                                  <Image
                                    src={userIcon}
                                    alt="User Profile Image"
                                    className="h-12 w-12 rounded-full mr-2 inline-block bg-purple-500 py-2 hover:bg-purple-600"
                                    width={12}
                                    height={12}
                                  />
                                )
                              }
                            </Link>
                          </span>
                          <span>
                            {session.user && (
                              <div className="align-middle px-5">
                                <ButtonSecondary
                                  buttonText={"Log Out"}
                                  functionCall={signOutHandler}
                                />
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
          </AnimatePresence>)}
        </nav>
      </header>
    </div>
  );
}

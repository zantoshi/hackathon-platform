import React, { useState, useEffect } from "react";
import { fetchingData } from "util/fetchingData";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

function ListUsers() {
  const [users, setUser] = useState([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchingData("/api/users/usersList");
      setUser(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      {!users.length ? (
        <h1 className="my-6 text-2xl font-semibold leading-8 text-gray-200 text-center">
          Currently, there are no users looking for a team, check back later.
        </h1>
      ) : (
        <>
          <h1 className="my-6 text-2xl font-semibold leading-8 text-gray-200 text-center">
            List of users looking for a team.
          </h1>
          <div id="detailed-pricing" class="w-full overflow-x-auto">
            <div class="overflow-hidden md:min-w-max px-2 ">
              <div class="grid md:grid-cols-3  grid-cols-2 md:p-4 text-sm font-medium text-gray-900  border-t border-b  gap-x-16 bg-gray-900 border-gray-700 dark:text-white ">
                <div class="flex items-center">Image</div>
                <div>Name</div>
                <div className="md:block hidden">Profile</div>
              </div>

              {users.map((user) => {
                return (
                  <>
                    {session && (
                      <>
                        <div class="grid md:grid-cols-3 grid-cols-2  md:px-4 py-5 text-sm text-gray-700 border-b gap-x-16 border-gray-700">
                          <div class="text-gray-500 dark:text-gray-400">
                            <Image
                              src={user.image}
                              className="h-12 w-12 rounded-full mr-2 inline-block"
                              width={128}
                              height={128}
                            ></Image>
                          </div>
                          <div className="text-white font-semibold text-lg">
                            {user.gamertag}
                          </div>
                          <div>
                            <Link
                              href={`/user/${user.id}`}
                              className="text-purple-500 text-lg font-semibold underline"
                            >
                              Details
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListUsers;

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Select from "react-select";

function AddUserTeam() {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();
  const [values, setValue] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const fetchJudgeUser = async () => {
      try {
        const response = await fetch(`/api/users/users`, {
          cache: "no-store",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          next: { revalidate: 1 },
        });

        if (response) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error(
            "this is Error for fetching users:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("this is Error for fetching users:", error);
      }
    };
    fetchJudgeUser();
  }, []);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleChange = (search) => {
    setValue(search);
  };

  let options = [];
  if (session) {
    options = users.map((user) => ({
      value: user.id,
      label: user.gamertag,
      image: user.image,
      email: user.email,
    }));
  }

  return (
    <div>
      <Select
        type="text"
        className="peer block min-h-[auto] rounded border-0 bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:opacity-0 focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none  text-purple-600"
        id="exampleFormControlInput3"
        placeholder="Type the gamertag of the user to make him judge"
        options={options}
        defaultValue={search}
        onChange={handleChange}
        values={options}
      ></Select>
    </div>
  );
}

export default AddUserTeam;

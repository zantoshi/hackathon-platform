import React, { useEffect, useState } from "react";

function RequestTeam() {
  const [user, setUser] = useState();
  const [request, setRequest] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch(`/api/users`, {
        cache: "no-store",
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 1 },
      });

      if (response) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error("this is Error for fetching users:", response.statusText);
      }
    } catch (error) {
      console.error("this is Error for fetching users:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      getUser();
    };
    fetchUser();
  }, []);

  const getRequest = async () => {
    try {
      if (user) {
        const response = await fetch(`/api/request/${user.id}/userRequest`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setRequest(data);
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  useEffect(() => {
    const fetchRequests = async () => {
      getRequest();
    };
    fetchRequests();
  }, [user]);

  const deleteRequest = async (id) => {
    try {
      if (id) {
        const response = await fetch(`/api/request/${id}/delete`, {
          cache: "no-store",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        setRequest((prevRequest) =>
          prevRequest.filter((request) => request.id !== id)
        );
      }
    } catch (error) {
      console.log("this is the error for deleting a judge: " + error);
    }
  };

  const AddUserTeam = async (teamId,userId,id) => {
    try{
      const body = {
        teamId,
        userId
      }
      await fetch(`/api/members/addMember`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        next: { revalidate: 1 },
        cache: 'no-store'
      });
      deleteRequest(id)
      getRequest()
    }catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div class="divide-y divide-gray-100 dark:divide-gray-700">
        {request.map((rq) => {
          return (
            <>
              <div class="w-full ps-3 p-2">
                <div className="flex justify-between">
                  <div>
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">
                        {rq.teamName}
                      </span>
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      by {rq.userSenderName}
                    </div>
                  </div>
                  <div className="px-5 space-x-4">
                    <button
                      onClick={() => {
                        AddUserTeam(rq.teamId, rq.userReceiver,rq.id);
                      }}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white rounded-3xl font-bold pt-2 p-2 text-xs hover:opacity-80"
                      onClick={() => {
                        deleteRequest(rq.id);
                      }}
                    >
                      Deny
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default RequestTeam;

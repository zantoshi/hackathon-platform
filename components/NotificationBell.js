import React, { useState } from "react";
import RequestTeam from "./RequestTeam";

function NotificationBell({point}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        id="dropdownNotificationButton"
        onClick={toggleDropdown}
        className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
        type="button"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 20"
        >
          <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
        </svg>

        {/*Este la advertencia cuando el punto esta  */}
      {point.length && (  <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div> )}
      </button>

      {isOpen && (
        <div
          id="dropdownNotification"
          className="z-20 w-full max-w-sm divide-y bg-gray-950 divide-purple-400/[.20] border-2 border-solid border-purple-400/[.20] rounded-lg shadow  absolute right-0 mt-1 md:mx-5"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="block px-4 py-2 font-medium text-center  rounded-t-lg  text-white">
            Notifications
          </div>
          <div className="divide-y divide-purple-400/[.20] ">
            {/* Aquí van tus elementos de notificación */}
            <RequestTeam></RequestTeam>
          </div>
          <div
            href="#"
            className="block py-2 text-sm font-medium text-center rounded-b-lg bg-gray-5 text-white"
          >
            <div className="inline-flex items-center "></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;

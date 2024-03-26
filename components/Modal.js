import React from "react";

const Modal = ({ isOpen, onClose, ModalText, functionCall = undefined }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative w-full max-w-md">
            <div className="bg-[#030712] text-white rounded-lg shadow border-solid border-4 border-[#9333ea] p-4 md:p-5 text-center">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 text-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-5">
                {iconOptions.map((icon, index) => (
                  <img
                    key={index}
                    src={icon.path}
                    alt={icon.name}
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                    onClick={() => handleIconSelect(icon)}
                  />
                ))}
              </div>
              <h3 className="mb-5 text-lg font-normal text-white">
                {ModalText}
              </h3>
              <button
                onClick={functionCall}
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-3"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={onClose}
                type="button"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

import React from "react";
import ButtonSecondary from "@/components/ButtonSecondary";

const HackathonCard = ({
  headerText,
  descriptionText,
  buttonLink = "#",
  buttonText,
  hackathonLink,
  state,
  flagDate,
}) => {
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  return (
    <div className="w-full mt-4 rounded-md border-solid border-2 border-purple-600 flex flex-col text-left overflow-hidden transition duration-300 ease-out shadow-2xl hover:shadow-3xl hover:bg-black">
      <img
        className="w-full h-24 object-cover object-center border-solid border-b-2 border-purple-500"
        src="/hackathon-card.svg"
        alt="Card Image"
      />

      <div className="flex-grow px-6 py-4">
        {
          flagDate && (
            <div className="mb-2">
          {formattedCurrentDate <= state ? (
            <span
              id="badge-dismiss-purple"
              class="inline-flex items-center justify-center px-4 py-1 me-2 text-sm font-medium bg-purple-900 text-purple-300 rounded-full "
            >
              NOT COMPLETED
            </span>
          ) : (
            <span
              id="badge-dismiss-green"
              class="inline-flex items-center justify-center  px-4 py-1 me-2 text-sm font-medium rounded-full bg-green-900 text-green-300"
            >
              COMPLETED
            </span>
          )}
        </div>
          )
        }
        <div className="font-bold text-xl mb-2">{headerText}</div>
        <p className="text-gray-200 text-base">{descriptionText}</p>
      </div>
      <div className="self-end p-4 flex gap-4 items-center">
        {!buttonText ? (
          <ButtonSecondary
            buttonText={"View"}
            buttonLink={buttonLink}
          ></ButtonSecondary>
        ) : (
          <ButtonSecondary
            buttonText={buttonText}
            buttonLink={buttonLink}
          ></ButtonSecondary>
        )}
        {hackathonLink && (
          <ButtonSecondary
            buttonText={"View"}
            buttonLink={hackathonLink}
          ></ButtonSecondary>
        )}
      </div>
    </div>
  );
};

export default HackathonCard;

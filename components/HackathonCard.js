import React from "react";
import ButtonSecondary from "@/components/ButtonSecondary";

const HackathonCard = ({ headerText, descriptionText, buttonLink = "#" ,buttonText,hackathonLink}) => {
  return (
    <div className="w-full mt-4 rounded-md border-solid border-2 border-purple-600 flex flex-col text-left overflow-hidden transition duration-300 ease-out shadow-2xl hover:shadow-3xl hover:bg-black">
      <img
        className="w-full h-24 object-cover object-center border-solid border-b-2 border-purple-500"
        src="/hackathon-card.svg"
        alt="Card Image"
      />

      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{headerText}</div>
        <p className="text-gray-200 text-base">{descriptionText}</p>
      </div>
      <div className="self-end p-4 flex gap-4 items-center">
        {!buttonText ?  (<ButtonSecondary buttonText={"View"} buttonLink={buttonLink}></ButtonSecondary> ):
        (<ButtonSecondary buttonText={buttonText} buttonLink={buttonLink}></ButtonSecondary>)}
        {hackathonLink &&(<ButtonSecondary buttonText={"View"} buttonLink={hackathonLink}></ButtonSecondary> ) }
      </div>
    </div>
  );
};

export default HackathonCard;

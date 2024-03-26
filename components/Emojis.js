import React, { useEffect, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function Emojis({ onIconSelect, selectColor, teamAvatar, colorAvatar }) {
  const [isVisible, setVisible] = useState(false);
  const [currentEmojo, setEmoji] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  useEffect(() => {
    if (teamAvatar) {
      setEmoji(teamAvatar);
    }
    if (colorAvatar) {
      setSelectedColor(colorAvatar);
    }
  }, [teamAvatar, colorAvatar]);

  const handleEmoji = (e) => {
    setEmoji(e.native);
    setVisible(!isVisible);
    onIconSelect(e.native);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    selectColor(e.target.value);
  };

  return (
    <div>
      <button
        onClick={() => setVisible(!isVisible)}
        className="w-15 md:w-30 border-1 border-purple-500 hover:bg-purple-500 text-white border-solid border-2 font-bold py-2 px-6 rounded-full"
        type="button"
      >
        Choose emoji
      </button>
      <div className={isVisible ? "block" : "hidden"}>
        <Picker
          data={data}
          previewPosition={"none"}
          onEmojiSelect={handleEmoji}
        ></Picker>
      </div>

      {currentEmojo && (
        <div className="space-y-2 mt-2">
          <h2 className="block text-sm font-medium leading-6 text-white">
            Select a color
          </h2>
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            className="block"
          />
          <h1
            className="text-6xl py-5 px-2   inline-block rounded-3xl border-solid border-2 border-purple-500"
            style={{ backgroundColor: selectedColor }}
          >
            {currentEmojo}
          </h1>
        </div>
      )}
    </div>
  );
}

export default Emojis;

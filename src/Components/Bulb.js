// src/Components/Bulb.js
import React, { useState } from "react";

function Bulb() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <div
        className={`w-32 h-32 rounded-full border-4 ${
          isOn ? "bg-yellow-400 shadow-[0_0_60px_15px_rgba(253,224,71,0.8)]" : "bg-gray-300"
        } transition duration-500`}
      ></div>
      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
      >
        Turn {isOn ? "Off" : "On"}
      </button>
    </div>
  );
}

export default Bulb;

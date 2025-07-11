// src/Components/Bulb.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../feature/theme/themeSlice';
import { toggleBulb } from '../feature/bulb/bulbSlice';

const Bulb = () => {
 const bulbOn = useSelector((state) => state.bulb.on);  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center my-8">
      <div
        className={`w-24 h-24 rounded-full shadow-lg ${
          bulbOn ? 'bg-yellow-400' : 'bg-gray-300'
        }`}
      ></div>
      <button
        onClick={() => dispatch(toggleBulb())}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Turn {bulbOn ? 'Off' : 'On'}
      </button>
    </div>
  );
};

export default Bulb;

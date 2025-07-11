import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from '../feature/theme/themeSlice';
function Navbar(){
    const mode=useSelector((state)=>state.theme.mode)
    const dispatch=useDispatch()
   return (
    <nav className={`p-4 flex justify-between items-center ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-xl font-bold">MyApp Navbar 🚀</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 rounded bg-indigo-600 text-white"
      >
        {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  );
}
export default Navbar;
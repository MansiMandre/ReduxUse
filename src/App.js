import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './feature/counter/counterSlice';
import { toggleTheme } from './feature/theme/themeSlice';
import Navbar from './Components/Navbar';
import Bulb from './Components/Bulb';

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <div
      className={`min-h-screen ${
        mode === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <Navbar /> {/* ✅ Navbar Added Here */}
<Bulb/>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold mb-4">Counter + Theme Switcher 🚀</h1>
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            - Decrease
          </button>
          <span className="text-2xl">{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            + Increase
          </button>
        </div>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-6 py-2 bg-indigo-600 text-white rounded"
        >
          Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
    
  );
}


export default App;

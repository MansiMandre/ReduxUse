import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../feature/theme/themeSlice"

import counterReducer from "../feature/counter/counterSlice";
import bulbReducer from "../feature/bulb/bulbSlice"



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme:themeReducer,
    bulb:bulbReducer
  },
});

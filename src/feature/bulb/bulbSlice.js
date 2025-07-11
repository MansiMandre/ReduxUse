// src/feature/bulb/bulbSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bulbSlice = createSlice({
  name: 'bulb',
  initialState: { on: false },
  reducers: {
    toggleBulb: (state) => {
      state.on = !state.on;
    },
  },
});

export const { toggleBulb } = bulbSlice.actions;
export default bulbSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { min: 199, max: 999, section: null } };

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    switchSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchSection } = sectionSlice.actions;

export default sectionSlice.reducer;

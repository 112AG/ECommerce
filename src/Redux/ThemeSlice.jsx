import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: false,  
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    handleToggle: (state) => {
      state.toggle = !state.toggle;  
    },
  },
});

export const { handleToggle } = themeSlice.actions;
export default themeSlice.reducer;

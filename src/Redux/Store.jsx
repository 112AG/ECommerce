import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './ThemeSlice'; 

export const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default Store;

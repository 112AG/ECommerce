import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './ThemeSlice'; 
import cartReducer from './CartSlice';

export const Store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,

  },
});

export default Store;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
      
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
      
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
      
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        } else {
          item.quantity -= 1;
        }
      }
      
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
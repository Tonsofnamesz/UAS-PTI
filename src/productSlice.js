import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { cart: [] }, // Initialize state as an object with a cart property
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload); // Add products to the cart array
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload.id); // Remove products from the cart array
    },
    updateProduct: (state, action) => {
      const index = state.cart.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.cart[index] = action.payload; // Update products in the cart array
      }
    },
    clearCart: (state) => {
      state.cart = []; // Clear the cart array
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearCart } = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { cart: [], orderCart: [], totalPrice: 0 }, // Add orderCart to your initial state
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price; // Add product price to totalPrice
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.totalPrice -= state.cart[index].price; // Subtract product price from totalPrice
        state.cart.splice(index, 1); // Remove product from the cart array
      }
    },
    updateProduct: (state, action) => {
      const index = state.cart.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.totalPrice -= state.cart[index].price; // Subtract old product price from totalPrice
        state.cart[index] = action.payload; // Update product in the cart array
        state.totalPrice += action.payload.price; // Add new product price to totalPrice
      }
    },
    clearCart: (state) => {
      state.orderCart = [...state.cart]; // Transfer cart items to orderCart
      state.cart = [];
      state.totalPrice = 0; // Reset totalPrice when cart is cleared
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearCart } = productsSlice.actions;

export default productsSlice.reducer;

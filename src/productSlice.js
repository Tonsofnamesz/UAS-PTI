import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { cart: [], orderCart: [], totalPrice: 0 },
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.totalPrice -= state.cart[index].price;
        state.cart.splice(index, 1);
      }
    },
    updateProduct: (state, action) => {
      const index = state.cart.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.totalPrice -= state.cart[index].price;
        state.cart[index] = action.payload;
        state.totalPrice += action.payload.price;
      }
    },
    clearCart: (state) => {
      state.orderCart = [...state.cart];
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearCart } = productsSlice.actions;

export default productsSlice.reducer;

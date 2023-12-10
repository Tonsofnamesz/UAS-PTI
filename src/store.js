import { createStore } from 'redux';

// Action creators
export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product,
  };
};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    product,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

const initialState = {
  products: [],
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

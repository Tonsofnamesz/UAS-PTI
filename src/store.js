import { createStore } from 'redux';

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
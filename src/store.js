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

export const addOrder = () => {
  return {
    type: 'ADD_ORDER',
  };
};

export const removeOrder = (index) => {
  return {
    type: 'REMOVE_ORDER',
    index,
  };
};

export const clearOrder = () => {
  return {
    type: 'CLEAR_ORDER',
  };
};


const initialState = {
  products: [],
  cart: [],
  orderCart: [], // Add orderCart to your initial state
  totalPrice: 0,
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
        cart: [...state.cart, action.product],
        totalPrice: state.totalPrice + action.product.price
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.product.id),
        totalPrice: state.totalPrice - action.product.price
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        totalPrice: 0
      };
      case 'ADD_ORDER':
        return {
          ...state,
          orderCart: [...state.orderCart, { items: [...state.cart] }],
          cart: [],
        };      
      case 'REMOVE_ORDER':
        return {
          ...state,
          orderCart: state.orderCart.filter((_, i) => i !== action.index),
      };
      case 'CLEAR_ORDER':
        return {
          ...state,
          orderCart: [],
        };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

import { createStore } from 'redux';

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

export const decrementQuantity = (product) => {
  return {
    type: 'DECREMENT_QUANTITY',
    product,
  };
};

export const incrementQuantity = (product) => {
  return {
    type: 'INCREMENT_QUANTITY',
    product,
  };
};


const initialState = {
  products: [],
  cart: [],
  orderCart: [],
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
      const itemInCart = state.cart.find((item) => item.id === action.product.id);
      if (itemInCart) {
        const newCart = state.cart.map((item) =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cart: newCart,
          totalPrice: state.totalPrice + action.product.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
          totalPrice: state.totalPrice + action.product.price,
        };
      }
        case 'REMOVE_FROM_CART':
          const itemToRemove = state.cart.find((item) => item.id === action.product.id);
          if (itemToRemove) {
            state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
            state.cart = state.cart.filter((item) => item.id !== action.product.id);
          }
      return state;
    
      case 'DECREMENT_QUANTITY':
      const itemToDecrement = state.cart.find((item) => item.id === action.product.id);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        const newCart = state.cart.map((item) =>
          item.id === action.product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        return {
          ...state,
          cart: newCart,
          totalPrice: state.totalPrice - action.product.price,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.product.id),
          totalPrice: state.totalPrice - action.product.price,
        };
      }
      case 'INCREMENT_QUANTITY':
        const itemToIncrement = state.cart.find((item) => item.id === action.product.id);
        if (itemToIncrement) {
          const newCart = state.cart.map((item) =>
            item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          return {
            ...state,
            cart: newCart,
            totalPrice: state.totalPrice + action.product.price,
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.product, quantity: 1 }],
            totalPrice: state.totalPrice + action.product.price,
          };
        }
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

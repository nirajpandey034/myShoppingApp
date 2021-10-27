import { ADD_TO_CART,CLEAR_CART,REMOVE_FROM_CART } from "./cartType";

export const addToCart = (name, price) => {
  return {
    type: ADD_TO_CART,
    payload: {name:name, price:price, quantity:1},
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeFromCart = (name,price) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {name:name,price:price}
  }
}
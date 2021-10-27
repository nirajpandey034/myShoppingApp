import { ADD_TO_CART } from "./cartType";
import { CLEAR_CART } from "./cartType";

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

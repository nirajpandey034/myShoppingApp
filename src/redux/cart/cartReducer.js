import { ADD_TO_CART, CLEAR_CART,REMOVE_FROM_CART } from "./cartType";

const initialState = {
  prods: [],
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let obj = state.prods.findIndex(o => o.name === action.payload.name);
      if(obj===-1) {
        return {
          ...state,
          prods: state.prods.concat(action.payload),
          totalPrice: Number(state.totalPrice) + Number(action.payload.price),
        };
      }
      else{
        let newProds = [...state.prods]
        newProds[obj].quantity += 1
        return {
          ...state,
          prods:newProds,
          totalPrice: Number(state.totalPrice) + Number(action.payload.price),
        }
      }
      
    case CLEAR_CART:
      return {
        prods: [],
        totalPrice: 0,
      };
    case REMOVE_FROM_CART:
      let objIndex = state.prods.findIndex(o => o.name === action.payload.name);
      let newProds = [...state.prods]
      newProds[objIndex].quantity -= 1
      if(newProds[objIndex].quantity === 0)
        newProds.splice(objIndex,1)
      return {
          ...state,
          prods:newProds,
          totalPrice: Number(state.totalPrice) - Number(action.payload.price),
      }
    default:
      return state;
  }
};

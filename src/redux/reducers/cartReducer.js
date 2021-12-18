import { initialState } from "../store";

export default function cartReducer(state = initialState.cart, action) {
  
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        elements: state.elements.filter((item) => item !== payload),
      };
    default:
      //console.log('default')
      return state;
  }
}

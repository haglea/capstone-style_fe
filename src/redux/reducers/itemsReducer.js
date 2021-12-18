import { initialState } from "../store";

export default function itemsReducer(state = initialState.items, action) {
  
  const { type, payload } = action;

  switch (type) {
    case "GET_ITEMS":
      return {
        ...state,
        items: payload,
      };    
    case "ADD_ITEM":
      return {
        ...state,
        items: payload,
      };
    case "ADD_IMAGE":
      return {
        ...state,
        items: payload,
      };  
    default:
      // console.log('default')
      return state;
  }
}

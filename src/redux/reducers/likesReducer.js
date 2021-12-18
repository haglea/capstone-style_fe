import { initialState } from "../store";

export default function likesReducer(state = initialState.likes, action) {

  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        elements: state.elements.filter((item) => item !== payload),
      };
    default:
      //console.log('default')
      return state;
  }
}

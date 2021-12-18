import { initialState } from "../store";

export default function bidReducer(state = initialState.bids, action) {
  
  const { type, payload } = action;

  switch (type) {
    case "ADD_BID":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    default:
      //console.log('default')
      return state;
  }
}

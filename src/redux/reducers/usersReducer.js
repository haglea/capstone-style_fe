import { initialState } from "../store";

export default function itemsReducer(state = initialState.users, action) {

  const { type, payload } = action;

  switch (type) {
    case "GET_USER":
      return {
        ...state,
        users: payload,
      };
    case "GET_ME":
      return {
        ...state,
        users: payload,
      };
    default:
      //console.log('default')
      return state;
  }
}

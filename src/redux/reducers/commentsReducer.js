import { initialState } from "../store";

export default function commentsReducer(state = initialState.comments, action) {
  
  const { type, payload } = action;

  switch (type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: payload,
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    default:
      //console.log('default')
      return state;
  }
}

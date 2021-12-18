import { initialState } from "../store";

export default function authReducer(state = initialState.auth, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      // console.log('default')
      return state;
  }
}

import axios from "axios";

export const loginUser = (url, email, password) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(url, {
        email,
        password,
      });
      if (data) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data,
        });
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        dispatch({
          type: "LOGIN_FAIL",
        });
      }
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
      });
  };
}
};

export const logout = (url) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "LOGOUT",
      });
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };
};

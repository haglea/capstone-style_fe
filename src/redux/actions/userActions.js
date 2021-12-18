import axios from "axios";
import authHeader from "./auth-header";

export const getUser = (url) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(
        url, {
            headers: authHeader() 
          });
      if (data) {
        dispatch({
          type: "GET_USER",
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMe = (url) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(url, {
        headers: authHeader(),
      });
      if (data) {
        dispatch({
          type: "GET_ME",
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

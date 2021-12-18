import axios from "axios";

export const getComments = (url) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(url);
      if (data) {
        dispatch({
          type: "GET_COMMENTS",
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

export const addComment = (url, comment, userId, first_name) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(url, {
        comment,
        userId,
        first_name,
      });
      if (data) {
        dispatch({
          type: "ADD_COMMENT",
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

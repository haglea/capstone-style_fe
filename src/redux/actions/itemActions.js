import axios from "axios";
import authHeader from "./auth-header";

export const fetchItems = (url) => {
  return async (dispatch, getState) => {
    try {
        let { data } = await axios.get(url);
        if (data.items.length > 0) {
        dispatch({
          type: "GET_ITEMS",
          payload: data.items,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItem = (url, item_name, price, category, description, user) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(
        url,
        {
          item_name,
          price,
          category,
          description,
          user,
        },
        {
          headers: authHeader(),
        }
      );
      if (data) {
        dispatch({
          type: "ADD_ITEM",
          payload: data,
        });
      } else {
        console.log("error");
      }
      localStorage.setItem("newItem", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addImage = (url, formData) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(url, formData, {
        headers: authHeader(),
      });
      if (data) {
        dispatch({
          type: "ADD_IMAGE",
          payload: data,
        });
      } else {
        console.log("error");
      }
      localStorage.setItem("newItem", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
};

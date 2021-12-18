export const addBid = (item) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_BID",
      payload: item,
    });
    localStorage.setItem("bids", JSON.stringify(item));
  };
};

export const addToFav = (item) => ({
  type: "ADD_TO_FAV",
  payload: item,
});

export const removeFromFav = (item) => ({
  type: "REMOVE_FROM_FAV",
  payload: item,
});

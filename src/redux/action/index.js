export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const addToFavoriteListItem = (data) => {
  return {
    type: ADD_TO_LIST,
    payload: data.company_name,
  };
};

export const removeFromListItem = (i) => {
  return {
    type: REMOVE_FROM_LIST,
    payload: i,
  };
};
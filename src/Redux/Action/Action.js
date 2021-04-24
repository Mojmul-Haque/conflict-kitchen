export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART = "REMOVE_CART";

export const addToCart = (pdId, name) => {
  return { type: ADD_TO_CART, pdId, name };
};

export const removeCart = buyId => {
  return {type: REMOVE_CART, buyId}
};

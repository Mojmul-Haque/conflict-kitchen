import { ADD_TO_CART, REMOVE_CART } from "../Action/Action";

export const initialeState = {
  cart: [],
};

export const cartReducer = (state = initialeState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = {
        name: action.name,
        productId: action.pdId,
        cartId: state.cart.length + 1,
      };
      const allCart = [...state.cart, newCart];
      return { cart: allCart };

    case REMOVE_CART:
      const cartId = action.buyId;
      console.log(cartId);
      const remainingCart = state.cart.filter((item) => item.cartId !== cartId);
      return { cart: remainingCart };
    default:
      return state;
  }
};

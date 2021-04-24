import React from "react";

const Cart = ({ cartItem, removeCart }) => {
  console.log(cartItem);
  return (
    <div>
      <h3>{cartItem.name}</h3>
      <button
        onClick={() => removeCart(cartItem.cartId)}
        className="btn btn-danger"
      >
        remove
      </button>
    </div>
  );
};

export default Cart;

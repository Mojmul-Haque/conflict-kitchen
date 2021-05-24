import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../Redux/Action/shopAction";
const Product = ({ product, addToCart }) => {
  const { name, id, price } = product;
  return (
    <div className="col-lg-3">
      <div className="border p-3 my-2">
        <h4>{name}</h4>
        <h4>price: {price}</h4>
        <button onClick={() => addToCart(id)} className="btn btn-primary">
          Add cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(null, mapDispatchToProps)(Product);

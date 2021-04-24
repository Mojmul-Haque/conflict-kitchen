import React from "react";

const AllFoods = (props) => {
  const { food, addToCart } = props;
  let { mealName, price, _id } = food;

  return (
    <div className="col-lg-4 my-3 text-center">
      <div className="foods  border p-4">
        <h5>{mealName}</h5>
        <h6>Price : {price}</h6>
        <button
          onClick={() => addToCart(_id, mealName)}
          type="button"
          className="btn btn-success fs-6 mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default AllFoods;

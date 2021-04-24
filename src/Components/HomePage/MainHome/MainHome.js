import React, { useEffect, useState } from "react";
import { addToCart, removeCart } from "../../../Redux/Action/Action";
import AllFoods from "../AllFoods/AllFoods";
import { connect } from "react-redux";
import Cart from "../Cart/Cart";

const MainHome = (props) => {
  console.log(props);
  const { cart, addToCart, removeCart } = props;
  const [foods, setFoods] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/allFoods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  let meals = [...foods];

  if (inputSearch.length > 0) {
    meals = meals.filter((food) => {
      return (
        food.mealName.match(inputSearch) ||
        food.category.match(inputSearch) ||
        String(food.price).match(inputSearch) ||
        food.mealName.toLowerCase().match(inputSearch) ||
        food.category.toUpperCase().match(inputSearch)
      );
    });
    console.log(meals);
  }

  return (
    <div className="container-fluid d">
      <div className="row">
        <div className="col-lg-9">
          <h3>there are foods {foods.length}</h3>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder="Search Your Food by 
            Name or Category or Price"
              />
            </div>
          </div>
          <div className="row">
            {meals.length === 0 ? (
              "not found"
            ) : (
              <>
                {meals.map((food) => (
                  <AllFoods
                    food={food}
                    key={food._id}
                    addToCart={addToCart}
                    removeCart={removeCart}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="col-lg-3 border">
          <h3>Cart item {cart.length}</h3>
          <h3>cartId: {cart.cartId}</h3>
          {cart.map((item) => (
            <Cart cartItem={item} removeCart={removeCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeCart: removeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHome);

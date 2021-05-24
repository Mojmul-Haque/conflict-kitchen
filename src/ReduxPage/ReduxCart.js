import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const ReduxCart = ({ cart }) => {
  const [count, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((element) => {
      console.log(element);
      count += element.qty;
      console.log(count);
      setCartCount(count);
    });
  }, [cart]);

  console.log(count);
  return (
    <div>
      <div className="container">
        <div className="row">
          {cart.map((pd) => (
            <div className="col-lg-4">
              <div className="border p-3 my-3">
                <h4>{pd.name}</h4>
                <h4>price: {pd.price}</h4>
                <input type="number" min="1" value={pd.qty} />
                <button className="btn-primary my-3 btn d-block">Remove</button>
                <h5>count:{count}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};
export default connect(mapStateToProps)(ReduxCart);

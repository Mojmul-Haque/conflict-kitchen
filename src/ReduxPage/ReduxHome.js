import React from "react";
import { connect } from "react-redux";
import NavHeader from "../Components/Shared/NavHeader/NavHeader";
import Product from "./Product";
const ReduxHome = ({ products }) => {
  return (
    <div>
      <NavHeader />
      <div className="container">
        <div className="row">
          {products.map((pd) => (
            <Product product={pd} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products };
};

export default connect(mapStateToProps)(ReduxHome);

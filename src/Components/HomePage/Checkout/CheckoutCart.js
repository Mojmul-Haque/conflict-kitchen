import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import PaymentCard from "../PaymentForm/PaymentCard";

const CheckoutCart = ({ cart }) => {
  console.log(cart);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const userCartData = {
      name: data.name,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      cartItem: cart,
      payment: null,
    };
    console.log(watch("example")); // watch input value by passing the name of it

    fetch(`http://localhost:4000/addOrderd`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userCartData),
    })
      .then((res) => res.json())
      .then((data) => console.log("order added", data));
  };

  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7">
          <Elements stripe={stripePromise}>
            <PaymentCard cart={cart} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};
export default connect(mapStateToProps)(CheckoutCart);

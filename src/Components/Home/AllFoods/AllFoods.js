import React, {useContext} from "react";
import {UserContext} from "../../../App";

const AllFoods = (props) => {
  const [shareData, setShareData] = useContext(UserContext);
  const {mealName, price} = props.food;
  const mealData = {
    mealName: mealName,
  };
  // setShareData(mealData);
  return (
    <div className="col-lg-3 my-3 text-center">
      <div className="foods  border p-4">
        <h5>{mealName}</h5>
        <h6>Price : {price}</h6>
        <button className="btn btn-success fs-6 mt-2">Add to cart</button>
      </div>
    </div>
  );
};

export default AllFoods;

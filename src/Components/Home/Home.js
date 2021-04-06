import React, {useEffect, useState, useContext} from "react";
import AllFoods from "./AllFoods/AllFoods";
// import {UserContext} from "../../../App";

const Home = () => {
  // const [shareData, setShareData] = useContext(UserContext);
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
  console.log(meals);

  const handleSearch = (e) => {
    // e.preventDefault();
    setInputSearch(e.target.value);
  };
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
    <div className="container-fluid">
      <h3>there are foods {foods.length}</h3>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <input
            className="form-control"
            type="text"
            onChange={handleSearch}
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
            {" "}
            {meals.map((food) => (
              <AllFoods food={food} key={food._id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

// {foods.map((food) => (
//     <div className="col-lg-3 my-3 text-center key={food._id}">
//       <div className="foods  border p-4">
//         <h5>{food.mealName}</h5>
//         <h6>Price : {food.price}</h6>
//         <button className="btn btn-success fs-6 mt-2">Add to cart</button>
//       </div>
//     </div>
//   ))}

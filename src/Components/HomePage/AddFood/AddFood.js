import {useForm} from "react-hook-form";
import React, {useState} from "react";
import axios from "axios";
const AddFood = () => {
  const [imageURL, setImageURL] = useState(null);
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    const foodData = {
      mealName: data.mealName,
      category: data.category,
      price: data.price,
      ReviewStar: data.ReviewStar,  
      image: imageURL,
    };
    fetch(`http://localhost:4000/addFood`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(foodData),
    }).then((res) => console.log(res));

    console.log(data);
    console.log(foodData);
  };
  const handleUploadImage = (e) => {
    const imageData = new FormData();
    imageData.set("key", "4293d3250626797a42eff9e2c2140891");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImageURL(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(imageURL);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("mealName")}
              placeholder="mealName"
              className="form-control my-3"
            />
            <input
              {...register("ingradients")}
              placeholder="ingradients"
              className="form-control my-3"
            />
            <input
              {...register("category")}
              placeholder="category"
              className="form-control my-3"
            />
            <input
              {...register("price", {valueAsNumber: true})}
              placeholder="price"
              className="form-control my-3"
            />

            <input
              {...register("ReviewStar", {valueAsNumber: true})}
              placeholder="food-review-star"
              className="form-control my-3"
            />
            <input
              type="file"
              {...register("image")}
              placeholder="description"
              className="form-control my-3"
              onChange={handleUploadImage}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;

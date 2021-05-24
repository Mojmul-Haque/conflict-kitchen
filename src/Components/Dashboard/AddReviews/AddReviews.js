import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import "./AddReview.css";
import axios from "axios";

const AddReviews = () => {
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const reviewData = {
      userName: data.name,
      userEmail: data.email,
      userReview: data.textbox,
      userImage: imageURL,
    };
    console.log(reviewData);

    fetch(`http://localhost:4000/addReview`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    const uploadImage = new FormData();
    uploadImage.set("key", "371a2068f3d3dcec04d20b1ada3121d8");
    uploadImage.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", uploadImage)
      .then((response) => {
        setImageURL(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container add-review">
      <div className="row">
        <div className="col-lg-6">
          <form className="user-feedback" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="form-control my-2"
                {...register("name", { required: true })}
                placeholder="Your Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <input
                className="form-control my-2"
                {...register("email", { required: true })}
                placeholder="Your Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <textarea
                className="form-control my-2"
                {...register("textbox", { required: true })}
                placeholder="Your Feedback"
              />
              {errors.textbox && <span>Your Message is required</span>}
            </div>

            <div>
              <input
                type="file"
                onChange={uploadImage}
                className="form-control my-2"
              />
            </div>

            <Button
              className="my-2"
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit{" "}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;

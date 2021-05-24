import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import "./AddReview.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReviews = () => {
  const [imageURL, setImageURL] = useState(null);
  const notify = () =>
    toast.success("Succes,Your data post on server", { autoClose: 2500 });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
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
      .then((result) => {
        console.log(result);
        if (result) {
          notify();
          e.target.reset();
        } else {
          alert("your data don't post on server");
        }
      });
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
              <label htmlFor="name">Name</label>
              <input
                className="form-control my-2"
                {...register("name", { required: true })}
                placeholder="Your Name"
                id="name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="userEmail">Email</label>
              <input
                className="form-control my-2"
                {...register("email", { required: true })}
                placeholder="Your Email"
                id="userEmail"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="message">Messaage</label>
              <textarea
                className="form-control my-2"
                {...register("textbox", { required: true })}
                placeholder="Your Feedback"
                id="message"
              />
              {errors.textbox && <span>Your Message is required</span>}
            </div>

            <div>
            <label htmlFor="userImage">Your image</label>
              <input
                type="file"
                onChange={uploadImage}
                className="form-control my-2"
                id="userImage"
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
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;

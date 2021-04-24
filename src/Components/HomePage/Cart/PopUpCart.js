// import React, {useState, useContext} from "react";
// import {UserContext} from "../../App";

// const PopUpCart = (props) => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const {mealName, price, image} = props.food;
//   const [cartCount, setCartCount] = useState(1);
//   const handleCartCount = (inCrise) => {
//     if (inCrise) {
//       setCartCount(cartCount + 1);
//     } else {
//       if (cartCount > 1) {
//         setCartCount(cartCount - 1);
//       }
//     }
//   };
//   let totalPrice = price;
//   totalPrice = price * cartCount;
//   console.log(totalPrice);

//   const handleAddCart = () => {
//     const pd = {...props.food};
//     console.log(pd);
//     pd.quantity = cartCount;
//     console.log(pd);
//   };

//   return (
//     <>
//       <div className="modal-header">
//         <h5 className="modal-title" id="popUpCartLabel">
//           Modal title
//         </h5>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="modal"
//           aria-label="Close"
//         ></button>
//       </div>
//       <div className="modal-body">
//         <div className="show-product">
//           <figure className="d-flex">
//             <div className="img" style={{width: "120px"}}>
//               <img src={image} className="img-fluid w-100" alt={image} />
//             </div>
//             <div className="product-contenttext-left">
//               <h5>{mealName || "not found"}</h5>
//               <h6>Price:{price}</h6>
//               <h6>
//                 Quantity:
//                 <div
//                   onClick={() => handleCartCount(false)}
//                   className="btn btn-warning d-inline-block"
//                 >
//                   -
//                 </div>{" "}
//                 <span>{cartCount}</span>
//                 <div
//                   onClick={() => handleCartCount(true)}
//                   className="btn btn-warning d-inline-block"
//                 >
//                   +
//                 </div>
//               </h6>
//               <h6>Sub Total Price:{totalPrice}</h6>
//               <button onClick={handleAddCart} className="btn btn-primary">
//                 Add to cart
//               </button>
//             </div>
//           </figure>
//         </div>
//       </div>
//       <div className="modal-footer">
//         <button
//           type="button"
//           className="btn btn-secondary"
//           data-bs-dismiss="modal"
//         >
//           Close
//         </button>
//         <button type="button" className="btn btn-primary">
//           Save changes
//         </button>
//       </div>
//     </>
//   );
// };

// export default PopUpCart;

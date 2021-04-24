import React, {useContext} from "react";
import {handleGoogleSignIn, initialiizeApp} from "./Firebase/firebase.auth";
import {UserContext} from "../../App";
initialiizeApp();
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const googleSignIn = () => {
    handleGoogleSignIn().then((result) => {
      console.log(result);
      const userInfo = {
        name: result.displayName,
        email: result.email,
        isSignin: true,
      };
      setLoggedInUser(userInfo);
    });
  };

  return (
    <div>
      <h3>Usesrr can logiin here </h3>
      <button onClick={googleSignIn}>Contnue with google</button>
    </div>
  );
};

export default Login;

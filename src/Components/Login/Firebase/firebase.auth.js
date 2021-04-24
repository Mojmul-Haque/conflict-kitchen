import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import {firebaseConfig} from "./firebase.config";
export const initialiizeApp = () => {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const handleGoogleSignIn = () => {
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const getUser = result.user;
      return getUser;
    })
    .catch((error) => error);
};

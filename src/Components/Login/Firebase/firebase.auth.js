import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
export const initialiizeApp = () => {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
};

export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export const handleGoogleSignIn = (providerNmae) => {
  return firebase
    .auth()
    .signInWithPopup(providerNmae)
    .then((result) => {
      const getUser = result.user;
      return getUser;
    })
    .catch((error) => error);
};

// signIn with email and password
export const signIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => error);
};

export const createUser = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      currentUser(name);
      return user;
    })
    .catch((error) => error);
};

const currentUser = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

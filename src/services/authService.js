import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

export const loginUser = async (
  email,
  password
) => {

  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  const user =
    userCredential.user;

  const userRef =
    doc(
      db,
      "users",
      user.uid
    );

  const userDoc =
    await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error(
      "Account no longer exists."
    );
  }

  if (
    userDoc.data().disabled === true
  ) {
    throw new Error(
      "Account disabled."
    );
  }

  return user;
};

export const registerUser = async (
  userData
) => {

  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

  const user =
    userCredential.user;

  await setDoc(
    doc(
      db,
      "users",
      user.uid
    ),
    {
      uid: user.uid,
      name: userData.name,
      email: userData.email,
      dob: userData.dob,
      phone: userData.phone,
      gender: userData.gender,
      location: userData.location,
      disabled: false,
      createdAt: new Date(),
    }
  );

  return user;
};

export const logoutUser = async () => {
  await signOut(auth);
};
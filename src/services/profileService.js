import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const getUserProfile = async (uid) => {
  const userRef = doc(db, "users", uid);

  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    throw new Error("User profile not found.");
  }

  return userSnap.data();
};

export const updateUserProfile = async (
  uid,
  profileData
) => {
  const userRef = doc(db, "users", uid);

  await updateDoc(
    userRef,
    profileData
  );
};
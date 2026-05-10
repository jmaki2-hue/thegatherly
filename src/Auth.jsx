import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { auth } from "./firebase";

export default function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created!");

    } catch (error) {

      alert(error.message);

    }

  };

  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Logged in!");

    } catch (error) {

      alert(error.message);

    }

  };

  const logout = async () => {

    await signOut(auth);

    alert("Logged out!");

  };

  return (

    <div className="bg-zinc-900 p-10 rounded-3xl max-w-md mx-auto">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Gatherly Account
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-4 rounded-xl mb-4 text-black"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-4 rounded-xl mb-6 text-black"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex flex-col gap-4">

        <button
          onClick={register}
          className="bg-orange-400 hover:bg-orange-500 py-4 rounded-full"
        >
          Register
        </button>

        <button
          onClick={login}
          className="bg-blue-500 hover:bg-blue-600 py-4 rounded-full"
        >
          Login
        </button>

      </div>

    </div>

  );
}
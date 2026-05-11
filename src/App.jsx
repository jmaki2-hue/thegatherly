import React, { useState } from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "./firebase";

/* LANDING PAGE */
function LandingPage() {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-12 rounded-3xl max-w-2xl text-center shadow-2xl">

        <h1 className="text-6xl font-bold text-orange-300 mb-8">
          The Gatherly
        </h1>

        <p className="text-gray-300 text-xl mb-10">
          Meaningful dinners, social experiences,
          curated hangouts, and unforgettable connections.
        </p>

        <div className="flex justify-center gap-6">

          <Link
            to="/login"
            className="bg-orange-400 hover:bg-orange-500 px-10 py-4 rounded-full text-black font-semibold"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-zinc-700 hover:bg-zinc-600 px-10 py-4 rounded-full"
          >
            Sign Up
          </Link>

        </div>

      </div>

    </div>

  );

}

/* DASHBOARD */
function Dashboard() {

  const categories = [
    {
      title: "Family Dinner",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Warm and cozy venues for family bonding.",
      path: "/family-dinner",
    },

    {
      title: "Friends Hangout",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Reconnect with old friends in premium venues.",
      path: "/friends-hangout",
    },

    {
      title: "Meet New People",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Meet strangers naturally through curated seating.",
      path: "/social-seating",
    },
  ];

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-zinc-900 sticky top-0 z-50">

        <Link
          to="/dashboard"
          className="text-3xl font-bold text-orange-300"
        >
          The Gatherly
        </Link>

        <div className="flex gap-6 items-center">

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/subscribe">
            Subscribe
          </Link>

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <div className="bg-zinc-900 rounded-3xl max-w-5xl mx-auto p-10 shadow-2xl">

          <h1 className="text-6xl font-bold mb-8 text-orange-300">
            Welcome to Gatherly
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore curated social experiences,
            restaurants, lounges, and premium venues.
          </p>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-10">

          {categories.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300">
                  {item.desc}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </div>

  );

}

/* LOGIN PAGE */
function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful!");

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  const forgotPassword = async () => {

    if (!email) {

      alert("Enter your email first.");
      return;

    }

    try {

      await sendPasswordResetEmail(auth, email);

      alert("Password reset email sent.");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-bold text-orange-300 text-center mb-8">
          Login
        </h1>

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

        <button
          onClick={login}
          className="w-full bg-orange-400 hover:bg-orange-500 py-4 rounded-full text-black font-semibold"
        >
          Login
        </button>

        <button
          onClick={forgotPassword}
          className="mt-6 text-gray-400 hover:text-orange-300"
        >
          Having trouble signing in? Forgot Password
        </button>

      </div>

    </div>

  );

}

/* SIGN UP PAGE */
function SignupPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const signup = async () => {

    if (form.password !== form.confirmPassword) {

      alert("Passwords do not match.");
      return;

    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      alert("Account created successfully!");

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-2xl shadow-2xl">

        <h1 className="text-4xl font-bold text-orange-300 text-center mb-10">
          Create Your Account
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Full Name"
            className="p-4 rounded-xl text-black"
            onChange={handleChange}
          />

          <input
            name="gender"
            placeholder="Gender"
            className="p-4 rounded-xl text-black"
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            className="p-4 rounded-xl text-black"
            onChange={handleChange}
          />

          <input
            name="contact"
            placeholder="Contact Number"
            className="p-4 rounded-xl text-black"
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            className="p-4 rounded-xl text-black md:col-span-2"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-4 rounded-xl text-black md:col-span-2"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="New Password"
            className="p-4 rounded-xl text-black"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Verify Password"
            className="p-4 rounded-xl text-black"
            onChange={handleChange}
          />

        </div>

        <button
          onClick={signup}
          className="w-full mt-8 bg-orange-400 hover:bg-orange-500 py-4 rounded-full text-black font-semibold"
        >
          Register Account
        </button>

      </div>

    </div>

  );

}

/* PROFILE PAGE */
function ProfilePage() {

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-orange-300 mb-10">
        My Profile
      </h1>

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-3xl">

        <p className="mb-4">Profile customization coming soon.</p>

        <button className="bg-orange-400 px-8 py-4 rounded-full text-black">
          Upload Profile Picture
        </button>

      </div>

    </div>

  );

}

/* SUBSCRIBE PAGE */
function SubscribePage() {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-xl text-center">

        <h1 className="text-5xl font-bold text-orange-300 mb-8">
          Become a Subscriber
        </h1>

        <p className="text-gray-300 mb-10">
          Subscribers enjoy unlimited reservations,
          premium seating, and exclusive experiences.
        </p>

        <button className="bg-orange-400 hover:bg-orange-500 px-10 py-5 rounded-full text-black font-semibold">
          Subscribe Now
        </button>

      </div>

    </div>

  );

}

/* VENUE PAGE */
function VenuePage({ title }) {

  const reserveSpot = () => {

    const subscribed = false;

    if (!subscribed) {

      alert(
        "You are not subscribed. Please enter payment details to continue."
      );

    } else {

      alert("Reservation confirmed!");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <Link
        to="/dashboard"
        className="bg-orange-400 text-black px-6 py-3 rounded-full inline-block mb-10"
      >
        Back Home
      </Link>

      <h1 className="text-5xl font-bold mb-10">
        {title}
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl"
          >

            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
              alt="Venue"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-4">
                Premium Venue
              </h2>

              <p className="text-gray-300 mb-6">
                Curated dining experience.
              </p>

              <button
                onClick={reserveSpot}
                className="w-full bg-orange-400 hover:bg-orange-500 py-4 rounded-full text-black"
              >
                Reserve Spot
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default function App() {

  return (

    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/subscribe" element={<SubscribePage />} />

      <Route
        path="/family-dinner"
        element={<VenuePage title="Family Dinner Venues" />}
      />

      <Route
        path="/friends-hangout"
        element={<VenuePage title="Friends Hangout Venues" />}
      />

      <Route
        path="/social-seating"
        element={<VenuePage title="Meet New People" />}
      />

    </Routes>

  );

}
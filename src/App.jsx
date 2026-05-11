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

/* HOME PAGE */
function HomePage() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        <div className="bg-black/70 p-10 md:p-16 rounded-3xl max-w-5xl text-center backdrop-blur-md">

          <h1 className="text-5xl md:text-7xl font-bold text-orange-300 mb-8">
            The Gatherly
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
            Curated restaurants, social experiences,
            premium hangouts, and meaningful connections.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <Link
              to="/login"
              className="bg-orange-400 hover:bg-orange-500 px-8 py-4 rounded-full text-black font-semibold text-lg"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-zinc-700 hover:bg-zinc-600 px-8 py-4 rounded-full text-lg"
            >
              Sign Up
            </Link>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-bold text-center mb-16 text-orange-300">
          Explore Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* FAMILY */}
          <Link to="/login">

            <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Family Dinner
                </h3>

                <p className="text-gray-300">
                  Cozy venues and premium restaurants
                  for family bonding moments.
                </p>

              </div>

            </div>

          </Link>

          {/* FRIENDS */}
          <Link to="/login">

            <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Friends Hangout
                </h3>

                <p className="text-gray-300">
                  Reconnect with friends through cafés,
                  lounges, and relaxing venues.
                </p>

              </div>

            </div>

          </Link>

          {/* SOCIAL */}
          <Link to="/login">

            <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Meet New People
                </h3>

                <p className="text-gray-300">
                  Join curated social seating experiences
                  and meet strangers naturally.
                </p>

              </div>

            </div>

          </Link>

        </div>

      </section>

      <Footer />

    </div>

  );

}

/* LOGIN */
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

      alert("Please enter your email.");
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

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md">

        <h1 className="text-5xl font-bold text-orange-300 text-center mb-10">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-5 rounded-2xl mb-5 bg-zinc-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-5 rounded-2xl mb-6 bg-zinc-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-orange-400 hover:bg-orange-500 py-4 rounded-full text-black font-semibold text-lg"
        >
          Login
        </button>

        <button
          onClick={forgotPassword}
          className="mt-6 text-gray-400 hover:text-orange-300"
        >
          Forgot Password?
        </button>

      </div>

    </div>

  );

}

/* SIGNUP */
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

      alert("Account created!");

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-2xl">

        <h1 className="text-5xl font-bold text-orange-300 text-center mb-10">
          Sign Up
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Full Name"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

          <input
            name="gender"
            placeholder="Gender"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

          <input
            name="contact"
            placeholder="Contact Number"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            className="p-4 rounded-2xl bg-zinc-800 text-white md:col-span-2"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-4 rounded-2xl bg-zinc-800 text-white md:col-span-2"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

        </div>

        <button
          onClick={signup}
          className="w-full mt-8 bg-orange-400 hover:bg-orange-500 py-4 rounded-full text-black font-semibold text-lg"
        >
          Create Account
        </button>

      </div>

    </div>

  );

}

/* VENUES */
function VenuePage({ title }) {

  const venues = [

    {
      name: "Luna Bistro",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Golden Fork",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "River Lounge",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  return (

    <div className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-orange-300 text-center mb-16">
        {title}
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {venues.map((venue, index) => (

          <div
            key={index}
            className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
          >

            <img
              src={venue.image}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4">
                {venue.name}
              </h3>

              <button
                onClick={() =>
                  alert("Reservation Confirmed!")
                }
                className="bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-full text-black font-semibold"
              >
                Book Venue
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

/* DASHBOARD */
function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white">

      <nav className="bg-zinc-900 p-6 flex justify-between items-center flex-wrap gap-4 sticky top-0 z-50">

        <Link
          to="/dashboard"
          className="text-3xl font-bold text-orange-300"
        >
          The Gatherly
        </Link>

        <div className="flex gap-6 flex-wrap">

          <Link to="/family-dinner">
            Family Dinner
          </Link>

          <Link to="/friends-hangout">
            Friends Hangout
          </Link>

          <Link to="/social-seating">
            Meet New People
          </Link>

          <Link to="/profile">
            Profile
          </Link>

          <button
            onClick={() => {

              alert("Logged out successfully.");

              navigate("/login");

            }}
          >
            Logout
          </button>

        </div>

      </nav>

      <section className="text-center py-24 px-6">

        <h1 className="text-6xl font-bold text-orange-300 mb-8">
          Welcome to The Gatherly
        </h1>

        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Discover curated venues, unforgettable
          experiences, and meaningful connections.
        </p>

      </section>

    </div>

  );

}

/* PROFILE */
function ProfilePage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-3xl">

        <button
          onClick={() => navigate(-1)}
          className="text-orange-300 mb-8"
        >
          ← Back
        </button>

        <h1 className="text-5xl font-bold text-orange-300 mb-10">
          My Profile
        </h1>

        <div className="space-y-6">

          <input
            value="John Doe"
            className="w-full p-5 rounded-2xl bg-zinc-800"
          />

          <input
            value="johndoe@email.com"
            className="w-full p-5 rounded-2xl bg-zinc-800"
          />

          <input
            value="California, USA"
            className="w-full p-5 rounded-2xl bg-zinc-800"
          />

          <input
            value="+1 234 567 890"
            className="w-full p-5 rounded-2xl bg-zinc-800"
          />

          <button
            onClick={() =>
              alert("Profile Updated Successfully")
            }
            className="bg-orange-400 hover:bg-orange-500 px-10 py-4 rounded-full text-black font-semibold"
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>

  );

}

/* FOOTER */
function Footer() {

  return (

    <footer className="bg-zinc-950 text-gray-400 px-6 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>

          <h3 className="text-orange-300 text-2xl font-bold mb-4">
            The Gatherly
          </h3>

          <p>
            Curated social experiences and premium dining.
          </p>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <p>+1 234 567 890</p>
          <p>hello@thegatherly.com</p>
          <p>California, USA</p>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-4">
            Socials
          </h4>

          <div className="flex flex-col gap-2">

            <a href="https://facebook.com">
              Facebook
            </a>

            <a href="https://instagram.com">
              Instagram
            </a>

            <a href="https://tiktok.com">
              TikTok
            </a>

          </div>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-4">
            Legal
          </h4>

          <p>Terms & Conditions</p>
          <p>FAQs</p>
          <p>Our Story</p>

        </div>

      </div>

      <div className="text-center mt-16 border-t border-zinc-800 pt-8">
        © 2026 The Gatherly. All Rights Reserved.
      </div>

    </footer>

  );

}

/* APP */
export default function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="/family-dinner"
        element={
          <VenuePage title="Family Dinner Venues" />
        }
      />

      <Route
        path="/friends-hangout"
        element={
          <VenuePage title="Friends Hangout Venues" />
        }
      />

      <Route
        path="/social-seating"
        element={
          <VenuePage title="Meet New People" />
        }
      />

      <Route path="/profile" element={<ProfilePage />} />

    </Routes>

  );

}
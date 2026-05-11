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

        <div className="flex justify-center gap-6 flex-wrap">

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

      alert("Please enter your email first.");
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

        <h1 className="text-5xl font-bold text-orange-300 text-center mb-10">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-5 rounded-2xl mb-5 text-white bg-zinc-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-5 rounded-2xl mb-6 text-white bg-zinc-800"
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
          Having trouble signing in? Forgot Password
        </button>

      </div>

    </div>

  );

}

/* SIGNUP PAGE */
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

        <h1 className="text-5xl font-bold text-orange-300 text-center mb-10">
          Create Account
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
            placeholder="Email Address"
            className="p-4 rounded-2xl bg-zinc-800 text-white md:col-span-2"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="New Password"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Verify Password"
            className="p-4 rounded-2xl bg-zinc-800 text-white"
            onChange={handleChange}
          />

        </div>

        <button
          onClick={signup}
          className="w-full mt-8 bg-orange-400 hover:bg-orange-500 py-4 rounded-full text-black font-semibold text-lg"
        >
          Register Account
        </button>

      </div>

    </div>

  );

}

/* PROFILE PAGE */
function ProfilePage() {

  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    address: "California, USA",
    contact: "+1 234 567 890",
  });

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  const saveProfile = () => {

    setEditing(false);

    setSaved(true);

    setTimeout(() => {

      setSaved(false);

    }, 3000);

  };

  return (

    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-10 shadow-2xl relative">

        {saved && (

          <div className="absolute top-6 right-6 bg-green-500 text-black px-5 py-3 rounded-full font-semibold">
            Profile Updated Successfully
          </div>

        )}

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-orange-300 hover:text-orange-400 text-lg"
        >
          ← Back
        </button>

        <h1 className="text-6xl font-bold text-orange-300 mb-12">
          My Profile
        </h1>

        <div className="space-y-8">

          <div>

            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              name="name"
              value={profile.name}
              disabled={!editing}
              onChange={handleChange}
              className={`w-full p-5 rounded-2xl border bg-zinc-800 text-white ${
                editing
                  ? "border-orange-400"
                  : "border-zinc-700"
              }`}
            />

          </div>

          <div>

            <label className="block text-gray-300 mb-2">
              Email Address
            </label>

            <input
              name="email"
              value={profile.email}
              disabled={!editing}
              onChange={handleChange}
              className={`w-full p-5 rounded-2xl border bg-zinc-800 text-white ${
                editing
                  ? "border-orange-400"
                  : "border-zinc-700"
              }`}
            />

          </div>

          <div>

            <label className="block text-gray-300 mb-2">
              Address
            </label>

            <input
              name="address"
              value={profile.address}
              disabled={!editing}
              onChange={handleChange}
              className={`w-full p-5 rounded-2xl border bg-zinc-800 text-white ${
                editing
                  ? "border-orange-400"
                  : "border-zinc-700"
              }`}
            />

          </div>

          <div>

            <label className="block text-gray-300 mb-2">
              Contact Number
            </label>

            <input
              name="contact"
              value={profile.contact}
              disabled={!editing}
              onChange={handleChange}
              className={`w-full p-5 rounded-2xl border bg-zinc-800 text-white ${
                editing
                  ? "border-orange-400"
                  : "border-zinc-700"
              }`}
            />

          </div>

        </div>

        <div className="flex gap-4 mt-10 flex-wrap">

          {!editing ? (

            <button
              onClick={() => setEditing(true)}
              className="bg-orange-400 hover:bg-orange-500 px-10 py-4 rounded-full text-black font-semibold text-lg"
            >
              Edit Profile
            </button>

          ) : (

            <button
              onClick={saveProfile}
              className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full text-black font-semibold text-lg"
            >
              Save Profile
            </button>

          )}

        </div>

      </div>

    </div>

  );

}

/* SUBSCRIBE PAGE */
function SubscribePage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-xl w-full">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-orange-300 hover:text-orange-400 text-lg"
        >
          ← Back
        </button>

        <h1 className="text-5xl font-bold text-orange-300 mb-8">
          Become a Subscriber
        </h1>

        <p className="text-gray-300 mb-10 text-lg">
          Unlock unlimited reservations,
          premium seating, and exclusive experiences.
        </p>

        <button className="w-full bg-orange-400 hover:bg-orange-500 px-10 py-5 rounded-full text-black font-semibold text-lg">
          Subscribe Now
        </button>

      </div>

    </div>

  );

}

/* DASHBOARD */
function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {

    alert("You have been logged out.");

    navigate("/login");

  };

  const categories = [

    {
      title: "Family Dinner",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Friends Hangout",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Meet New People",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-zinc-900 sticky top-0 z-50 flex-wrap gap-4">

        <Link
          to="/dashboard"
          className="text-3xl font-bold text-orange-300"
        >
          The Gatherly
        </Link>

        <div className="flex gap-6 items-center flex-wrap">

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/subscribe">
            Subscribe
          </Link>

          <button
            onClick={logout}
            className="hover:text-orange-300"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <div className="bg-zinc-900 rounded-3xl max-w-5xl mx-auto p-10 shadow-2xl">

          <h1 className="text-6xl font-bold mb-8 text-orange-300">
            Welcome to Gatherly
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Curated venues, social experiences,
            premium dining, and authentic connections.
          </p>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-10">

          {categories.map((item, index) => (

            <div
              key={index}
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

                <button
                  className="bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-full text-black font-semibold"
                >
                  Explore
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );

}

/* SIMPLE INFO PAGE */
function InfoPage({ title, content }) {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-10">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-orange-300 hover:text-orange-400 text-lg"
        >
          ← Back
        </button>

        <h1 className="text-5xl font-bold text-orange-300 mb-8">
          {title}
        </h1>

        <p className="text-gray-300 leading-relaxed text-lg">
          {content}
        </p>

      </div>

    </div>

  );

}

/* FOOTER */
function Footer() {

  return (

    <footer className="bg-zinc-950 text-gray-400 px-6 py-16 mt-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>

          <h3 className="text-orange-300 text-2xl font-bold mb-4">
            The Gatherly
          </h3>

          <p>
            Premium social experiences and curated dining.
          </p>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-4">
            Contact Us
          </h4>

          <p>Phone: +1 234 567 890</p>
          <p>Email: hello@gatherly.com</p>
          <p>California, USA</p>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-4">
            Explore
          </h4>

          <div className="space-y-2 flex flex-col">

            <Link to="/our-story">
              Our Story
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

            <Link to="/faq">
              FAQs
            </Link>

          </div>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-4">
            Socials
          </h4>

          <div className="space-y-2 flex flex-col">

            <a href="https://facebook.com" target="_blank">
              Facebook
            </a>

            <a href="https://instagram.com" target="_blank">
              Instagram
            </a>

            <a href="https://tiktok.com" target="_blank">
              TikTok
            </a>

          </div>

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

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/subscribe" element={<SubscribePage />} />

      <Route
        path="/our-story"
        element={
          <InfoPage
            title="Our Story"
            content="The Gatherly was created to bring people together through curated dining and social experiences."
          />
        }
      />

      <Route
        path="/terms"
        element={
          <InfoPage
            title="Terms & Conditions"
            content="By using The Gatherly, users agree to our reservation and membership policies."
          />
        }
      />

      <Route
        path="/faq"
        element={
          <InfoPage
            title="Frequently Asked Questions"
            content="Find answers about reservations, memberships, payments, and social seating experiences."
          />
        }
      />

    </Routes>

  );

}
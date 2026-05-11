import React from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <nav className="bg-zinc-900 p-6 flex justify-between items-center">

        <h1 className="text-4xl font-bold text-orange-300">
          The Gatherly
        </h1>

        <div className="flex gap-6">

          <button
            onClick={() => navigate("/login")}
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                navigate("/login");

              }

            }}
            className="hover:text-orange-300"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                navigate("/signup");

              }

            }}
            className="hover:text-orange-300"
          >
            Sign Up
          </button>

        </div>

      </nav>

      {/* HERO */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">

        <h1 className="text-6xl md:text-7xl font-bold text-orange-300 mb-8">
          Welcome to The Gatherly
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
          Curated dining experiences,
          premium social spaces,
          meaningful conversations,
          and unforgettable moments.
        </p>

      </div>

    </div>

  );

}

function Login() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black flex justify-center items-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-bold text-orange-300 mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-zinc-800 text-white mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-zinc-800 text-white mb-8"
        />

        <button
          onClick={() => navigate("/dashboard")}
          onKeyDown={(e) => {

            if (e.key === "Enter") {

              navigate("/dashboard");

            }

          }}
          className="w-full bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 rounded-full text-lg"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mt-6">
          No account yet?
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="w-full mt-4 border border-orange-300 text-orange-300 py-3 rounded-full"
        >
          Create Account
        </button>

      </div>

    </div>

  );

}

function Signup() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black flex justify-center items-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-lg shadow-2xl">

        <h1 className="text-4xl font-bold text-orange-300 mb-8 text-center">
          Sign Up
        </h1>

        <div className="grid gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl bg-zinc-800 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-xl bg-zinc-800 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-xl bg-zinc-800 text-white"
          />

          <input
            type="text"
            placeholder="Contact Number"
            className="p-4 rounded-xl bg-zinc-800 text-white"
          />

          <button
            onClick={() => navigate("/dashboard")}
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                navigate("/dashboard");

              }

            }}
            className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 rounded-full text-lg mt-4"
          >
            Create Account
          </button>

        </div>

      </div>

    </div>

  );

}

function Dashboard() {

  const navigate = useNavigate();

  const categories = [

    {
      title: "Family Dinner",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      path: "/family-dinner",
      desc:
        "Premium restaurants and cozy spaces for unforgettable family bonding.",
    },

    {
      title: "Friends Hangout",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      path: "/friends-hangout",
      desc:
        "Reconnect with old friends through cafés and lounges.",
    },

    {
      title: "Meet New People",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      path: "/social-seating",
      desc:
        "Meet strangers naturally through curated social tables.",
    },

  ];

  const handleKey = (e, path) => {

    if (e.key === "Enter") {

      navigate(path);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="bg-zinc-900 p-6 flex justify-between items-center flex-wrap gap-4">

        <Link
          to="/dashboard"
          className="text-4xl font-bold text-orange-300"
        >
          The Gatherly
        </Link>

        <div className="flex gap-6 flex-wrap items-center">

          <Link to="/profile" className="hover:text-orange-300">
            Profile
          </Link>

          <Link to="/subscribe" className="hover:text-orange-300">
            Subscribe
          </Link>

          <button
            onClick={() => {

              alert("Logged out successfully.");

              navigate("/login");

            }}
            className="hover:text-orange-300"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <h1 className="text-6xl md:text-7xl font-bold text-orange-300 mb-8">
          Welcome to The Gatherly
        </h1>

        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Discover curated venues,
          unforgettable experiences,
          and meaningful connections.
        </p>

      </section>

      {/* CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-10">

          {categories.map((item, index) => (

            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => navigate(item.path)}
              onKeyDown={(e) => handleKey(e, item.path)}
              className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition shadow-2xl"
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

                <p className="text-gray-300 mb-8">
                  {item.desc}
                </p>

                <button
                  className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-3 rounded-full font-bold"
                >
                  Explore
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>

  );

}

function PlaceholderPage({ title }) {

  return (

    <div className="min-h-screen bg-black text-white flex justify-center items-center">

      <h1 className="text-5xl font-bold text-orange-300">
        {title}
      </h1>

    </div>

  );

}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/family-dinner"
          element={<PlaceholderPage title="Family Dinner Venues" />}
        />

        <Route
          path="/friends-hangout"
          element={<PlaceholderPage title="Friends Hangout Venues" />}
        />

        <Route
          path="/social-seating"
          element={<PlaceholderPage title="Meet New People" />}
        />

        <Route
          path="/profile"
          element={<PlaceholderPage title="My Profile" />}
        />

        <Route
          path="/subscribe"
          element={<PlaceholderPage title="Subscription Plans" />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
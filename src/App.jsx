import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      title: "Family Dinner",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Reserve warm and cozy venues for family dinners and celebrations.",
      path: "/family-dinner",
    },

    {
      title: "Friends Hangout",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Reconnect with old friends and enjoy relaxing café experiences.",
      path: "/friends-hangout",
    },

    {
      title: "Meet New People",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Join curated social tables and meet strangers naturally.",
      path: "/social-seating",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      <nav className="flex justify-between items-center p-6 bg-zinc-900">

        <Link to="/" className="text-3xl font-bold text-orange-300">
          The Gatherly
        </Link>

        <div className="flex gap-6">
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      <section className="text-center py-24 px-6">

        <div className="bg-zinc-900 rounded-3xl max-w-5xl mx-auto p-10 shadow-2xl">

          <h1 className="text-6xl font-bold mb-8 text-orange-300">
            Meet. Dine. Connect.
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover curated venues where families bond, friends reconnect,
            and strangers become meaningful connections.
          </p>

        </div>

      </section>

      <section
        id="categories"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          Explore Experiences
        </h2>

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

                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-8 w-full bg-orange-400 hover:bg-orange-500 py-4 rounded-full">
                  View Venues
                </button>

              </div>

            </Link>

          ))}

        </div>

      </section>

      <section
        id="contact"
        className="text-center py-20"
      >

        <a href="mailto:eventsbyluna@gmail.com">

          <button className="bg-orange-400 hover:bg-orange-500 px-10 py-5 rounded-full text-lg">
            Reserve Through Email
          </button>

        </a>

      </section>

    </div>
  );
}

function VenuePage({ title }) {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <Link
        to="/"
        className="bg-orange-400 px-6 py-3 rounded-full inline-block mb-10"
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
                Curated social dining experience.
              </p>

              <button className="w-full bg-orange-400 hover:bg-orange-500 py-4 rounded-full">
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

      <Route path="/" element={<Home />} />

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
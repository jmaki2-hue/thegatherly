
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Events() {
  const [selectedCategory, setSelectedCategory] =
    useState("Meet New People");

  const categories = [
    {
      title: "Meet New People",
      emoji: "💛",
      description: "Connect with new friends in your area.",
    },
    {
      title: "Coffee Meetups",
      emoji: "☕",
      description: "Casual coffee conversations and connections.",
    },
    {
      title: "Women's Night",
      emoji: "✨",
      description: "Fun nights out and community experiences.",
    },
    {
      title: "Mom Night",
      emoji: "👩‍👧",
      description: "Meet other parents and share experiences.",
    },
    {
      title: "Themed Events",
      emoji: "🎉",
      description: "Unique experiences and special gatherings.",
    },
  ];

  const events = {
    "Meet New People": [
      {
        title: "New Friends Mixer",
        date: "Saturday • 1:00 PM",
        location: "Metro Manila - Makati",
      },
      {
        title: "Community Connection Night",
        date: "Friday • 7:00 PM",
        location: "Metro Manila - Taguig",
      },
    ],

    "Coffee Meetups": [
      {
        title: "Weekend Coffee Meetup",
        date: "Saturday • 10:00 AM",
        location: "Cavite - Dasmarinas",
      },
      {
        title: "Morning Brew & Chat",
        date: "Sunday • 9:00 AM",
        location: "Cavite - Imus",
      },
    ],

    "Women's Night": [
      {
        title: "Ladies Night Out",
        date: "Friday • 8:00 PM",
        location: "Metro Manila - Taguig",
      },
    ],

    "Mom Night": [
      {
        title: "Moms Social Meetup",
        date: "Thursday • 6:30 PM",
        location: "Cavite - Bacoor",
      },
    ],

    "Themed Events": [
      {
        title: "Wine & Paint Night",
        date: "Saturday • 7:00 PM",
        location: "Metro Manila - Makati",
      },
      {
        title: "Holiday Celebration",
        date: "Friday • 7:00 PM",
        location: "Cebu - Cebu City",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">
      <Navbar />

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-5xl font-bold text-[#24324a]">
            Gatherly Events
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Discover curated experiences and meaningful
            connections in your community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-[#24324a] text-white rounded-[32px] p-8 mb-10">
          <h2 className="text-3xl font-bold">
            The Gatherly Premium ✨
          </h2>

          <p className="mt-3 opacity-90">
            Unlock exclusive events, priority reservations,
            and bonus booking tickets.
          </p>

          <Link
            to="/subscription"
            className="inline-block mt-6 bg-[#f5b54a] text-[#24324a] px-6 py-3 rounded-2xl font-bold"
          >
            View Membership
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`p-6 rounded-[32px] text-left transition-all shadow-lg hover:scale-[1.02] ${
                selectedCategory === category.title
                  ? "bg-[#24324a] text-white"
                  : "bg-white text-[#24324a]"
              }`}
            >
              <div className="text-5xl">
                {category.emoji}
              </div>

              <h2 className="text-2xl font-bold mt-4">
                {category.title}
              </h2>

              <p className="mt-3 opacity-80">
                {category.description}
              </p>
            </button>
          ))}

        </div>

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-[#24324a] mb-8">
            {selectedCategory}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {events[selectedCategory].map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-[32px] shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold text-[#24324a]">
                  {event.title}
                </h3>

                <div className="mt-4 space-y-2 text-gray-500">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>

                <Link
                  to="/event-details"
                  className="inline-block mt-6 bg-[#f5b54a] text-[#24324a] px-6 py-3 rounded-2xl font-bold hover:opacity-90 transition"
                >
                  Reserve Spot
                </Link>
              </div>
            ))}

          </div>

        </div>

      </div>

      <Footer />
     
    </div>
  );
}
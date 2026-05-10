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
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/65 -z-10"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 px-6 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold hover:text-orange-300 transition"
        >
          Gatherly
        </Link>

        <div className="flex gap-5 text-sm md:text-base">

          <a href="#categories" className="hover:text-orange-300 transition">
            Categories
          </a>

          <a href="#contact" className="hover:text-orange-300 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl max-w-5xl mx-auto p-10 md:p-20 border border-white/10 shadow-2xl>

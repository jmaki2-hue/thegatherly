import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { auth, db } from "../firebase/firebase";

import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  const [nextReservation, setNextReservation] =
  useState(null);

  const [themedEventImage, setThemedEventImage] =
    useState("");

  const defaultImage =
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      const userRef = doc(
        db,
        "users",
        user.uid
      );

      const userSnap =
        await getDoc(userRef);

      if (userSnap.exists()) {
        setProfile(userSnap.data());
      }

      const settingsRef = doc(
        db,
        "appSettings",
        "themedEventSettings"
      );

      const settingsSnap =
  await getDoc(settingsRef);

if (settingsSnap.exists()) {
  setThemedEventImage(
    settingsSnap.data().imageUrl || ""
  );
}

// ===========================
// LOAD NEXT RESERVATION
// ===========================

const reservationsQuery = query(
  collection(db, "reservations"),
  where("userId", "==", user.uid),
  where("status", "==", "active")
);

const reservationsSnap =
  await getDocs(reservationsQuery);

if (!reservationsSnap.empty) {

  const reservations =
    reservationsSnap.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      .sort((a, b) => {

        const dateA = new Date(
          `${a.eventDate} ${a.eventTime}`
        );

        const dateB = new Date(
          `${b.eventDate} ${b.eventTime}`
        );

        return dateA - dateB;

      });

  setNextReservation(
    reservations[0]
  );

}
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    {
      title: "Themed Event 🎉",
      image: themedEventImage,
    },
    {
      title: "Meet New People 💛",
    },
    {
      title: "Coffee Meetups ☕",
    },
    ...(profile?.gender === "Female"
      ? [
          {
            title: "Women's Night ✨",
          },
          {
            title: "Mom Night 👩‍👧",
          },
        ]
      : []),
  ];

  const hour = new Date().getHours();

let greeting = "Good Evening";

if (hour < 12) {

  greeting = "Good Morning";

}

else if (hour < 18) {

  greeting = "Good Afternoon";

}


  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">

      <Navbar />

      {/* Header */}

<div className="bg-gradient-to-r from-[#24324a] to-[#235e67]">

  <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col lg:flex-row items-center justify-between">

    <div>

      <p className="text-[#f5b54a] font-semibold tracking-widest uppercase">
        Shift Enders
      </p>

      <h1 className="text-5xl font-black text-white mt-3 leading-tight">

        {greeting},

<br />

{profile?.name?.split(" ")[0] || "Shifter"} 👋

      </h1>

      <p className="text-white/80 text-xl mt-6 max-w-xl">

        Your next great conversation,
        friendship, and experience
        starts here.

      </p>

      <div className="mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-full">

  <span className="text-[#f5b54a]">

    ⭐

  </span>

  <span className="text-white font-semibold">

    {profile?.subscriptionStatus === "active"

      ? "Premium Member"

      : "Free Member"}

  </span>

</div>

      <Link
        to="/events"
        className="inline-block mt-8 bg-[#f5b54a] text-[#24324a] font-bold px-8 py-4 rounded-2xl hover:scale-105 transition"
      >
        Explore Experiences
      </Link>

    </div>

    <Link
      to="/profile"
      className="mt-10 lg:mt-0"
    >

      <img
        src={
          profile?.profileImage ||
          defaultImage
        }
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-[#f5b54a] object-cover shadow-2xl"
      />

    </Link>

  </div>

</div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Membership */}

<div className="bg-white rounded-[32px] shadow-xl p-10 mb-12 border border-[#ececec]">

  <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

    <div>

      <p className="uppercase tracking-[0.25em] text-[#235e67] font-bold">

        Membership

      </p>

      <h2 className="text-4xl font-black text-[#24324a] mt-3">

        {profile?.subscriptionStatus === "active"
          ? "Shift Enders Premium"
          : "Free Member"}

      </h2>

      <p className="text-gray-500 text-lg mt-4 max-w-xl">

        {profile?.subscriptionStatus === "active"
          ? "Enjoy unlimited reservations, exclusive member experiences, and priority access to every Shift Enders event."
          : "Upgrade to Premium and unlock unlimited reservations, exclusive themed nights, and priority booking."}

      </p>

    </div>

    <Link
      to="/subscription"
      className="bg-[#f5b54a] hover:bg-[#efaa2f] text-[#24324a] font-bold px-8 py-4 rounded-2xl transition"
    >

      {profile?.subscriptionStatus === "active"
        ? "Manage Membership"
        : "Upgrade Now"}

    </Link>

  </div>

</div>

        {/* Member Hub */}

<div className="mb-14">

  <div className="flex items-center justify-between mb-8">

    <div>

      <p className="uppercase tracking-[0.25em] text-[#235e67] font-bold">

        Member Hub

      </p>

      <h2 className="text-4xl font-black text-[#24324a] mt-2">

        Everything You Need

      </h2>

    </div>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

    <Link
      to="/events"
      className="group bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
    >

      <div className="text-5xl mb-5">
        🎉
      </div>

      <h3 className="text-2xl font-bold text-[#24324a]">

        Explore Experiences

      </h3>

      <p className="text-gray-500 mt-3 leading-7">

        Browse curated Shift Enders experiences happening near you.

      </p>

    </Link>

    <Link
      to="/my-reservations"
      className="group bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
    >

      <div className="text-5xl mb-5">
        🎟️
      </div>

      <h3 className="text-2xl font-bold text-[#24324a]">

        My Reservations

      </h3>

      <p className="text-gray-500 mt-3 leading-7">

        View upcoming experiences and manage your bookings.

      </p>

    </Link>

    <Link
      to="/profile"
      className="group bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
    >

      <div className="text-5xl mb-5">
        👤
      </div>

      <h3 className="text-2xl font-bold text-[#24324a]">

        My Profile

      </h3>

      <p className="text-gray-500 mt-3 leading-7">

        Update your profile, preferences, and personal information.

      </p>

    </Link>

    <Link
      to="/subscription"
      className="group bg-gradient-to-br from-[#235e67] to-[#24324a] rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition text-white"
    >

      <div className="text-5xl mb-5">
        ⭐
      </div>

      <h3 className="text-2xl font-bold">

        Membership

      </h3>

      <p className="text-white/80 mt-3 leading-7">

        Upgrade, renew, or manage your Shift Enders membership.

      </p>

    </Link>

  </div>

</div>

        {/* Discover Experiences */}

<div className="mb-16">

  <div className="flex justify-between items-end mb-8">

    <div>

      <p className="uppercase tracking-[0.25em] text-[#235e67] font-bold">

        Discover

      </p>

      <h2 className="text-4xl font-black text-[#24324a] mt-2">

        Find Your Next Experience

      </h2>

      <p className="text-gray-500 mt-3 text-lg">

        Every event is designed to help you connect,
        unwind, and build meaningful friendships.

      </p>

    </div>

    <Link
      to="/events"
      className="text-[#235e67] font-bold hover:text-[#f5b54a]"
    >

      View All →

    </Link>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    {categories.map((category) => (

      <Link
        key={category.title}
        to="/events"
        className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
      >

        {category.image ? (

          <img
            src={category.image}
            alt={category.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
          />

        ) : (

          <div className="h-56 bg-gradient-to-br from-[#235e67] via-[#2d6d77] to-[#24324a] flex items-center justify-center">

            <span className="text-6xl">

              {category.title.includes("Coffee")
                ? "☕"
                : category.title.includes("Meet")
                ? "💛"
                : category.title.includes("Women's")
                ? "✨"
                : category.title.includes("Mom")
                ? "👩"
                : "🎉"}

            </span>

          </div>

        )}

        <div className="p-8">

          <h3 className="text-2xl font-bold text-[#24324a]">

            {category.title}

          </h3>

          <p className="text-gray-500 mt-4 leading-7">

            Discover curated after-work experiences,
            meet amazing people,
            and create lasting memories.

          </p>

          <div className="mt-6 font-bold text-[#235e67] group-hover:text-[#f5b54a]">

            Explore →

          </div>

        </div>

      </Link>

    ))}

  </div>

</div>

        

        {/* Your Next Experience */}

<div className="mb-16">

  <p className="uppercase tracking-[0.25em] text-[#235e67] font-bold">

    Upcoming

  </p>

  <h2 className="text-4xl font-black text-[#24324a] mt-2 mb-8">

    Your Next Experience

  </h2>

  {nextReservation ? (

    <div className="bg-gradient-to-r from-[#24324a] to-[#235e67] rounded-[32px] p-10 text-white shadow-2xl">

      <div className="grid lg:grid-cols-2 gap-10">

        <div>

          <p className="text-[#f5b54a] uppercase tracking-widest font-bold">

            Reserved

          </p>

          <h3 className="text-4xl font-black mt-4">

            {nextReservation.category}

          </h3>

          <p className="mt-8 text-xl">

            📅 {nextReservation.eventDate}

          </p>

          <p className="mt-3 text-xl">

            🕒 {nextReservation.eventTime}

          </p>

          <p className="mt-3 text-xl">

            📍 {nextReservation.venueName}

          </p>

        </div>

        <div className="flex items-end lg:justify-end">

          <Link
            to="/my-reservations"
            className="bg-[#f5b54a] text-[#24324a] font-bold px-8 py-4 rounded-2xl hover:bg-white transition"
          >

            View Reservation

          </Link>

        </div>

      </div>

    </div>

  ) : (

    <div className="bg-white rounded-[32px] shadow-lg p-12 text-center">

      <h3 className="text-3xl font-bold text-[#24324a]">

        No Upcoming Experiences

      </h3>

      <p className="text-gray-500 mt-4 text-lg">

        Discover curated experiences and reserve your next Shift Enders event.

      </p>

      <Link
        to="/events"
        className="inline-block mt-8 bg-[#235e67] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1d4f57]"
      >

        Browse Experiences

      </Link>

    </div>

  )}

</div>

      </div>

      <Footer />

    </div>
  );
}
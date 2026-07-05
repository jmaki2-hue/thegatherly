
import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

export default function Events() {
  const [selectedCategory, setSelectedCategory] =
  useState("Meet People");

const [events, setEvents] =
  useState([]);

const [loading, setLoading] =
  useState(true);

const [profile, setProfile] =
  useState(null);

  const categories = [

  {
    title: "Themed Event",
    emoji: "🎉",
    description:
      "Special curated experiences hosted by Shift Enders.",
  },

  {
    title: "Meet People",
    emoji: "💛",
    description:
      "Connect with new friends after work.",
  },

  {
    title: "Coffee Meetups",
    emoji: "☕",
    description:
      "Relaxed conversations over coffee.",
  },

  {
    title: "Women's Night",
    emoji: "✨",
    description:
      "Exclusive evenings for women.",
  },

  {
    title: "Mom Night",
    emoji: "👩‍👧",
    description:
      "Meet fellow moms and build friendships.",
  },

];

  useEffect(() => {

  loadEvents();

}, []);

const loadEvents = async () => {

  try {

    const user = auth.currentUser;

    if (!user) return;

    const userSnap = await getDocs(
      query(
        collection(db, "users"),
        where("__name__", "==", user.uid)
      )
    );

    if (userSnap.empty) return;

    const userData =
      userSnap.docs[0].data();

    setProfile(userData);

    const eventsQuery = query(
      collection(db, "scheduledEvents"),
      where("active", "==", true),
      where("location", "==", userData.location)
    );

    const eventSnap =
      await getDocs(eventsQuery);

    setEvents(

      eventSnap.docs.map(doc => ({

        id: doc.id,

        ...doc.data(),

      }))

    );

  }

  catch (err) {

    console.log(err);

  }

  finally {

    setLoading(false);

  }

};

if (loading) {

  return (

    <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center">

      <div className="text-center">

        <div className="text-6xl mb-6">
          ☕
        </div>

        <h2 className="text-3xl font-bold text-[#24324a]">

          Loading Experiences...

        </h2>

      </div>

    </div>

  );

}

  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">
      <Navbar />

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-5xl font-bold text-[#24324a]">
            Shift Enders Experiences
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Reserve curated after-work experiences designed
to help you meet people and build friendships.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-[#24324a] text-white rounded-[32px] p-8 mb-10">
          <h2 className="text-3xl font-bold">
            Shift Enders Membership ✨
          </h2>

          <p className="mt-3 opacity-90">
            Enjoy priority booking, exclusive themed events,
and premium member experiences.
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

  {events.filter(
    event =>
      event.category === selectedCategory
  ).length === 0 ? (

    <div className="md:col-span-2 bg-white rounded-[32px] shadow-lg p-14 text-center">

      <div className="text-6xl mb-6">
        ☕
      </div>

      <h2 className="text-3xl font-bold text-[#24324a]">
        No Experiences Found
      </h2>

      <p className="mt-4 text-gray-500">
        There aren't any experiences in this category for your location yet.
      </p>

    </div>

  ) : (

    events

      .filter(
        event =>
          event.category === selectedCategory
      )

      .map((event) => (

        <div
          key={event.id}
          className="bg-white rounded-[32px] shadow-lg p-6"
        >

          <h3 className="text-2xl font-bold text-[#24324a]">
            {event.venueName}
          </h3>

          <div className="mt-5 space-y-3 text-gray-600">

            <p>📅 {event.eventDate}</p>

            <p>🕒 {event.eventTime}</p>

            <p>📍 {event.location}</p>

            <p className="font-semibold text-[#235e67]">

              👥 {event.currentParticipants || 0}
              /
              {event.maxParticipants || 0}
              Joined

            </p>

          </div>

          {(event.currentParticipants || 0) >=
          (event.maxParticipants || 0) ? (

            <button
              disabled
              className="mt-6 w-full bg-gray-300 text-gray-600 py-3 rounded-2xl font-bold cursor-not-allowed"
            >

              Event Full

            </button>

          ) : (

            <Link
              to={`/event/${event.id}`}
              className="block mt-6 bg-[#f5b54a] text-center text-[#24324a] py-3 rounded-2xl font-bold hover:bg-[#efaa2f] transition"
            >

              Reserve Spot

            </Link>

          )}

        </div>

      ))

  )}

</div>

        </div>

      </div>

      <Footer />
     
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyReservations() {
  const upcomingReservations = [
    {
      id: 1,
      title: "Weekend Coffee Meetup ☕",
      date: "Saturday • 10:00 AM",
      location: "Cavite - Dasmarinas",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "New Friends Mixer 💛",
      date: "Sunday • 1:00 PM",
      location: "Metro Manila - Makati",
      status: "Confirmed",
    },
  ];

  const pastReservations = [
    {
      id: 3,
      title: "Wine & Paint Night 🎨",
      date: "July 14, 2025",
      location: "Metro Manila - Taguig",
      status: "Attended",
    },
    {
      id: 4,
      title: "Community Brunch 🍽️",
      date: "June 22, 2025",
      location: "Cebu City",
      status: "Attended",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#24324a]">
            My Reservations
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage your upcoming Gatherly experiences and review past events.
          </p>

        </div>

        {/* Membership Info */}

        <div className="bg-[#24324a] text-white rounded-[32px] p-8 mb-10">

          <h2 className="text-3xl font-bold">
            Premium Membership ✨
          </h2>

          <p className="mt-3 opacity-90">
            You currently have 5 bonus reservation tickets available.
          </p>

          <Link
            to="/subscription"
            className="inline-block mt-6 bg-[#f5b54a] text-[#24324a] px-6 py-3 rounded-2xl font-bold"
          >
            Manage Membership
          </Link>

        </div>

        {/* Upcoming Reservations */}

        <section className="mb-14">

          <h2 className="text-3xl font-bold text-[#24324a] mb-6">
            Upcoming Reservations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {upcomingReservations.map((reservation) => (
              <div
                key={reservation.id}
                className="bg-white rounded-[32px] shadow-lg p-6"
              >

                <div className="flex justify-between items-start">

                  <h3 className="text-2xl font-bold text-[#24324a]">
                    {reservation.title}
                  </h3>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {reservation.status}
                  </span>

                </div>

                <p className="text-gray-500 mt-4">
                  📅 {reservation.date}
                </p>

                <p className="text-gray-500 mt-2">
                  📍 {reservation.location}
                </p>

                <div className="flex gap-3 mt-6">

                  <Link
                    to="/event-details"
                    className="bg-[#24324a] text-white px-5 py-3 rounded-2xl font-semibold"
                  >
                    View Event
                  </Link>

                  <button
                    className="bg-red-100 text-red-600 px-5 py-3 rounded-2xl font-semibold"
                  >
                    Cancel
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Past Events */}

        <section>

          <h2 className="text-3xl font-bold text-[#24324a] mb-6">
            Past Events
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {pastReservations.map((reservation) => (
              <div
                key={reservation.id}
                className="bg-white rounded-[32px] shadow-lg p-6"
              >

                <div className="flex justify-between items-start">

                  <h3 className="text-2xl font-bold text-[#24324a]">
                    {reservation.title}
                  </h3>

                  <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {reservation.status}
                  </span>

                </div>

                <p className="text-gray-500 mt-4">
                  📅 {reservation.date}
                </p>

                <p className="text-gray-500 mt-2">
                  📍 {reservation.location}
                </p>

              </div>
            ))}

          </div>

        </section>

      </div>

      <Footer />
    

    </div>
  );
}
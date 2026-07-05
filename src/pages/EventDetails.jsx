import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EventDetails() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Hero */}

        <div className="bg-white rounded-[40px] shadow-lg overflow-hidden">

          <div className="h-80 bg-[#24324a] flex items-center justify-center">

            <span className="text-8xl">
              ☕
            </span>

          </div>

          <div className="p-8">

            <div className="flex flex-wrap gap-3 mb-4">

              <span className="bg-[#f5b54a]/20 text-[#24324a] px-4 py-2 rounded-full font-semibold">
                Coffee Meetup
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                Open for Reservations
              </span>

            </div>

            <h1 className="text-5xl font-bold text-[#24324a]">
              Weekend Coffee Meetup
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Meet new people in a relaxed setting over coffee and
              conversation. Perfect for building friendships and
              meaningful connections.
            </p>

          </div>

        </div>

        {/* Event Information */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left Side */}

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-[32px] shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#24324a] mb-6">
                Event Details
              </h2>

              <div className="space-y-4 text-gray-600">

                <p>
                  📅 Saturday, August 23, 2026
                </p>

                <p>
                  🕙 10:00 AM
                </p>

                <p>
                  📍 Cavite - Dasmarinas
                </p>

                <p>
                  👥 12 Spots Available
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#24324a] mb-6">
                About This Event
              </h2>

              <p className="text-gray-600 leading-relaxed">
                The Gatherly Coffee Meetups are designed to help members
                build genuine friendships through casual conversation.
                Small group sizes create a comfortable atmosphere where
                everyone has the opportunity to connect.
              </p>

            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#24324a] mb-6">
                What To Expect
              </h2>

              <ul className="space-y-3 text-gray-600">

                <li>☕ Hosted coffee gathering</li>

                <li>💛 Small group introductions</li>

                <li>🤝 Guided conversation starters</li>

                <li>✨ Opportunity to meet new people</li>

              </ul>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="bg-white rounded-[32px] shadow-lg p-8 sticky top-24">

              <h2 className="text-2xl font-bold text-[#24324a]">
                Reserve Your Spot
              </h2>

              <p className="text-gray-500 mt-3">
                Secure your place before reservations close.
              </p>

              <button
                className="w-full mt-8 h-14 bg-[#f5b54a] text-[#24324a] rounded-2xl font-bold text-lg"
              >
                Reserve Spot
              </button>

              <Link
                to="/events"
                className="block text-center mt-4 text-[#24324a] font-semibold"
              >
                Back to Events
              </Link>

            </div>

          </div>

        </div>

        {/* Related Events */}

        <div className="mt-14">

          <h2 className="text-3xl font-bold text-[#24324a] mb-8">
            You May Also Like
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-[32px] shadow-lg p-6">
              <h3 className="font-bold text-xl text-[#24324a]">
                New Friends Mixer 💛
              </h3>

              <p className="text-gray-500 mt-3">
                Sunday • 1:00 PM
              </p>
            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-6">
              <h3 className="font-bold text-xl text-[#24324a]">
                Women's Night ✨
              </h3>

              <p className="text-gray-500 mt-3">
                Friday • 7:00 PM
              </p>
            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-6">
              <h3 className="font-bold text-xl text-[#24324a]">
                Wine & Paint Night 🎨
              </h3>

              <p className="text-gray-500 mt-3">
                Saturday • 6:00 PM
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}
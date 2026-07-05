import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#fdfaf6] min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto">

        <div className="absolute top-10 right-0 w-72 h-72 bg-[#f5b54a]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24324a]/10 rounded-full blur-3xl"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <div>

            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow">
              Meet New People Near You
            </span>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-[#24324a]">
              Find your people.
              <br />
              Build real
              <span className="text-[#f5b54a]"> connections.</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-xl">
              The Shift Enders helps people create genuine connections through
              curated local events, shared experiences, and welcoming
              communities where friendships can naturally grow.
            </p>

            {/* Hero Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/signup"
                className="bg-[#24324a] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:opacity-95"
              >
                Get Started
              </Link>

              <Link
                to="/events"
                className="bg-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl"
              >
                Browse Events
              </Link>

              <Link
                to="/subscription"
                className="bg-[#f5b54a] px-8 py-4 rounded-full font-semibold text-[#24324a] shadow-lg hover:opacity-90"
              >
                Membership
              </Link>

            </div>

          </div>

          {/* Featured Events */}

          <div className="relative">

            <div className="bg-white rounded-[40px] shadow-2xl p-8">

              <div className="space-y-6">

                <Link
                  to="/events"
                  className="block bg-[#fdfaf6] rounded-3xl p-5 shadow hover:shadow-xl transition"
                >
                  <h3 className="font-bold text-[#24324a] text-xl">
                    Coffee Meetup ☕
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Saturday • 10:00 AM
                  </p>
                </Link>

                <Link
                  to="/events"
                  className="block bg-[#fdfaf6] rounded-3xl p-5 shadow hover:shadow-xl transition"
                >
                  <h3 className="font-bold text-[#24324a] text-xl">
                    Women's Night ✨
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Thursday • 7:00 PM
                  </p>
                </Link>

                <Link
                  to="/events"
                  className="block bg-[#fdfaf6] rounded-3xl p-5 shadow hover:shadow-xl transition"
                >
                  <h3 className="font-bold text-[#24324a] text-xl">
                    Dinner with Strangers 💛
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Wednesday • 1:00 PM
                  </p>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        id="how"
        className="max-w-6xl mx-auto px-8 py-24"
      >

        <h2 className="text-5xl font-bold text-center text-[#24324a]">
          How The Shift Enders Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <div className="text-5xl">👤</div>

            <h3 className="font-bold text-2xl mt-4">
              Create Your Profile
            </h3>

            <p className="text-gray-600 mt-3">
              Tell us about yourself and your interests.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <div className="text-5xl">🎉</div>

            <h3 className="font-bold text-2xl mt-4">
              Join Events
            </h3>

            <p className="text-gray-600 mt-3">
              Browse curated local experiences and gatherings.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <div className="text-5xl">💛</div>

            <h3 className="font-bold text-2xl mt-4">
              Build Friendships
            </h3>

            <p className="text-gray-600 mt-3">
              Meet like-minded people and create lasting connections.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-8 pb-32">

        <div className="max-w-5xl mx-auto bg-[#24324a] rounded-[40px] p-16 text-center text-white">

          <h2 className="text-5xl font-bold">
            Ready to find your community?
          </h2>

          <p className="mt-6 text-xl opacity-90">
            Join The Shift Enders today and start building meaningful connections.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-10 bg-[#f5b54a] px-10 py-4 rounded-full font-bold text-[#24324a]"
          >
            Join Shift Enders
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}
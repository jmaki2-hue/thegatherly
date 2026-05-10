import React from "react";
//(New concept: Social dining + friendship venue discovery platform inspired by modern café/lounge atmosphere)//

function App() {

  const venues = [

    {
      id: "family",
      title: "Family Dinner Lounge",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Perfect for family dinners, birthdays, reunions, and cozy bonding moments with loved ones.",
      vibe: "Warm • Relaxing • Family-Friendly",
      seats: "12 seats available",
      link: "#contact",
    },

    {
      id: "friends",
      title: "Friends Hangout Café",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Reconnect with old friends, classmates, coworkers, or barkada in a relaxing modern café atmosphere.",
      vibe: "Chill • Cozy • Social",
      seats: "8 seats available",
      link: "#contact",
    },

    {
      id: "strangers",
      title: "Meet New People Lounge",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Meet new people and build meaningful connections through curated social seating experiences.",
      vibe: "Friendly • Open • Interactive",
      seats: "5 seats available",
      link: "#contact",
    },

    {
      id: "river",
      title: "Riverside Chill Spot",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Enjoy peaceful dining beside calming river-inspired scenery and relaxing ambient lighting.",
      vibe: "Nature • Calm • Scenic",
      seats: "10 seats available",
      link: "#contact",
    },

    {
      id: "music",
      title: "Acoustic Nights Venue",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Live acoustic music nights for people who enjoy food, conversations, and relaxing entertainment.",
      vibe: "Music • Romantic • Social",
      seats: "15 seats available",
      link: "#contact",
    },

    {
      id: "gaming",
      title: "Board Games & Coffee",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Interactive social tables featuring board games, card games, and icebreaker activities.",
      vibe: "Fun • Interactive • Casual",
      seats: "6 seats available",
      link: "#contact",
    },

  ];

  return (

    <div
      id="top"
      className="relative min-h-screen overflow-x-hidden text-white"
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* FLOATING LIGHTS */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">

        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              borderRadius: "999px",
              background: "rgba(255,255,255,0.2)",
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          ></div>
        ))}

      </div>

      {/* NAVBAR */}
      <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 px-5 md:px-10 py-5 flex justify-between items-center sticky top-0 z-50">

        <a
          href="#top"
          className="text-2xl md:text-3xl font-bold hover:text-orange-300 transition"
        >
          Luna Socials
        </a>

        <div className="flex gap-4 md:gap-8 text-sm md:text-base">

          <a href="#venues" className="hover:text-orange-300 transition">
            Venues
          </a>

          <a href="#experiences" className="hover:text-orange-300 transition">
            Experiences
          </a>

          <a href="#contact" className="hover:text-orange-300 transition">
            Book
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="relative text-center py-24 md:py-36 px-6">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl max-w-6xl mx-auto p-10 md:p-20 border border-white/10 shadow-2xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

            Meet. Dine. Connect.

          </h1>

          <p className="text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">

            Discover curated venues where families bond, friends reconnect,
            and strangers become new friends through unforgettable dining
            experiences.

          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 mt-12">

            <a href="#venues">

              <button className="bg-orange-400 hover:bg-orange-500 text-white px-10 py-4 rounded-full text-lg transition hover:scale-105 shadow-xl">
                Explore Venues
              </button>

            </a>

            <a href="#contact">

              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg transition">
                Reserve a Spot
              </button>

            </a>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="experiences"
        className="relative py-16 px-6 max-w-7xl mx-auto"
      >

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">

            <h3 className="text-2xl font-bold mb-4">
              🍽 Curated Dining
            </h3>

            <p className="text-gray-200 leading-relaxed">
              Select from premium dining venues tailored for family bonding,
              date nights, barkada reunions, or social discovery experiences.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">

            <h3 className="text-2xl font-bold mb-4">
              🤝 Social Matching
            </h3>

            <p className="text-gray-200 leading-relaxed">
              Choose whether you'd like a private table, social seating,
              or an opportunity to meet new people with shared interests.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">

            <h3 className="text-2xl font-bold mb-4">
              🎶 Atmosphere Experiences
            </h3>

            <p className="text-gray-200 leading-relaxed">
              Enjoy live acoustic nights, riverside lounges, coffee socials,
              and curated community events every week.
            </p>

          </div>

        </div>

      </section>

      {/* VENUES SECTION */}
      <section
        id="venues"
        className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Venues
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {venues.map((venue, index) => (

            <a
              id={venue.id}
              key={index}
              href={venue.link}
              className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-3"
            >

              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <div className="flex justify-between items-start gap-3">

                  <h3 className="text-2xl font-bold">
                    {venue.title}
                  </h3>

                  <span className="bg-green-400 text-black text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                    {venue.seats}
                  </span>

                </div>

                <p className="text-orange-200 mt-3 text-sm">
                  {venue.vibe}
                </p>

                <p className="text-gray-200 mt-5 leading-relaxed">
                  {venue.desc}
                </p>

                <button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full transition w-full">
                  Reserve This Venue
                </button>

              </div>

            </a>

          ))}

        </div>

      </section>

      {/* SOCIAL EXPERIENCE SECTION */}
      <section className="relative py-20 px-6">

        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Choose Your Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black/20 rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                👨‍👩‍👧 Family Table
              </h3>

              <p className="text-gray-200">
                Reserve private spaces designed for quality time and memorable dinners.
              </p>

            </div>

            <div className="bg-black/20 rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                🧑‍🤝‍🧑 Friends Reunion
              </h3>

              <p className="text-gray-200">
                Cozy social spots perfect for reconnecting with old friends and classmates.
              </p>

            </div>

            <div className="bg-black/20 rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                🌎 Meet New People
              </h3>

              <p className="text-gray-200">
                Opt-in social seating lets guests connect naturally with new people.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-24 px-6 text-center"
      >

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl">

          <h2 className="text-5xl font-bold mb-8">
            Reserve Your Spot
          </h2>

          <p className="text-xl text-gray-200 mb-12">
            Limited social seats are available every night. Reserve your table today.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">

            <a
              href="mailto:eventsbyluna@gmail.com"
            >

              <button className="bg-orange-400 hover:bg-orange-500 px-10 py-5 rounded-full text-lg shadow-xl transition hover:scale-105">
                Book Through Email
              </button>

            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61554403796437&mibextid=wwXIfr&rdid=ijyLTLQ1rcBEcv7C#"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-10 py-5 rounded-full text-lg transition">
                Message on Facebook
              </button>

            </a>

          </div>

          <div className="mt-16 text-gray-200 space-y-4 text-lg">

            <p>📍 Trece Martirez, Cavite</p>

            <p>📞 +63 936 926 0413</p>

            <p>✉️ eventsbyluna@gmail.com</p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative bg-black/40 backdrop-blur-md border-t border-white/10 py-8 mt-10">

        <div className="text-center text-gray-300 space-y-3 px-4">

          <p>
            © 2026 Luna Socials. All Rights Reserved.
          </p>

          <p>
            Designed for meaningful connections and unforgettable experiences.
          </p>

        </div>

      </footer>

    </div>

  );

}

export default App;
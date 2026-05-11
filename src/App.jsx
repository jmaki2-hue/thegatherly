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
        "Reconnect with old friends through cafés, lounges, and vibrant venues.",
    },

    {
      title: "Meet New People",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      path: "/social-seating",
      desc:
        "Join curated social tables and naturally meet new people.",
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
      <nav className="bg-zinc-900 p-6 flex justify-between items-center flex-wrap gap-4 sticky top-0 z-50 shadow-xl">

        <Link
          to="/dashboard"
          className="text-4xl font-bold text-orange-300"
        >
          The Gatherly
        </Link>

        <div className="flex gap-6 flex-wrap items-center">

          <Link
            to="/profile"
            className="hover:text-orange-300 transition"
          >
            Profile
          </Link>

          <Link
            to="/subscribe"
            className="hover:text-orange-300 transition"
          >
            Subscribe
          </Link>

          <button
            onClick={() => {

              alert("Logged out successfully.");

              navigate("/login");

            }}
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                alert("Logged out successfully.");

                navigate("/login");

              }

            }}
            className="hover:text-orange-300 transition"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <h1 className="text-5xl md:text-7xl font-bold text-orange-300 mb-8">
          Welcome to The Gatherly
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Discover curated venues, unforgettable
          experiences, meaningful connections,
          and premium social dining.
        </p>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Explore Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {categories.map((item, index) => (

            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => navigate(item.path)}
              onKeyDown={(e) => handleKey(e, item.path)}
              className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300 shadow-2xl outline-none focus:ring-4 focus:ring-orange-300"
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

                <p className="text-gray-300 mb-8 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  onClick={() => navigate(item.path)}
                  onKeyDown={(e) => handleKey(e, item.path)}
                  className="bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-full text-black font-semibold text-lg"
                >
                  Explore
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );

}
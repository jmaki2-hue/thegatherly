import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Subscription() {
  const plans = [
    {
      name: "Standard",
      price: "Free",
      description:
        "Access public Gatherly events and community features.",
      features: [
        "Browse Events",
        "Create Profile",
        "Community Access",
      ],
      button: "Current Plan",
      current: true,
    },
    {
      name: "Premium",
      price: "$19.99/month",
      description:
        "Unlock premium experiences and exclusive member benefits.",
      features: [
        "Priority Event Access",
        "Exclusive Experiences",
        "Premium Matchmaking",
        "Bonus Reservation Tickets",
        "VIP Community Access",
      ],
      button: "Upgrade Now",
      current: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">

      <Navbar />

      <div className="py-12 px-4">

        <div className="max-w-6xl mx-auto">

          {/* Hero */}

          <div className="bg-[#24324a] text-white rounded-[40px] p-10 mb-10 text-center">

            <h1 className="text-5xl font-bold">
              The Gatherly Premium ✨
            </h1>

            <p className="text-lg opacity-90 mt-4 max-w-2xl mx-auto">
              Unlock premium events, priority booking,
              bonus tickets, exclusive experiences,
              and enhanced community access.
            </p>

          </div>

          {/* Membership Status */}

          <div className="bg-white rounded-[32px] shadow-lg p-8 mb-10">

            <h2 className="text-2xl font-bold text-[#24324a] mb-6">
              Your Membership
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div>
                <p className="text-gray-500">
                  Membership
                </p>

                <h3 className="text-xl font-bold text-[#24324a]">
                  Premium Membership
                </h3>
              </div>

              <div>
                <p className="text-gray-500">
                  Expiration Date
                </p>

                <h3 className="text-xl font-bold text-[#24324a]">
                  Dec 31, 2026
                </h3>
              </div>

              <div>
                <p className="text-gray-500">
                  Bonus Tickets
                </p>

                <h3 className="text-xl font-bold text-[#24324a]">
                  5
                </h3>
              </div>

            </div>

          </div>

          {/* Plans */}

          <div className="grid lg:grid-cols-2 gap-8">

            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[32px] p-8 shadow-lg ${
                  plan.name === "Premium"
                    ? "bg-[#24324a] text-white"
                    : "bg-white"
                }`}
              >

                <h2 className="text-3xl font-bold">
                  {plan.name}
                </h2>

                <div className="text-4xl font-bold mt-4">
                  {plan.price}
                </div>

                <p className="mt-4 opacity-80">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      ✓ {feature}
                    </li>
                  ))}

                </ul>

                <button
                  className={`w-full mt-10 h-14 rounded-2xl font-bold ${
                    plan.current
                      ? "bg-gray-200 text-gray-600"
                      : "bg-[#f5b54a] text-[#24324a]"
                  }`}
                >
                  {plan.button}
                </button>

              </div>
            ))}

          </div>

          {/* Benefits */}

          <div className="bg-white rounded-[32px] shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold text-[#24324a] mb-8">
              Why Upgrade?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h3 className="font-bold text-xl text-[#24324a]">
                  🎟 Priority Reservations
                </h3>

                <p className="text-gray-500 mt-2">
                  Reserve your spot before standard members.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#24324a]">
                  ✨ Exclusive Experiences
                </h3>

                <p className="text-gray-500 mt-2">
                  Access members-only events and curated gatherings.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#24324a]">
                  💛 Premium Matching
                </h3>

                <p className="text-gray-500 mt-2">
                  Receive better recommendations and connections.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#24324a]">
                  🎁 Bonus Tickets
                </h3>

                <p className="text-gray-500 mt-2">
                  Receive reservation credits every month.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-[#24324a]"
        >
          The Gatherly
        </Link>

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="font-medium text-[#24324a]"
          >
            Home
          </Link>

          <Link
            to="/events"
            className="font-medium text-[#24324a]"
          >
            Events
          </Link>

          <Link
            to="/profile"
            className="font-medium text-[#24324a]"
          >
            Profile
          </Link>

          <Link
            to="/subscription"
            className="font-medium text-[#24324a]"
          >
            Membership
          </Link>

        </div>

        <Link
          to="/dashboard"
          className="bg-[#24324a] text-white px-5 py-2 rounded-xl font-semibold"
        >
          Dashboard
        </Link>

      </div>

    </nav>
  );
}
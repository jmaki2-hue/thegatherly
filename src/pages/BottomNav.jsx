import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      path: "/dashboard",
      icon: "🏠",
      label: "Home",
    },
    {
      path: "/events",
      icon: "🎉",
      label: "Events",
    },
    {
      path: "/my-reservations",
      icon: "🎟️",
      label: "Bookings",
    },
    {
      path: "/profile",
      icon: "👤",
      label: "Profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 md:hidden">
      <div className="grid grid-cols-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center py-3 text-xs ${
              location.pathname === item.path
                ? "text-[#24324a] font-bold"
                : "text-gray-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
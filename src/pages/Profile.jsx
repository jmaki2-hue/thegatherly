
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "John Smith",
    email: "john@example.com",
    dob: "01/01/1995",
    gender: "Male",
    phone: "+63 912 345 6789",
    location: "Cavite - Dasmarinas",
    profileImage:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const [membership] = useState({
    active: true,
    type: "Premium Membership",
    expiry: "December 31, 2026",
    bonusTickets: 5,
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const locations = [
    "Cavite - Dasmarinas",
    "Cavite - Imus",
    "Cavite - Bacoor",
    "Metro Manila - Makati",
    "Metro Manila - Taguig",
    "Cebu - Cebu City",
  ];

  const handleProfileChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  const handlePasswordChange = (field, value) => {
    setPasswords({
      ...passwords,
      [field]: value,
    });
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    alert("Logout functionality will be connected later.");
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">

      <Navbar />

      <div className="py-10 px-4">

        <div className="max-w-4xl mx-auto">

          {/* Profile Header */}

          <div className="text-center mb-10">

            <div className="relative inline-block">

              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl"
              />

              <button
                className="absolute bottom-0 right-0 bg-[#f5b54a] text-[#24324a] px-4 py-2 rounded-xl font-bold shadow"
              >
                Edit Photo
              </button>

            </div>

            <h1 className="text-4xl font-bold text-[#24324a] mt-6">
              {profile.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {membership.active
                ? "Premium Gatherly Member ✨"
                : "Standard Gatherly Member"}
            </p>

          </div>

          {/* Membership Banner */}

          <div className="bg-[#24324a] text-white rounded-[32px] shadow-lg p-8 mb-8">

            <h2 className="text-3xl font-bold">
              Premium Gatherly Member ✨
            </h2>

            <p className="mt-3 opacity-90">
              Enjoy priority reservations, bonus tickets,
              and exclusive Gatherly experiences.
            </p>

          </div>

          {/* Profile Information */}

          <div className="bg-white rounded-[32px] shadow-lg p-8 mb-8">

            <h2 className="text-2xl font-bold text-[#24324a] mb-6">
              Profile Information
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 font-medium text-gray-600">
                  Full Name
                </label>

                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    handleProfileChange("name", e.target.value)
                  }
                  className="w-full h-14 px-4 rounded-2xl border border-gray-200"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-600">
                  Email Address
                </label>

                <input
                  type="email"
                  value={profile.email}
                  disabled
                  className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 font-medium text-gray-600">
                    Date of Birth
                  </label>

                  <input
                    type="text"
                    value={profile.dob}
                    disabled
                    className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-600">
                    Gender
                  </label>

                  <input
                    type="text"
                    value={profile.gender}
                    disabled
                    className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-600">
                  Preferred Booking Location
                </label>

                <select
                  value={profile.location}
                  onChange={(e) =>
                    handleProfileChange("location", e.target.value)
                  }
                  className="w-full h-14 px-4 rounded-2xl border border-gray-200"
                >
                  {locations.map((location) => (
                    <option
                      key={location}
                      value={location}
                    >
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-600">
                  Contact Number
                </label>

                <input
                  type="text"
                  value={profile.phone}
                  disabled
                  className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50"
                />
              </div>

            </div>

          </div>

          {/* Premium Membership */}

          <div className="bg-white rounded-[32px] shadow-lg p-8 mb-8">

            <h2 className="text-2xl font-bold text-[#24324a] mb-6">
              The Gatherly Premium
            </h2>

            <p className="text-gray-500 mb-6">
              Unlock premium events, exclusive matching,
              priority bookings, and luxury experiences.
            </p>

            <div className="space-y-3">

              <p>
                <strong>Membership:</strong>{" "}
                {membership.type}
              </p>

              <p>
                <strong>Expires:</strong>{" "}
                {membership.expiry}
              </p>

              <p>
                <strong>Bonus Tickets:</strong>{" "}
                {membership.bonusTickets}
              </p>

            </div>

            <Link
              to="/subscription"
              className="inline-block mt-6 bg-[#24324a] text-white px-8 py-3 rounded-2xl font-bold"
            >
              Manage Membership
            </Link>

          </div>

          {/* Change Password */}

          <div className="bg-white rounded-[32px] shadow-lg p-8 mb-8">

            <h2 className="text-2xl font-bold text-[#24324a] mb-6">
              Change Password
            </h2>

            <div className="space-y-5">

              <input
                type="password"
                placeholder="Old Password"
                value={passwords.oldPassword}
                onChange={(e) =>
                  handlePasswordChange(
                    "oldPassword",
                    e.target.value
                  )
                }
                className="w-full h-14 px-4 rounded-2xl border border-gray-200"
              />

              <input
                type="password"
                placeholder="New Password"
                value={passwords.newPassword}
                onChange={(e) =>
                  handlePasswordChange(
                    "newPassword",
                    e.target.value
                  )
                }
                className="w-full h-14 px-4 rounded-2xl border border-gray-200"
              />

              <input
                type="password"
                placeholder="Confirm New Password"
                value={passwords.confirmPassword}
                onChange={(e) =>
                  handlePasswordChange(
                    "confirmPassword",
                    e.target.value
                  )
                }
                className="w-full h-14 px-4 rounded-2xl border border-gray-200"
              />

            </div>

          </div>

          {/* Actions */}

          <div className="space-y-4">

            <button
              onClick={handleSave}
              className="w-full h-14 rounded-2xl bg-[#f5b54a] text-[#24324a] font-bold text-lg"
            >
              Save Changes
            </button>

            <button
              onClick={handleLogout}
              className="w-full h-14 rounded-2xl bg-red-500 text-white font-bold text-lg"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

      <Footer />
    

    </div>
  );
}
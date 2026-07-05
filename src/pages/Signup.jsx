import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const locations = [
    "Metro Manila - Makati",
    "Metro Manila - BGC",
    "Metro Manila - Taguig",
    "Metro Manila - Pasig",
    "Metro Manila - Quezon City",
    "Cavite - Bacoor",
    "Cavite - Imus",
    "Cavite - Dasmariñas",
    "Cebu City",
    "Davao City",
  ];

  const genders = [
    "Male",
    "Female",
    "Non-Binary",
    "Prefer Not To Say",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!selectedGender) {
      alert("Please select a gender.");
      return;
    }

    if (!selectedLocation) {
      alert("Please select a location.");
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        dob: formData.dob,
        phone: formData.phone,
        gender: selectedGender,
        location: selectedLocation,
      });

      navigate("/questionnaire");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] py-12 px-4 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b54a]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24324a]/10 rounded-full blur-3xl"></div>

      <div className="max-w-2xl mx-auto relative z-10">

        <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-12">

          <div className="text-center mb-10">

            <Link
              to="/"
              className="inline-block text-[#24324a] text-4xl font-bold"
            >
              The Gatherly
            </Link>

            <h1 className="text-5xl font-bold text-[#24324a] mt-6">
              Join The Gatherly
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Meet new people, discover experiences,
              and create meaningful connections.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full h-16 px-6 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
            />

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full h-16 px-6 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full h-16 px-6 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
            />

            <div className="grid grid-cols-[110px_1fr] gap-4">

              <select
                className="h-16 px-4 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
              >
                <option>+63</option>
                <option>+1</option>
                <option>+44</option>
                <option>+61</option>
              </select>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="h-16 px-6 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
              />

            </div>

            <div>

              <p className="font-semibold text-[#24324a] mb-4">
                Gender
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                {genders.map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    onClick={() => setSelectedGender(gender)}
                    className={`h-14 rounded-2xl border font-semibold transition ${
                      selectedGender === gender
                        ? "bg-[#24324a] text-white border-[#24324a]"
                        : "bg-white text-[#24324a] border-gray-200"
                    }`}
                  >
                    {gender}
                  </button>
                ))}

              </div>

            </div>

            <div>

              <p className="font-semibold text-[#24324a] mb-4">
                Select Your Location
              </p>

              <div className="flex flex-wrap gap-3">

                {locations.map((location) => (
                  <button
                    key={location}
                    type="button"
                    onClick={() => setSelectedLocation(location)}
                    className={`px-5 h-12 rounded-2xl border font-semibold transition ${
                      selectedLocation === location
                        ? "bg-[#24324a] text-white border-[#24324a]"
                        : "bg-white text-[#24324a] border-gray-200"
                    }`}
                  >
                    {location}
                  </button>
                ))}

              </div>

            </div>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full h-16 px-6 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
            />

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full h-16 px-6 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
            />

            <button
              type="submit"
              className="w-full h-16 rounded-3xl bg-[#f5b54a] text-[#24324a] font-bold text-xl shadow-lg"
            >
              Create Account
            </button>

          </form>

          <div className="text-center mt-10">

            <span className="text-gray-500">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="ml-2 text-[#f5b54a] font-bold"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
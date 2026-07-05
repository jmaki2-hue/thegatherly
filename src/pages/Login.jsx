import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await loginUser(
        email,
        password
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Effects */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b54a]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24324a]/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">

        {/* Logo */}

        <div className="text-center mb-10">

          <Link
            to="/"
            className="text-4xl font-bold text-[#24324a]"
          >
            The Gatherly
          </Link>

          <p className="mt-3 text-gray-600">
            Welcome back to your community
          </p>

        </div>

        {/* Login Card */}

        <div className="bg-white rounded-[32px] shadow-xl p-8">

          <h1 className="text-3xl font-bold text-[#24324a] text-center">
            Sign In
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Access your account and upcoming events
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            <div>

              <label className="block text-[#24324a] font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                className="w-full h-14 px-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
              />

            </div>

            <div>

              <label className="block text-[#24324a] font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                className="w-full h-14 px-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f5b54a]"
              />

            </div>

            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="text-[#24324a] text-sm hover:text-[#f5b54a]"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-2xl bg-[#24324a] text-white font-semibold hover:opacity-95 transition disabled:opacity-50"
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </button>

          </form>

          {/* Divider */}

          <div className="my-8 flex items-center">

            <div className="flex-1 border-t"></div>

            <span className="px-4 text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 border-t"></div>

          </div>

          {/* Google Button Placeholder */}

          <button
            type="button"
            className="w-full h-14 rounded-2xl border border-gray-200 font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
            🔐 Continue with Google
          </button>

          {/* Signup */}

          <div className="mt-8 text-center">

            <span className="text-gray-500">
              Don't have an account?
            </span>

            <Link
              to="/signup"
              className="ml-2 text-[#24324a] font-semibold hover:text-[#f5b54a]"
            >
              Create One
            </Link>

          </div>

        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>

      </div>

    </div>
  );
}
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 font-sans">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-100 h-100 bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-white/60 text-sm mt-2">
            Sign in to continue to Chatty
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="text-sm text-white/70 mb-1 block">
              Username
            </label>
            <input
              name="username"
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30
              transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-white/70 mb-1 block">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30
              transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-medium
            hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-white/50 mt-6 text-center">
          Don’t have an account?{" "}
          <a
            href="/auth/register"
            className="text-white hover:underline transition"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
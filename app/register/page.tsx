"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Create Your Account ✨
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join us and unlock premium features
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Register
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?
          <a href="/login" className="text-indigo-600 hover:underline ml-1">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}

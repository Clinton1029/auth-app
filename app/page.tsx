import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold drop-shadow-lg animate-fade-in">
          Welcome to <span className="text-yellow-300">Auth App</span>
        </h1>
        <p className="text-lg opacity-90">
          Secure. Fast. Modern authentication made simple.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <Link
            href="/login"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

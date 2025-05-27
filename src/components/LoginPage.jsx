import React, { useState } from "react";
// Assuming you have icons imported somewhere or remove them for now:
import { User, Mail, Lock } from "react-feather";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (email === "user@example.com" && password === "password") {
      onLogin(); // This will trigger rendering <Home /> in App
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 w-full max-w-md animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            <User size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-100">Welcome Back!</h2>
          <p className="text-gray-400 mt-2">
            Sign in to your Content Hub account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          {errorMessage && (
            <div className="bg-red-800 text-white text-sm p-3 rounded-lg text-center animate-fade-in">
              {errorMessage}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                id="email"
                className="w-full p-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="password"
                id="password"
                className="w-full p-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

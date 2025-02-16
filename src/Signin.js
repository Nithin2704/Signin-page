import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

// Simple Check component
const Check = () => (
  <div className="text-lg font-bold">✓</div>
);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Sign-In Successful");
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl flex justify-between gap-4 p-5 mx-auto">
      {/* Left Container - Sign In Form */}
      <div className="w-96 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right mt-2">
              <button 
                type="button"
                onClick={() => alert("Forgot password clicked")}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        
        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link 
            to="/signup" // Link to the sign-up page
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Container - Steps */}
      <div className="w-96 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Get Started</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-semibold text-lg">Create Account & Sign In</h3>
              <p className="text-gray-600">Set up your profile with basic info</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-semibold text-lg">Build Your Team Profile</h3>
              <p className="text-gray-600">Create a team and showcase your skills</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-semibold text-lg">Link GitHub Repository</h3>
              <p className="text-gray-600">Connect your team's GitHub repository</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              <Check />
            </div>
            <div>
              <h3 className="font-semibold text-lg">All Set!</h3>
              <p className="text-gray-600">Your profile is now live for recruiters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
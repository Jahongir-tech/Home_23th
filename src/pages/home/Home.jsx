import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r text-black">
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Welcome to my app
        </h1>
        <p className="text-lg md:text-xl text-black mb-8">Use it as yourself</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-blue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

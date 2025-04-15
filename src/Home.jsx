import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="Tech Sprouts Logo"
          className="h-20 w-20 rounded-full bg-white p-2 "
        />
      </div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Welcome to Tech Sprouts
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Tech Sprouts is dedicated to nurturing young minds in technology and
          coding. Our mission is to provide fun, interactive, and practical tech
          education for children ages 7-14. Join us to help your child grow into
          a confident tech creator!
        </p>
        <button
          className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition mb-8"
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          At Tech Sprouts, we believe every child should have the opportunity to
          explore technology in a creative and supportive environment. Our
          experienced instructors guide students through hands-on projects,
          collaborative learning, and real-world problem solving.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
          Image Placeholder 1
        </div>
        <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
          Image Placeholder 2
        </div>
        <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
          Image Placeholder 3
        </div>
      </section>
    </div>
  );
}

export default Home;

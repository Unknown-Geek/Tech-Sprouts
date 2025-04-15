import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Register from "./Register";
import Contact from "./Contact";
import Payment from "./Payment";
import { Leaf } from "lucide-react";
import "./index.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <img
            src={logo}
            alt="Tech Sprouts Logo"
            className="h-8 w-8 rounded-full bg-white p-1"
          />
          <span className="text-2xl font-bold">Tech Sprouts</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="inline-flex items-center space-x-2 mb-4">
                <img
                  src={logo}
                  alt="Tech Sprouts Logo"
                  className="h-8 w-8 rounded-full bg-white p-1"
                />
                <h3 className="text-xl font-semibold">Tech Sprouts</h3>
              </Link>
              <p className="text-gray-400">
                Nurturing young minds with technology. A student-led
                organization helping school students learn tech in a fun way.
              </p>
              <div className="mt-4">
                <a
                  href="https://chat.whatsapp.com/J75hEOoDJIzGALTMxFo4Pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  <i className="fab fa-whatsapp text-lg mr-2"></i>
                  Join Our WhatsApp Group
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>BASICS Scratch</li>
                <li>MIT App Inventor</li>
                <li>Wix</li>
                <li>HTML</li>
                <li>Google Sites</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-green-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-green-400 transition"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-green-400 transition"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-green-400 transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-2 text-green-400"></i>
                  <span>techsproutsorg@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone mt-1 mr-2 text-green-400"></i>
                  <span>+91 7025535227</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2 text-green-400"></i>
                  <span>College of Engineering Trivandrum, Sreekaryam</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Tech Sprouts. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Empowering students from Grade 5 to Grade 12 with technology
              education.
            </p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;

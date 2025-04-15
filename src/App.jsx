import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Register from "./Register";
import Contact from "./Contact";
import { Leaf } from "lucide-react";
import "./index.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Tech Sprouts Logo"
            className="h-8 w-8 rounded-full bg-white p-1"
          />
          <span className="text-2xl font-bold">Tech Sprouts</span>
        </div>
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
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tech Sprouts</h3>
              <p className="text-gray-400">
                Nurturing tomorrow's tech innovators today.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Coding Basics</li>
                <li>App Development</li>
                <li>Game Design</li>
                <li>Robotics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Free Tutorials</li>
                <li>FAQs</li>
                <li>Parent Guide</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@techsprouts.com</li>
                <li>555-123-4567</li>
                <li>123 Learning Lane, Tech City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Tech Sprouts. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;

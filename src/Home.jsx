import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="Tech Sprouts Logo"
          className="h-20 w-20 rounded-full bg-white border-2 border-green-500 relative z-10 p-2 card-animate"
        />
      </div>
      <section className="text-center mb-12 card-animate">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Welcome to Tech Sprouts
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Tech Sprouts is a student-led organization that helps school students
          learn about technology in a fun way. We make learning easy and
          exciting through creative and hands-on sessions. Our goal is to make
          tech simple and exciting for all.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition card-animate"
            onClick={() => navigate("/register")}
          >
            Register Now
          </button>
          <a
            href="https://chat.whatsapp.com/J75hEOoDJIzGALTMxFo4Pk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition card-animate"
          >
            <i className="fab fa-whatsapp text-xl mr-2"></i>
            Join WhatsApp Group
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16 bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          WHY CHOOSE US
        </h2>
        <h3 className="text-xl font-semibold text-green-600 mb-4 text-center">
          GROWING YOUNG MINDS WITH TECH
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-green-700 mb-3">
              Flexible Learning Options
            </h4>
            <p className="text-gray-700 mb-3">
              Most of our sessions are <span className="font-bold">ONLINE</span>
              , so you can join from anywhere!
            </p>
            <p className="text-gray-700">
              We also host offline workshops, events, and fun competitions with
              certificates and exciting prizes for participants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-green-700 mb-3">
              About Us
            </h4>
            <p className="text-gray-700">
              Tech Sprouts is a student-led organization that helps school
              students learn about technology in a fun way. We make learning
              easy and exciting through creative and hands-on sessions. Our goal
              is to make tech simple and exciting for all.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex items-start bg-white p-4 rounded-lg shadow-sm max-w-xs">
            <div className="rounded-full bg-green-100 p-3 mr-3 flex-shrink-0">
              <i className="fas fa-brain text-green-600 text-xl"></i>
            </div>
            <p className="text-gray-700">
              Learn about the world of technology in a simple and fun way
            </p>
          </div>

          <div className="flex items-start bg-white p-4 rounded-lg shadow-sm max-w-xs">
            <div className="rounded-full bg-green-100 p-3 mr-3 flex-shrink-0">
              <i className="fas fa-paint-brush text-green-600 text-xl"></i>
            </div>
            <p className="text-gray-700">Be creative and build real projects</p>
          </div>

          <div className="flex items-start bg-white p-4 rounded-lg shadow-sm max-w-xs">
            <div className="rounded-full bg-green-100 p-3 mr-3 flex-shrink-0">
              <i className="fas fa-comments text-green-600 text-xl"></i>
            </div>
            <p className="text-gray-700">Work with friends and share ideas</p>
          </div>
        </div>
      </section>

      {/* How Do Sessions Work Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          HOW DO SESSIONS WORK?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-calendar-check text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">
              Schedule
            </h3>
            <p className="text-gray-700 text-center">
              Weekly online sessions with flexible timing options
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-laptop-code text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">
              Learning
            </h3>
            <p className="text-gray-700 text-center">
              Hands-on projects with step-by-step guidance from our instructors
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
              <i className="fas fa-certificate text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">
              Achievement
            </h3>
            <p className="text-gray-700 text-center">
              Complete projects and earn certificates to showcase your skills
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">
            Our Approach
          </h3>
          <p className="text-gray-700 mb-4">
            Each session focuses on building practical skills through fun,
            interactive projects. Students learn at their own pace with
            personalized guidance from our instructors.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/courses")}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Explore Our Courses
            </button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          At Tech Sprouts, we believe every child should have the opportunity to
          explore technology in a creative and supportive environment. Our
          instructors guide students through hands-on projects, collaborative
          learning, and real-world problem solving.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
          <img
            src={image1}
            alt="Tech Sprouts Activity"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
          <img
            src={image2}
            alt="Tech Sprouts Activity"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
          <img
            src={image3}
            alt="Tech Sprouts Activity"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;

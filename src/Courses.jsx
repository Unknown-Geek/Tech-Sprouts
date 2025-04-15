import React from "react";

function Courses() {
  const courseData = [
    {
      name: "BASICS Scratch",
      perSession: "₹ 50",
      fullCourse: "₹ 120",
      description:
        "Learn programming fundamentals through block-based coding with Scratch.",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-400",
      iconClass: "fas fa-puzzle-piece text-yellow-500",
    },
    {
      name: "MIT App Inventor",
      perSession: "₹ 50",
      fullCourse: "₹ 120",
      description:
        "Create your own mobile apps with this block-based programming platform.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-400",
      iconClass: "fas fa-mobile-alt text-blue-500",
    },
    {
      name: "Wix",
      perSession: "₹ 50",
      fullCourse: "₹ 120",
      description:
        "Build professional websites with this intuitive drag-and-drop platform.",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-400",
      iconClass: "fas fa-globe text-purple-500",
    },
    {
      name: "HTML",
      perSession: "₹ 40",
      fullCourse: "₹ 90",
      description:
        "Learn the foundation of all web development with HTML markup language.",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-400",
      iconClass: "fas fa-code text-orange-500",
    },
    {
      name: "Google Sites",
      perSession: "₹ 40",
      fullCourse: "₹ 90",
      description:
        "Create websites easily with Google's website building tool.",
      bgColor: "bg-green-100",
      borderColor: "border-green-400",
      iconClass: "fab fa-google text-green-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-700 mb-2 text-center">
        Our Courses
      </h1>
      <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        Explore our range of tech courses designed specifically for young
        learners. Each course is crafted to make learning fun and engaging while
        building valuable skills for the future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden border-t-4 ${course.borderColor} ${course.bgColor} transition-transform duration-300 hover:scale-105`}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className={`${course.iconClass} text-2xl mr-3`}></i>
                <h3 className="text-xl font-bold">{course.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="bg-white rounded-lg p-4 shadow-inner">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Per Session:</span>
                  <span className="font-bold text-lg">{course.perSession}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Full Course:</span>
                  <span className="font-bold text-lg text-green-600">
                    {course.fullCourse}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Session Information
        </h2>
        <p className="text-gray-700 text-center">
          Our courses are structured in sessions designed to progressively build
          skills. Contact us for more details about session schedules and course
          durations.
        </p>
      </div>
    </div>
  );
}

export default Courses;

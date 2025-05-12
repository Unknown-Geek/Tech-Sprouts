import React from "react";

function Courses() {
  const courseData = [
    {
      name: "BASICS Scratch",
      perSession: "₹ 99",
      fullCourse: "₹ 249",
      description:
        "Learn programming fundamentals through block-based coding with Scratch.",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-400",
      iconClass: "fas fa-puzzle-piece text-yellow-500",
    },
    {
      name: "MIT App Inventor",
      perSession: "₹ 79",
      fullCourse: "₹ 199",
      description:
        "Create your own mobile apps with this block-based programming platform.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-400",
      iconClass: "fas fa-mobile-alt text-blue-500",
    },
    {
      name: "Wix",
      perSession: "₹ 99",
      fullCourse: "₹ 249",
      description:
        "Build professional websites with this intuitive drag-and-drop platform.",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-400",
      iconClass: "fas fa-globe text-purple-500",
    },
    {
      name: "HTML",
      perSession: "₹ 99",
      fullCourse: "₹ 249",
      description:
        "Learn the foundation of all web development with HTML markup language.",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-400",
      iconClass: "fas fa-code text-orange-500",
    },
    {
      name: "Google Sites",
      perSession: "₹ 79",
      fullCourse: "₹ 199",
      description:
        "Create websites easily with Google's website building tool.",
      bgColor: "bg-green-100",
      borderColor: "border-green-400",
      iconClass: "fab fa-google text-green-500",
    },
    {
      name: "Canva",
      perSession: "₹ 99",
      fullCourse: "₹ 249",
      description:
        "Create beautiful designs, presentations, and graphics with this popular design platform.",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-400",
      iconClass: "fas fa-paint-brush text-pink-500",
    },
  ];

  // Session content details
  const sessionContent = [
    {
      title: "SESSION 1",
      content: "Learn the basics of the tool/platform.",
      bgColor: "bg-blue-50",
      icon: "fas fa-rocket",
    },
    {
      title: "SESSION 2",
      content: "Start building something cool with easy steps.",
      bgColor: "bg-green-50",
      icon: "fas fa-tools",
    },
    {
      title: "SESSION 3",
      content: "Add more fun features to your project.",
      bgColor: "bg-purple-50",
      icon: "fas fa-magic",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-700 mb-2 text-center card-animate">
        Our Courses
      </h1>
      <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto card-animate">
        Explore our range of tech courses designed specifically for young
        learners. Each course is crafted to make learning fun and engaging while
        building valuable skills for the future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden border-t-4 ${course.borderColor} ${course.bgColor} transition-transform duration-300 hover:scale-105 card-animate`}
            style={{ animationDelay: `${index * 0.08}s` }}
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
                <div className="flex justify-center items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-500 italic">
                    *Full course = 3 complete sessions
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Session Information */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Session Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {sessionContent.map((session, index) => (
            <div
              key={index}
              className={`${session.bgColor} p-5 rounded-lg shadow-sm`}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <i className={`${session.icon} text-green-600`}></i>
                </div>
                <h3 className="font-bold text-green-800">{session.title}</h3>
              </div>
              <p className="text-gray-700">{session.content}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-center">
          Our courses are structured in sessions designed to progressively build
          skills. Each session builds on the previous one, helping students
          develop a complete project by the end of the course.
        </p>
      </div>

      {/* Who Can Join Section */}
      <div className="mt-12 bg-green-50 p-6 rounded-lg shadow max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          WHO CAN JOIN?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <div className="md:w-1/3">
            <img
              src="https://img.freepik.com/free-vector/diverse-students-concept-illustration_114360-8866.jpg"
              alt="Students learning"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          <div className="md:w-2/3 bg-white p-5 rounded-lg shadow-sm">
            <p className="text-gray-700 text-lg font-medium mb-3">
              Students from Grade 5 to Grade 12
            </p>
            <p className="text-gray-600">
              Whether you're just getting started or already curious about tech,
              there's something for everyone!
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className="text-gray-700">Beginners welcome</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className="text-gray-700">
                  No prior experience needed
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className="text-gray-700">Age-appropriate content</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className="text-gray-700">Engaging learning methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

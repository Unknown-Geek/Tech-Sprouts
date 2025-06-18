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
    <div>
      <div className="duolingo-container py-8">
        <h1 className="text-4xl font-bold text-green-700 mb-8 mt-12 text-center card-animate">
          Our Courses
        </h1>
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto card-animate">
          Explore our range of tech courses designed specifically for young
          learners. Each course is crafted to make learning fun and engaging
          while building valuable skills for the future.
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
                    <span className="font-bold text-lg">
                      {course.perSession}
                    </span>
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
      </div>

      <div className="duolingo-container">
        {/* Session Information */}
        <section className="sessions-section">
          <div className="sessions-header">
            <h2 className="sessions-title">Session Information</h2>
            <p className="sessions-description">
              Your learning adventure happens in fun, structured sessions! ✨
            </p>
          </div>

          <div className="learning-steps">
            {sessionContent.map((session, index) => (
              <div key={index} className={`step-card step-${index + 1}`}>
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">
                  <i className={`${session.icon} text-blue-500 text-3xl`}></i>
                </div>
                <h3 className="step-title">{session.title}</h3>
                <p className="step-description">{session.content}</p>
              </div>
            ))}
          </div>

          <div className="approach-card">
            <h3 className="approach-title">🎯 Our Learning Method</h3>
            <p className="approach-description">
              Our courses are structured in sessions designed to progressively
              build skills. Each session builds on the previous one, helping
              students develop a complete project by the end of the course.
            </p>
          </div>
        </section>

        {/* Who Can Join Section */}
        <section className="features-section">
          <div className="features-header">
            <h2 className="features-title">WHO CAN JOIN?</h2>
            <h3 className="features-subtitle">
              Everyone's Welcome in Our Tech Family!
            </h3>
          </div>

          <div className="features-grid">
            <div className="feature-card feature-card-visual">
              <div className="feature-visual-wrapper">
                <img
                  src="https://i.pinimg.com/736x/8c/8d/3b/8c8d3b15fa89ae06db1120a70a3f91d5.jpg"
                  alt="Diverse students learning together"
                  className="feature-hero-image"
                  style={{
                    objectPosition: "center -40px", // This moves the image downward by 10px
                  }}
                />{" "}
                <div className="feature-overlay">
                  {" "}
                  <div className="overlay-stats">
                    <div className="stat-badge">
                      <span className="stat-number">3</span>
                      <span className="stat-label">Sessions</span>
                    </div>
                    <div className="stat-badge">
                      <span className="stat-number">6</span>
                      <span className="stat-label">Courses</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">
                  Students from Grade 5 to Grade 12
                </h4>{" "}
                <p className="feature-description">
                  Whether you're just getting started or already curious about
                  tech, there's something for everyone!
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-clock text-blue-500"></i>
                    <span>Flexible Timing</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-users text-purple-500"></i>
                    <span>Small Groups</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-certificate text-yellow-500"></i>
                    <span>Certificates</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-card feature-card-visual">
              <div className="feature-visual-wrapper">
                <img
                  src="https://img.freepik.com/free-vector/diverse-students-concept-illustration_114360-8866.jpg"
                  alt="Diverse students learning together"
                  className="feature-hero-image"
                  style={{
                    objectPosition: "center -110px", // This moves the image downward by 10px
                  }}
                />
                <div className="feature-overlay">
                  <div className="overlay-stats">
                    <div className="stat-badge">
                      <span className="stat-number">100+</span>
                      <span className="stat-label">Students</span>
                    </div>
                    <div className="stat-badge">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Schools</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">
                  Join Our Global Tech Community!
                </h4>
                <p className="feature-description">
                  Connect with passionate young learners from around the world.
                  Share ideas, collaborate on projects, and grow together in our
                  supportive tech family!
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-globe text-blue-500"></i>
                    <span>Global Network</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-handshake text-purple-500"></i>
                    <span>Peer Support</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-trophy text-yellow-500"></i>
                    <span>Achievements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="super-powers">
            <h3 className="super-powers-title">Why You'll Love It Here</h3>
            <div className="powers-grid">
              <div className="power-item">
                <div className="power-icon">
                  <i className="fas fa-check-circle text-green-500 text-3xl"></i>
                </div>
                <p className="power-text">
                  Beginners welcome - no prior experience needed!
                </p>
              </div>

              <div className="power-item">
                <div className="power-icon">
                  <i className="fas fa-heart text-green-500 text-3xl"></i>
                </div>
                <p className="power-text">
                  Age-appropriate content that makes learning fun!
                </p>
              </div>

              <div className="power-item">
                <div className="power-icon">
                  <i className="fas fa-users text-green-500 text-3xl"></i>
                </div>
                <p className="power-text">
                  Engaging learning methods that keep you excited!{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Courses;

import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import ISL1 from "../assets/ISL_1.webp";
import ISL2 from "../assets/ISL_2.webp";
import ISL3 from "../assets/ISL_3.webp";
import TiltedCard from "./TiltedCard";
import DraggableAvatar from "./components/DraggableAvatar";

function Home() {
  const navigate = useNavigate(); // Calculate initial positions based on viewport - Stacker-style clean positioning
  const getInitialPosition = (
    topPercent,
    leftPercent,
    rightPercent,
    bottomPercent
  ) => {
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1200;
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 800;

    // Define safe zones - keep orbs in outer 25% margins, avoid center 50%
    const horizontalSafeZone = viewportWidth * 0.25; // 25% from each side
    const verticalSafeZone = viewportHeight * 0.2; // 20% from top/bottom

    let x = 0;
    let y = 0;

    if (leftPercent !== undefined) {
      // Place in left safe zone
      x = Math.min(
        (viewportWidth * leftPercent) / 100,
        horizontalSafeZone - 60
      );
    } else if (rightPercent !== undefined) {
      // Place in right safe zone
      x = Math.max(
        viewportWidth - (viewportWidth * rightPercent) / 100 - 60,
        viewportWidth - horizontalSafeZone
      );
    }

    if (topPercent !== undefined) {
      // Place in top safe zone
      y = Math.max((viewportHeight * topPercent) / 100, verticalSafeZone);
    } else if (bottomPercent !== undefined) {
      // Place in bottom safe zone
      y = Math.min(
        viewportHeight - (viewportHeight * bottomPercent) / 100 - 60,
        viewportHeight - verticalSafeZone - 60
      );
    }

    // Ensure minimum margins from viewport edges
    return {
      x: Math.max(20, Math.min(x, viewportWidth - 80)),
      y: Math.max(20, Math.min(y, viewportHeight - 80)),
    };
  };

  return (
    <div>
      {/* Modern Hero Section */}
      <section className="hero-container">
        {/* Floating background elements */}
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        {/* Floating interactive cards */}
        <div className="floating-card floating-card-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <i className="fas fa-code text-white text-sm"></i>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-800">
                Learn Coding
              </div>
              <div className="text-xs text-gray-600">HTML,CSS</div>
            </div>
          </div>
        </div>
        <div className="floating-card floating-card-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-white text-sm"></i>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-800">
                Create Websites
              </div>
              <div className="text-xs text-gray-600">Google Sites, WIX</div>
            </div>
          </div>
        </div>
        <div className="floating-card floating-card-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <i className="fas fa-gamepad text-white text-sm"></i>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-800">
                Create Games
              </div>
              <div className="text-xs text-gray-600">Scratch</div>
            </div>
          </div>
        </div>
        <div className="floating-card floating-card-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <i className="fas fa-trophy text-white text-sm"></i>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-800">Top 20</div>
              <div className="text-xs text-gray-600">ISL 2025</div>
            </div>
          </div>
        </div>{" "}
        {/* Floating avatars - positioned in non-text regions */}
        <DraggableAvatar
          className="floating-avatar floating-avatar-1"
          initialPosition={getInitialPosition(5, 2)}
        >
          HTML
        </DraggableAvatar>
        <DraggableAvatar
          className="floating-avatar floating-avatar-2"
          initialPosition={getInitialPosition(8, undefined, 2)}
        >
          WIX
        </DraggableAvatar>
        <DraggableAvatar
          className="floating-avatar floating-avatar-3"
          initialPosition={getInitialPosition(undefined, 2, undefined, 5)}
        >
          MIT
        </DraggableAvatar>
        <DraggableAvatar
          className="floating-avatar floating-avatar-4"
          initialPosition={getInitialPosition(undefined, undefined, 2, 8)}
        >
          CSS
        </DraggableAvatar>
        {/* Hero content */}
        <div className="hero-content">
          <div className="hero-logo">
            <img src={logo} alt="Tech Sprouts Logo" className="object-cover" />
          </div>

          <h1 className="hero-title">The home for developer communities</h1>

          <h2 className="hero-subtitle">
            Tech Sprouts - Growing Young Minds with Technology
          </h2>

          <p className="hero-description">
            Learn programming, build amazing projects, and connect with fellow
            young developers. We make technology accessible and exciting for
            students through hands-on learning and creative collaboration.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn-primary"
              onClick={() => navigate("/register")}
            >
              Start Learning Today
            </button>
            <a
              href="https://chat.whatsapp.com/J75hEOoDJIzGALTMxFo4Pk"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary flex items-center justify-center space-x-2"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>Join Community</span>
            </a>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-8">
        {/* Indian Startup League 2025 Achievement Section */}
        <section className="mb-16 bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg shadow-md card-animate">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <i className="fas fa-trophy text-purple-600 text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Selected Among Top 20 Startups in India
            </h2>
            <h3 className="text-xl font-semibold text-purple-600 mb-6">
              Indian Startup League 2025
            </h3>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                We are proud to announce a significant milestone in our journey
                with{" "}
                <span className="font-bold text-green-600">Tech Sprouts</span>.
                <br />
                <br />
                We had the exceptional opportunity to participate in the{" "}
                <span className="font-bold">Indian Startup League 2025</span>,
                where Tech Sprouts was selected among the{" "}
                <span className="font-bold text-purple-600">
                  Top 20 startups
                </span>{" "}
                from across the country. During this prestigious event, we
                presented our innovative educational technology solution and
                engaged in comprehensive discussions with a distinguished global
                jury panel.
                <br />
                <br />
                This experience provided invaluable insights and has
                strengthened our commitment to advancing technology education
                for young learners. We are grateful for the opportunity to
                connect with visionary founders, explore cutting-edge ideas, and
                continue building bridges between technology and education. This
                recognition motivates us to further our mission of making
                technology accessible and engaging for students nationwide.
              </p>
            </div>{" "}
            {/* ISL Images Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {" "}
              <div className="flex justify-center">
                <TiltedCard
                  imageSrc={ISL1}
                  altText="Tech Sprouts at Indian Startup League 2025 - Presentation"
                  captionText="ISL 2025 Presentation"
                  containerHeight="240px"
                  containerWidth="100%"
                  imageHeight="240px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showTooltip={true}
                  className="w-full"
                  imageStyle={{ objectPosition: "center 14.5%" }}
                />
              </div>
              <div className="flex justify-center">
                <TiltedCard
                  imageSrc={ISL2}
                  altText="Tech Sprouts at Indian Startup League 2025 - Team"
                  captionText="Our Team at ISL 2025"
                  containerHeight="240px"
                  containerWidth="100%"
                  imageHeight="240px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showTooltip={true}
                  className="w-full"
                />
              </div>
              <div className="flex justify-center">
                <TiltedCard
                  imageSrc={ISL3}
                  altText="Tech Sprouts at Indian Startup League 2025 - Event"
                  captionText="ISL 2025 Event"
                  containerHeight="240px"
                  containerWidth="100%"
                  imageHeight="240px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showTooltip={true}
                  className="w-full"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <div className="inline-flex flex-wrap gap-2 text-sm text-purple-600">
                <span className="bg-purple-100 px-3 py-1 rounded-full">
                  #TechSprouts
                </span>
                <span className="bg-purple-100 px-3 py-1 rounded-full">
                  #IndianStartupLeague
                </span>
                <span className="bg-purple-100 px-3 py-1 rounded-full">
                  #Top20Startups
                </span>
                <span className="bg-purple-100 px-3 py-1 rounded-full">
                  #ISL2025
                </span>
                <span className="bg-purple-100 px-3 py-1 rounded-full">
                  #EdTech
                </span>
                <span className="bg-purple-100 px-3 py-1 rounded-full">
                  #StudentStartup
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-16 card-animate">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Tech Sprouts, we believe every child should have the
              opportunity to explore technology in a creative and supportive
              environment. Our instructors guide students through hands-on
              projects, collaborative learning, and real-world problem solving.
            </p>
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <TiltedCard
                imageSrc={image1}
                altText="Tech Sprouts Activity - Students Learning"
                captionText="Students Learning Tech"
                containerHeight="256px"
                containerWidth="100%"
                imageHeight="256px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.08}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-white font-semibold">Hands-on Learning</p>
                }
                className="w-full"
              />
            </div>
            <div className="flex justify-center">
              <TiltedCard
                imageSrc={image2}
                altText="Tech Sprouts Activity - Creative Projects"
                captionText="Creative Tech Projects"
                containerHeight="256px"
                containerWidth="100%"
                imageHeight="256px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.08}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-white font-semibold">Creative Projects</p>
                }
                className="w-full"
              />
            </div>
            <div className="flex justify-center">
              <TiltedCard
                imageSrc={image3}
                altText="Tech Sprouts Activity - Collaborative Work"
                captionText="Collaborative Learning"
                containerHeight="256px"
                containerWidth="100%"
                imageHeight="256px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.08}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-white font-semibold">Team Collaboration</p>
                }
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16 bg-green-50 p-8 rounded-lg shadow-md card-animate">
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
                Most of our sessions are{" "}
                <span className="font-bold">ONLINE</span>, so you can join from
                anywhere!
              </p>
              <p className="text-gray-700">
                We also host offline workshops, events, and fun competitions
                with certificates and exciting prizes for participants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-700 mb-3">
                Student-Led Organization
              </h4>
              <p className="text-gray-700">
                Tech Sprouts is a student-led organization that helps school
                students learn about technology in a fun way. We make learning
                easy and exciting through creative and hands-on sessions. Our
                goal is to make tech simple and exciting for all.
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
              <p className="text-gray-700">
                Be creative and build real projects
              </p>
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
        <section className="mb-16 bg-blue-50 p-8 rounded-lg shadow-md card-animate">
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
                Hands-on projects with step-by-step guidance from our
                instructors
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
            </div>{" "}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

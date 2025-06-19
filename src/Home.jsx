import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import ISL1 from "../assets/ISL_1.webp";
import ISL2 from "../assets/ISL_2.webp";
import ISL3 from "../assets/ISL_3.webp";
import TiltedCard from "./components/TiltedCard";
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
      {" "}
      {/* Duolingo-inspired Hero Section */}
      <section className="duolingo-hero">
        {/* Fun floating shapes */}
        <div className="duolingo-shape duolingo-shape-1"></div>
        <div className="duolingo-shape duolingo-shape-2"></div>
        <div className="duolingo-shape duolingo-shape-3"></div>
        <div className="duolingo-shape duolingo-shape-4"></div>
        {/* Floating skill badges */}
        <div className="skill-badge skill-badge-1">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-code text-white text-lg"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">
                Learn Coding
              </div>
              <div className="text-xs text-green-600 font-semibold">
                HTML & CSS
              </div>
            </div>
          </div>
        </div>
        <div className="skill-badge skill-badge-2">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-globe text-white text-lg"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">
                Build Websites
              </div>
              <div className="text-xs text-blue-600 font-semibold">
                GSites & WIX
              </div>
            </div>
          </div>
        </div>
        <div className="skill-badge skill-badge-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-gamepad text-white text-lg"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">
                Create Games
              </div>
              <div className="text-xs text-purple-600 font-semibold">
                Scratch
              </div>
            </div>
          </div>
        </div>
        <div className="skill-badge skill-badge-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-palette text-white text-lg"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">
                Create Designs
              </div>
              <div className="text-xs text-yellow-600 font-semibold">
                Canva & WIX
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Interactive learning avatars */}
        <DraggableAvatar
          className="learning-avatar floating-avatar learning-avatar-1"
          initialPosition={getInitialPosition(5, 2)}
        >
          HTML
        </DraggableAvatar>{" "}
        <DraggableAvatar
          className="learning-avatar floating-avatar learning-avatar-2"
          initialPosition={getInitialPosition(1, undefined, 4, undefined)}
        >
          WIX
        </DraggableAvatar>
        <DraggableAvatar
          className="learning-avatar floating-avatar learning-avatar-3"
          initialPosition={getInitialPosition(undefined, 2, undefined, 5)}
        >
          MIT
        </DraggableAvatar>
        <DraggableAvatar
          className="learning-avatar floating-avatar learning-avatar-4"
          initialPosition={getInitialPosition(undefined, undefined, 6, 8)}
        >
          Canva
        </DraggableAvatar>
        {/* Main hero content */}
        <div className="duolingo-hero-content">
          <div className="duolingo-logo-container">
            <div className="duolingo-logo-bg">
              <img
                src={logo}
                alt="Tech Sprouts Logo"
                className="duolingo-logo"
              />
            </div>
          </div>
          <h1 className="duolingo-main-title">Welcome to Tech Sprouts!</h1>
          <h2 className="duolingo-subtitle">The fun way to learn technology</h2>
          <p className="duolingo-description">
            Join thousands of young minds discovering the magic of coding! Build
            games, create websites, and become a tech superhero with our
            interactive lessons and friendly community.
          </p>{" "}
          <div className="duolingo-cta-buttons">
            <button
              className="duolingo-primary-btn"
              onClick={() => navigate("/register")}
            >
              {" "}
              Start Your Journey
            </button>
            <a
              href="https://chat.whatsapp.com/J75hEOoDJIzGALTMxFo4Pk"
              target="_blank"
              rel="noopener noreferrer"
              className="duolingo-secondary-btn"
            >
              <i className="fab fa-whatsapp text-2xl mr-2"></i>
              Join Friends
            </a>
          </div>
          {/* Fun stats */}{" "}
          <div className="duolingo-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Sessions Held</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Top 20</div>
              <div className="stat-label">ISL 2025</div>
            </div>
          </div>
        </div>
      </section>
      {/* Rest of the content */}{" "}
      <div className="duolingo-container">
        {/* Achievement Badge Section */}
        <section className="achievement-section">
          <div className="achievement-badge">
            <div className="achievement-icon">
              <i className="fas fa-trophy text-6xl text-yellow-500"></i>
            </div>
            <h2 className="achievement-title">We Made It to the Top 20!</h2>
            <h3 className="achievement-subtitle">Indian Startup League 2025</h3>
          </div>

          <div className="achievement-story">
            <div className="story-card">
              <p className="story-text">
                Guess what?<br></br>
                <span className="highlight-green">Tech Sprouts</span> just
                became one of the{" "}
                <span className="highlight-trophy">
                  Top 20 startups in all of India!
                </span>
                <br />
                <br />
                We got to present our awesome idea to amazing judges from around
                the world! It was like showing your coolest project to the whole
                class, but even MORE exciting!
                <br />
                <br />
                This super cool experience taught us so much and made us even
                more excited to help YOU learn technology in the most fun way
                possible!
              </p>
            </div>

            {/* Fun ISL Gallery */}
            <div className="learning-showcase mb-8">
              <div className="showcase-item">
                <TiltedCard
                  imageSrc={ISL1}
                  altText="Kids Having Fun Learning!"
                  captionText="Learning is Fun Here!"
                  containerHeight="280px"
                  containerWidth="100%"
                  imageHeight="280px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.08}
                  showTooltip={true}
                  displayOverlayContent={true}
                  imageStyle={{
                    objectFit: "cover",
                    objectPosition: "center 20%",
                  }}
                  className="showcase-card"
                />
              </div>
              <div className="showcase-item">
                <TiltedCard
                  imageSrc={ISL2}
                  altText="Amazing Projects by Kids!"
                  captionText="Build Cool Projects!"
                  containerHeight="280px"
                  containerWidth="100%"
                  imageHeight="280px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.08}
                  showTooltip={true}
                  displayOverlayContent={true}
                  imageStyle={{
                    objectFit: "cover",
                    objectPosition: "center 60%",
                  }}
                  className="showcase-card"
                />
              </div>
              <div className="showcase-item">
                <TiltedCard
                  imageSrc={ISL3}
                  altText="Friends Learning Together!"
                  captionText="Learn with Friends!"
                  containerHeight="280px"
                  containerWidth="100%"
                  imageHeight="280px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.08}
                  showTooltip={true}
                  displayOverlayContent={true}
                  className="showcase-card"
                />
              </div>
            </div>

            <div className="achievement-tags">
              {" "}
              <span className="fun-tag tag-green">#TechSprouts</span>
              <span className="fun-tag tag-purple">#Top20Startups</span>
              <span className="fun-tag tag-blue">#ISL2025</span>
              <span className="fun-tag tag-yellow">#YoungInnovators</span>
              <span className="fun-tag tag-pink">#StudentPower</span>
            </div>
          </div>
        </section>{" "}
        {/* About Us - Kid-friendly Section */}
        <section className="about-section">
          <div className="about-header">
            <h2 className="about-title">What Makes Us Special?</h2>
            <p className="about-description">
              We're like your tech playground! Where every kid can become a
              coding superhero and build amazing things with technology. No
              boring lectures - just pure fun!
            </p>
          </div>

          <div className="learning-showcase">
            <div className="showcase-item">
              <TiltedCard
                imageSrc={image1}
                altText="Kids Having Fun Learning!"
                captionText="Learning is Fun Here!"
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="280px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.08}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="showcase-overlay">
                    {" "}
                    <p className="overlay-text">Hands-on Fun Learning</p>
                  </div>
                }
                className="showcase-card"
              />
            </div>
            <div className="showcase-item">
              <TiltedCard
                imageSrc={image2}
                altText="Amazing Projects by Kids!"
                captionText="Build Cool Projects!"
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="280px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.08}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="showcase-overlay">
                    {" "}
                    <p className="overlay-text">Creative Projects</p>
                  </div>
                }
                className="showcase-card"
              />
            </div>
            <div className="showcase-item">
              <TiltedCard
                imageSrc={image3}
                altText="Friends Learning Together!"
                captionText="Learn with Friends!"
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="280px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.08}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="showcase-overlay">
                    {" "}
                    <p className="overlay-text">Team Adventures</p>
                  </div>
                }
                className="showcase-card"
              />
            </div>
          </div>
        </section>{" "}
        {/* Why Choose Us - Super Fun Features */}
        <section className="features-section">
          <div className="features-header">
            <h2 className="features-title">Why Kids Love Tech Sprouts</h2>
            <h3 className="features-subtitle">Where Technology Meets Fun!</h3>
          </div>{" "}
          <div className="features-grid">
            <div className="feature-card feature-card-primary">
              <div className="feature-icon"></div>
              <h4 className="feature-title">Learn from Anywhere!</h4>
              <p className="feature-description">
                Most of our super cool sessions are{" "}
                <span className="highlight-bold">ONLINE !</span>
                <br></br>Learn from your bedroom, living room, or even from
                grandma's house!
              </p>
              <p className="feature-bonus">
                Plus, we have awesome offline workshops upcoming, with
                certificates and prizes!
              </p>
            </div>{" "}
            <div className="feature-card feature-card-secondary">
              <div className="feature-icon"></div>
              <h4 className="feature-title">Made by Students, for Students!</h4>
              <p className="feature-description">
                We're students just like <span className="highlight-bold">YOU !</span><br></br>We know what makes
                learning fun and exciting. Just kids teaching kids!
              </p>

              <p className="feature-bonus">
                Plus, we have awesome mentors who are super friendly and always
                ready to help!
              </p>
            </div>
          </div>
          <div className="super-powers">
            <h3 className="super-powers-title">Your Tech Superpowers</h3>
            <div className="powers-grid">
              <div className="power-item">
                <div className="power-icon">
                  <i className="fas fa-brain text-green-500 text-3xl"></i>
                </div>{" "}
                <p className="power-text">
                  Unlock the secrets of technology in the most fun way possible!
                </p>
              </div>

              <div className="power-item">
                <div className="power-icon">
                  <i className="fas fa-paint-brush text-green-500 text-3xl"></i>
                </div>{" "}
                <p className="power-text">
                  Create amazing projects that will blow your friends' minds!
                </p>
              </div>

              <div className="power-item">
                <div className="power-icon">
                  <i className="fas fa-users text-green-500 text-3xl"></i>
                </div>{" "}
                <p className="power-text">
                  Make new coding buddies and share your coolest ideas!
                </p>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* How Sessions Work - Adventure Guide */}
        <section className="sessions-section">
          <div className="sessions-header">
            <h2 className="sessions-title">Your Learning Adventure</h2>
            <p className="sessions-description">
              Ready to start your coding journey? Here's how the magic happens!
              ✨
            </p>
          </div>

          <div className="learning-steps">
            <div className="step-card step-1">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fas fa-calendar-check text-blue-500 text-3xl"></i>
              </div>
              <h3 className="step-title">Pick Your Time!</h3>
              <p className="step-description">
                Choose when you want to learn - we have sessions that fit around
                your school and playtime!
              </p>
            </div>

            <div className="step-card step-2">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-laptop-code text-green-500 text-3xl"></i>
              </div>
              <h3 className="step-title">Build Cool Stuff!</h3>
              <p className="step-description">
                Create games, websites, and amazing projects with help from our
                friendly instructors!
              </p>
            </div>

            <div className="step-card step-3">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-trophy text-yellow-500 text-3xl"></i>
              </div>
              <h3 className="step-title">Show Off Your Skills!</h3>
              <p className="step-description">
                Complete awesome projects and get certificates to prove you're a
                coding superhero!
              </p>
            </div>
          </div>

          <div className="approach-card">
            <h3 className="approach-title"> Our Secret Formula</h3>
            <p className="approach-description">
              Every session is like a fun game where you learn by doing! No
              boring lectures - just hands-on building, creating, and having a
              blast with technology!
            </p>
            <div className="approach-cta">
              {" "}
              <button
                onClick={() => navigate("/courses")}
                className="explore-btn"
              >
                {" "}
                Explore Our Adventures
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

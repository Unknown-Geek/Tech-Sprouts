import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Register from "./Register";
import Contact from "./Contact";
import Payment from "./Payment";
import Loader from "./components/Loader";
import "./styles/index.css";
import logo from "../assets/logo.png";
import { useTheme } from "./components/ThemeContext";
import HamburgerIcon from "./components/HamburgerIcon";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/transitions.css";
import "./styles/duolingo-styles.css";

// ScrollToTop component that scrolls to the top when navigating to a new page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation(); // Use location hook to get current route
  const activeLink = location.pathname; // Set active link based on current pathname
  // We'll still use useTheme() but ignore the darkMode parts
  const { darkMode } = useTheme();

  return (
    <header className="bg-white text-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and brand */}{" "}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-30 animate-pulse"></div>
              <img
                src={logo}
                alt="Tech Sprouts Logo"
                className="h-10 w-10 rounded-full bg-white p-1 border-2 border-green-500 relative z-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-gray-800">
                Tech Sprouts
              </span>
              <span className="text-xs text-green-600 font-medium -mt-1">
                Learn. Create. Innovate.
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-1">
              {[
                { path: "/", label: "Home" },
                { path: "/courses", label: "Courses" },
                { path: "/register", label: "Register" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  {" "}
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 inline-flex items-center ${
                      activeLink === item.path
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://chat.whatsapp.com/J75hEOoDJIzGALTMxFo4Pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 border-2 border-green-500 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full shadow-sm transition-all duration-200 inline-flex items-center"
                >
                  <i className="fab fa-whatsapp text-green-600 mr-2"></i>
                  Join Group
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button - replaced with animated hamburger */}
            <HamburgerIcon
              isOpen={mobileMenuOpen}
              toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>{" "}
        {/* Mobile Navigation */}{" "}
        <div
          className={`md:hidden mobile-menu-container ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="pt-4 pb-3 border-t mt-3 border-gray-200 mobile-menu-content"
            style={{
              transform: mobileMenuOpen
                ? "translateY(0) scale(1)"
                : "translateY(-20px) scale(0.96)",
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/courses", label: "Courses" },
                { path: "/register", label: "Register" },
                { path: "/contact", label: "Contact" },
              ].map((item, index) => (
                <li
                  key={item.path}
                  className={mobileMenuOpen ? "mobile-menu-item" : ""}
                >
                  {" "}
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded-lg font-medium ${
                      activeLink === item.path
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className={mobileMenuOpen ? "mobile-menu-item" : ""}>
                <a
                  href="https://chat.whatsapp.com/J75hEOoDJIzGALTMxFo4Pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-lg shadow-sm transition-all duration-200 mt-3"
                >
                  <i className="fab fa-whatsapp text-green-600 mr-2"></i>
                  Join Our WhatsApp Group
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function App() {
  // We'll still use useTheme() but ignore the darkMode part
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen bg-gray-100 text-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="*" element={<PageTransitionWrapper />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-8 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 mb-4"
                >
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
                    className="inline-flex items-center border-2 border-green-500 text-green-400 hover:bg-gray-700 px-4 py-2 rounded-md transition-all duration-200"
                  >
                    <i className="fab fa-whatsapp text-green-400 text-lg mr-2"></i>
                    Join Our WhatsApp Group
                  </a>
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/tech-sprouts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/tech_sprouts?igsh=YXZzdGRseXVocGJh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
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
                  <li>Canva</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses"
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-green-400 transition"
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
              <div className="flex justify-center space-x-6 my-4">
                <a
                  href="https://www.linkedin.com/company/tech-sprouts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/tech_sprouts?igsh=YXZzdGRseXVocGJh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="https://chat.whatsapp.com/J75hEOoDJIzGALTMxFo4Pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Empowering students from Grade 5 to Grade 12 with technology
                education.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// PageTransitionWrapper for route transitions
function PageTransitionWrapper() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="page" timeout={400}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;

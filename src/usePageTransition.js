import { useState, useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionContext } from './App';

const usePageTransition = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("enter");
  const prevLocation = useRef(location);
  const transitioningRef = useRef(false);
  const { setIsTransitioning } = useContext(TransitionContext);
  
  // Uniform transition for all pages
  const getTransitionType = () => {
    return 'fade';
  };
  
  const currentTransition = getTransitionType();
  
  useEffect(() => {
    // Prevent duplicate transitions
    if (prevLocation.current.pathname === location.pathname || transitioningRef.current) {
      return;
    }
    
    // If we're navigating to a new route
    if (prevLocation.current.pathname !== location.pathname) {
      // Set transitioning flag to prevent multiple transitions
      transitioningRef.current = true;
      
      // Performance optimization: Prepare for transition
      document.body.style.overflow = 'hidden'; // Prevent scrolling during transition
      
      // Small timeout to ensure DOM is ready before starting animation
      // This helps prevent flashing
      setTimeout(() => {
        setTransitionStage("exit");
        setIsTransitioning(true);
      }, 10);
      
      // Update ref for next comparison
      prevLocation.current = location;
    }
  }, [location, setIsTransitioning]);
  
  const handleAnimationEnd = () => {
    if (transitionStage === "exit") {
      // Switch to enter state immediately
      setTransitionStage("enter");
      setDisplayLocation(location);
      // Scroll to top on new page
      window.scrollTo(0, 0);
    } else if (transitionStage === "enter") {
      // Animation complete
      setIsTransitioning(false);
      document.body.style.overflow = ''; // Restore scrolling
      transitioningRef.current = false; // Reset transitioning flag
    }
  };
  
  return {
    displayLocation,
    transitionStage,
    currentTransition,
    handleAnimationEnd
  };
};

export default usePageTransition; 
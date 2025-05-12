import React from 'react';
import styled from 'styled-components';
import usePageTransition from './usePageTransition';

const PageTransition = ({ children }) => {
  const { 
    displayLocation, 
    transitionStage, 
    currentTransition, 
    handleAnimationEnd 
  } = usePageTransition();
  
  return (
    <TransitionContainer 
      className={`${transitionStage} ${currentTransition}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </TransitionContainer>
  );
};

const TransitionContainer = styled.div`
  position: relative;
  min-height: 100vh;
  will-change: opacity, transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  
  &.enter {
    animation-duration: 270ms;
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1); /* elegant easing */
    animation-fill-mode: forwards;
    pointer-events: none;
  }
  
  &.exit {
    animation-duration: 220ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1); /* subtle exit easing */
    animation-fill-mode: forwards;
    pointer-events: none;
  }
  
  /* New elegant slide-and-fade transition - fixed to prevent flashing */
  &.fade.enter {
    animation-name: elegantEnter;
  }
  
  &.fade.exit {
    animation-name: elegantExit;
  }
  
  /* Keyframes for elegant slide-and-fade transitions - optimized to prevent flashing */
  @keyframes elegantEnter {
    0% {
      opacity: 0;
      transform: translate3d(0, 15px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes elegantExit {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -15px, 0);
    }
  }
`;

export default PageTransition; 
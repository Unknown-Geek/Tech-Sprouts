import React, { useRef, useEffect, useState } from "react";

const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 12,
  scaleOnHover = 1.1,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent = null,
  className = "",
  imageStyle = {},
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateY = ((x - centerX) / centerX) * rotateAmplitude;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`;
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={`tilted-card-container ${className}`}
      style={{ height: containerHeight, width: containerWidth }}
    >
      {showMobileWarning && isMobile && (
        <div className="mobile-warning text-xs text-gray-500 mb-2">
          Tilt effect disabled on mobile
        </div>
      )}

      <div
        ref={cardRef}
        className="tilted-card relative cursor-pointer transition-transform duration-200 ease-out"
        style={{
          height: containerHeight,
          width: containerWidth,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg">
          {" "}
          <img
            src={imageSrc}
            alt={altText}
            className="object-cover"
            style={{
              height: imageHeight,
              width: imageWidth,
              ...imageStyle,
            }}
          />
          {displayOverlayContent && overlayContent && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center">{overlayContent}</div>
            </div>
          )}
          {showTooltip && isHovered && !isMobile && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
              {captionText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TiltedCard;

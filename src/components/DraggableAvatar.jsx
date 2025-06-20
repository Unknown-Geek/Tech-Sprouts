import React, { useState, useRef, useEffect, useCallback } from "react";

const DraggableAvatar = ({
  children,
  className,
  initialPosition = { x: 0, y: 0 },
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showBounce, setShowBounce] = useState(false);
  const avatarRef = useRef(null); // Update position when window resizes to maintain relative positioning
  useEffect(() => {
    const handleResize = () => {
      const heroContainer = document.querySelector(".duolingo-hero");
      if (heroContainer && avatarRef.current) {
        const containerRect = heroContainer.getBoundingClientRect();
        const avatarSize = 70; // Updated to match CSS size

        // Constrain current position to new container bounds
        setPosition((prev) => ({
          x: Math.max(
            10,
            Math.min(prev.x, containerRect.width - avatarSize - 10)
          ),
          y: Math.max(
            10,
            Math.min(prev.y, containerRect.height - avatarSize - 10)
          ),
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getConstrainedPosition = useCallback(
    (clientX, clientY) => {
      const heroContainer = document.querySelector(".duolingo-hero");
      if (!heroContainer || !avatarRef.current)
        return { x: position.x, y: position.y };

      const containerRect = heroContainer.getBoundingClientRect();
      const avatarSize = 70; // Updated to match CSS size

      // Calculate position relative to the drag start offset
      let newX = clientX - containerRect.left - dragStart.x;
      let newY = clientY - containerRect.top - dragStart.y;

      // Constrain to container bounds with padding
      newX = Math.max(
        10,
        Math.min(newX, containerRect.width - avatarSize - 10)
      );
      newY = Math.max(
        10,
        Math.min(newY, containerRect.height - avatarSize - 10)
      );

      return { x: newX, y: newY };
    },
    [dragStart, position]
  );
  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!avatarRef.current) return;

    const rect = avatarRef.current.getBoundingClientRect();
    const heroContainer = document.querySelector(".duolingo-hero");

    if (!heroContainer) return;

    const containerRect = heroContainer.getBoundingClientRect();

    // Calculate the offset from the mouse to the avatar's current position
    setDragStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsDragging(true);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const newPos = getConstrainedPosition(e.clientX, e.clientY);
      setPosition(newPos);
    },
    [isDragging, getConstrainedPosition]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setShowBounce(true);
      setTimeout(() => setShowBounce(false), 600);
    }
  }, [isDragging]);
  const handleTouchStart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!avatarRef.current) return;

    const touch = e.touches[0];
    const rect = avatarRef.current.getBoundingClientRect();
    const heroContainer = document.querySelector(".duolingo-hero");

    if (!heroContainer) return;

    setDragStart({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });

    setIsDragging(true);
  };

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      const newPos = getConstrainedPosition(touch.clientX, touch.clientY);
      setPosition(newPos);
    },
    [isDragging, getConstrainedPosition]
  );

  const handleTouchEnd = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setShowBounce(true);
      setTimeout(() => setShowBounce(false), 600);
    }
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  const combinedClassName = `${className} ${isDragging ? "dragging" : ""} ${
    showBounce ? "bounce" : ""
  }`;

  return (
    <div
      ref={avatarRef}
      className={combinedClassName}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "absolute",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  );
};

export default DraggableAvatar;

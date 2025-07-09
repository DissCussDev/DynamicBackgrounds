import React, { useState, useEffect, useCallback } from 'react';
import './StarTrails.css';

const StarTrails = () => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';

      // Generate a random position for the star, ensuring it's not too close to the cursor
      const avoidanceRadius = 150;
      let x, y;
      do {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
      } while (Math.sqrt(Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2)) < avoidanceRadius);

      const size = Math.random() * 3 + 1; // Star size between 1px and 4px
      const hue = Math.floor(Math.random() * 360); // Random color

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = `hsl(${hue}, 90%, 70%)`;
      star.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px hsl(${hue}, 90%, 70%)`;

      document.body.appendChild(star);

      // Remove the star after its animation completes
      setTimeout(() => {
        star.remove();
      }, 2000); // This should match the animation duration in the CSS
    };

    // Create a new star every 50 milliseconds
    const interval = setInterval(createStar, 50);

    return () => clearInterval(interval);
  }, [mousePos]); // Rerun effect if mousePos changes to get the most up-to-date position

  return <div className="star-trails-container" />;
};

export default StarTrails;
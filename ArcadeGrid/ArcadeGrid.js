import React, { useEffect } from 'react';
import './ArcadeGrid.css';

const ArcadeGrid = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const grid = document.getElementById('interactive-grid');
      const xOffset = e.clientX * 2;
      if (grid) {
        // We set CSS custom properties to the mouse coordinates
        grid.style.setProperty('--mouse-x', `${xOffset}px`);
        grid.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="arcade-container">
      <div id="interactive-grid" className="grid"></div>
      <div className="glow-overlay"></div>
    </div>
  );
};

export default ArcadeGrid;
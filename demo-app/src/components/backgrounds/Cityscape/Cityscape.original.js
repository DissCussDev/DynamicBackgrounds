import React, { useState, useEffect } from 'react';
import './Cityscape.css';

// Helper function to generate a range of numbers
const range = (start, end) => Array.from({ length: end - start }, (_, i) => i + start);

// Helper to generate a unique set of random numbers
const getRandomSubset = (arr, size) => arr.sort(() => 0.5 - Math.random()).slice(0, size);

const Building = ({ width, height, windowRows, windowCols, zIndex }) => {
  const totalWindows = windowRows * windowCols;
  const [litWindows, setLitWindows] = useState([]);

  useEffect(() => {
    // Initially light up a random subset of windows
    setLitWindows(getRandomSubset(range(0, totalWindows), Math.floor(totalWindows * 0.4)));

    // Set an interval to change the lights periodically
    const interval = setInterval(() => {
      setLitWindows(getRandomSubset(range(0, totalWindows), Math.floor(totalWindows * 0.4)));
    }, 3000 + Math.random() * 2000); // Change lights every 3-5 seconds

    return () => clearInterval(interval);
  }, [totalWindows]);

  const buildingStyle = {
    width: `${width}px`,
    height: `${height}px`,
    zIndex: zIndex,
  };

  const windowsGridStyle = {
    gridTemplateRows: `repeat(${windowRows}, 1fr)`,
    gridTemplateColumns: `repeat(${windowCols}, 1fr)`,
  };

  return (
    <div className="building" style={buildingStyle}>
      <div className="windows-grid" style={windowsGridStyle}>
        {range(0, totalWindows).map(i => (
          <div key={i} className={`window ${litWindows.includes(i) ? 'lit' : ''}`}></div>
        ))}
      </div>
    </div>
  );
};

const NighttimeCityscape = () => {
  return (
    <div className="cityscape-container">
      <div className="sky">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="moon"></div>
      </div>
      <div className="city-silhouette">
        {/* You can customize the city by changing these props */}
        <Building width={150} height={950} windowRows={24} windowCols={6} zIndex={5} />
        <Building width={120} height={350} windowRows={18} windowCols={7} zIndex={4} />
        <Building width={190} height={800} windowRows={15} windowCols={5} zIndex={6} />
        <Building width={250} height={500} windowRows={20} windowCols={8} zIndex={3} />
        <Building width={110} height={280} windowRows={14} windowCols={6} zIndex={7} />
      </div>
    </div>
  );
};

export default NighttimeCityscape;
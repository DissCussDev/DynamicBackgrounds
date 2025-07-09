import React from 'react';
import './DesertLandscape.css';

const DesertLandscape = () => {
  return (
    <div className="landscape-container">
      <div className="sky">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="sun"></div>
      <div className="dunes">
        <div className="dune dune1"></div>
        <div className="dune dune2"></div>
        <div className="dune dune3"></div>
      </div>
    </div>
  );
};

export default DesertLandscape;
import React, { useState, useEffect } from 'react';
import './RealTimeSky.css';

const RealTimeSky = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every minute to keep the sky in sync
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getSkyStyle = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const currentTime = hours + minutes / 60;

    let gradient;
    // Morning (5am - 11am)
    if (currentTime >= 5 && currentTime < 11) {
      gradient = 'linear-gradient(to top, #a1c4fd, #c2e9fb)';
    }
    // Afternoon (11am - 5pm)
    else if (currentTime >= 11 && currentTime < 17) {
      gradient = 'linear-gradient(to top, #6dd5ed, #2193b0)';
    }
    // Evening (5pm - 8pm)
    else if (currentTime >= 17 && currentTime < 20) {
      gradient = 'linear-gradient(to top, #f3904f, #3b4371)';
    }
    // Night (8pm - 5am)
    else {
      gradient = 'linear-gradient(to top, #191970, #0c0c1e)';
    }

    return { background: gradient };
  };

  const getCelestialPosition = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    
    // Calculate the position based on a 24-hour cycle (1440 minutes)
    const percentageOfDay = (totalMinutes / 1440) * 100;
    
    // This creates an arc path for the sun/moon
    const x = percentageOfDay;
    const y = 50 - 50 * Math.sin(Math.PI * percentageOfDay / 100);

    return { left: `${x}%`, top: `${y}%` };
  };
  
  const isDay = time.getHours() >= 6 && time.getHours() < 19;
  
  const getStarsOpacity = () => {
    const hours = time.getHours();
    if (hours >= 20 || hours < 5) return 1; // Full opacity deep in the night
    if (hours >= 5 && hours < 7) return (7 - (hours + time.getMinutes()/60)) / 2; // Fade out at dawn
    if (hours >= 18 && hours < 20) return ((hours + time.getMinutes()/60) - 18) / 2; // Fade in at dusk
    return 0; // No stars during the day
  }

  return (
    <div className="sky-container" style={getSkyStyle()}>
      <div className="stars-wrapper" style={{opacity: getStarsOpacity()}}>
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="celestial-body" style={getCelestialPosition()}>
        {isDay ? <div className="sun"></div> : <div className="moon"></div>}
      </div>
    </div>
  );
};

export default RealTimeSky;
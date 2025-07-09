import React, { useEffect, useMemo } from 'react';
import './MysticForest.css';

const Firefly = ({ id }) => {
  // Memoize random values so they don't change on re-render
  const styles = useMemo(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationName: `float${Math.ceil(Math.random() * 3)}`,
    animationDuration: `${Math.random() * 10 + 5}s`,
    animationDelay: `${Math.random() * 10}s`,
  }), []);

  return <div className="firefly" style={styles}></div>;
};

const MysticForest = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById('forest-container');
      if (container) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight } = currentTarget;
        
        // Calculate mouse position as a value from -1 to 1
        const x = (clientX / clientWidth - 0.5) * 2;
        const y = (clientY / clientHeight - 0.5) * 2;
        
        container.style.setProperty('--mouse-x', x);
        container.style.setProperty('--mouse-y', y);
      }
    };
    
    const container = document.getElementById('forest-container');
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fireflies = useMemo(() => Array.from({ length: 20 }, (_, i) => <Firefly key={i} />), []);

  return (
    <div id="forest-container" className="forest-container">
      <div className="forest-layer layer-bg"></div>
      <div className="forest-layer layer-fog"></div>
      <div className="forest-layer layer-3"></div>
      <div className="forest-layer layer-2"></div>
      <div className="forest-layer layer-1"></div>
      <div className="fireflies-container">{fireflies}</div>
    </div>
  );
};

export default MysticForest;
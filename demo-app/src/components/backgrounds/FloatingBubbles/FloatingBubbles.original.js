import React, { useState, useEffect } from 'react';
import './FloatingBubbles.css';

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate a set of initial bubbles
    const initialBubbles = Array.from({ length: 25 }, (_, i) => createBubble(i));
    setBubbles(initialBubbles);

    // Add new bubbles periodically
    const interval = setInterval(() => {
      setBubbles(prevBubbles => [...prevBubbles.slice(1), createBubble(Date.now())]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const createBubble = (key) => {
    const size = Math.random() * 60 + 20; // Bubble size between 20px and 80px
    const left = Math.random() * 100; // Horizontal position
    const animationDuration = Math.random() * 15 + 10; // Animation duration between 10s and 25s
    const animationDelay = Math.random() * 5; // Animation delay up to 5s

    return {
      id: key,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
      },
    };
  };

  const handleBubbleClick = (id) => {
    const bubbleElement = document.getElementById(`bubble-${id}`);
    if (bubbleElement) {
      bubbleElement.classList.add('pop');
      // Remove the bubble from the DOM after the pop animation completes
      setTimeout(() => {
        setBubbles(prevBubbles => prevBubbles.filter(bubble => bubble.id !== id));
      }, 500); // Must match the duration of the 'pop' animation
    }
  };

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          id={`bubble-${bubble.id}`}
          className="bubble"
          style={bubble.style}
          onClick={() => handleBubbleClick(bubble.id)}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
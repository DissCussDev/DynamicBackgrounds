import React,
{
  useEffect
} from 'react';
import './BioluminescentReef.css';

const BioluminescentReef = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById('reef-container');
      if (container) {
        const {
          clientX,
          clientY,
          currentTarget
        } = e;
        const {
          clientWidth,
          clientHeight
        } = currentTarget;

        const x = clientX / clientWidth;
        const y = clientY / clientHeight;

        container.style.setProperty('--mouse-x', `${x * 100}%`);
        container.style.setProperty('--mouse-y', `${y * 100}%`);

        const p_x = (x - 0.5) * 2;
        const p_y = (y - 0.5) * 2;
        container.style.setProperty('--parallax-x', p_x);
        container.style.setProperty('--parallax-y', p_y);
      }
    };

    const container = document.getElementById('reef-container');
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ( <
    div id = "reef-container"
    className = "reef-container" >
    <
    div className = "particles" > {
      /* Particles are generated purely in CSS for performance */ } <
    /div> <
    div className = "reef-layer layer-4" > < /div> <
    div className = "reef-layer layer-3" > < /div> <
    div className = "reef-layer layer-2" > < /div> <
    div className = "reef-layer layer-1" > < /div> <
    /div>
  );
};

export default BioluminescentReef;
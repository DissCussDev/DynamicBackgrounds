import React, { useState, lazy, Suspense } from 'react';
import './App.css';

const backgrounds = [
  { name: 'Cityscape', component: lazy(() => import('./components/backgrounds/Cityscape/Cityscape')) },
  { name: 'DesertLandscape', component: lazy(() => import('./components/backgrounds/DesertLandscape/DesertLandscape')) },
  { name: 'FloatingBubbles', component: lazy(() => import('./components/backgrounds/FloatingBubbles/FloatingBubbles')) },
  { name: 'MysticForest', component: lazy(() => import('./components/backgrounds/MysticForest/MysticForest')) },
  { name: 'RealTimeSky', component: lazy(() => import('./components/backgrounds/RealTimeSky/RealTimeSky')) },
  { name: 'SpectrumLoader', component: lazy(() => import('./components/backgrounds/SpectrumLoader/SpectrumLoader')) },
  { name: 'StarTrails', component: lazy(() => import('./components/backgrounds/StarTrails/StarTrails')) },
];

function App() {
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleBackgroundSelection = (background) => {
    setSelectedBackground(background);
  };

  const CurrentBackground = selectedBackground ? selectedBackground.component : null;

  return (
    <div className="App">
      <div className="background-selector">
        <h2>Select a Background</h2>
        <div className="background-panels">
          {backgrounds.map((bg) => (
            <div
              key={bg.name}
              className={`background-panel ${selectedBackground && selectedBackground.name === bg.name ? 'selected' : ''}`}
              onClick={() => handleBackgroundSelection(bg)}
            >
              {bg.name}
            </div>
          ))}
        </div>
      </div>
      <div className="background-container">
        <Suspense fallback={<div>Loading...</div>}>
          {CurrentBackground && <CurrentBackground />}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
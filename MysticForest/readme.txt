Mystic Forest Parallax Background
This component builds a multi-layered forest scene. The parallax effect is achieved by tracking the mouse and shifting each layer at a different speed. The fireflies are all individually animated for a natural, random feel. It's a perfect background for creating a calm and enchanting atmosphere.


How It Works
Parallax Effect: This is the core of the 3D illusion. The component tracks the mouse's position and calculates its location relative to the center of the screen (from -1 to 1 on both axes). This value is stored in CSS custom properties (--mouse-x and --mouse-y). Each tree layer (.layer-1, .layer-2, etc.) uses these variables with calc() in its transform property. By multiplying the mouse position by a different negative amount for each layer, the layers shift at different speeds, creating a convincing sense of depth.

Layered Scenery: The scene is built with multiple divs layered on top of each other. The tree silhouettes are created using inlined SVGs as background images. This makes the component entirely self-contained without needing external image files, and SVGs stay perfectly crisp at any resolution.

Randomized Fireflies: The Firefly component is designed to be unique. By using useMemo, we ensure that each firefly gets and keeps its own random starting position and animation properties (duration, delay, animation-name). This prevents all the fireflies from moving in sync and makes the effect feel much more natural and organic.

Atmosphere: A simple linear-gradient creates the fog effect, which is slowly animated with transform: translateX to make it drift across the scene. The dark, cool color palette and the glowing fireflies complete the magical, nighttime ambiance.

I'm quite pleased with how this concept turned out! Just drop the <MysticForest /> component into your app to add a touch of enchantment and interactive depth to your background.
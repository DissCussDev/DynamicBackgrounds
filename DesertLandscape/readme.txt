Animated Desert Landscape Background
This component creates a multi-layered desert scene using only HTML and CSS. It features rolling dunes in the foreground, a distant mountain range, a slowly setting sun, and twinkling stars that emerge as the sky darkens. The entire scene is responsive and created without any external libraries or images.


How It Works
React Component (DesertLandscape.js):

The component's structure is purely semantic, providing the necessary div elements for the CSS to target. We have containers for the sky, sun, and the dunes.

Inside the sky, we have two layers for stars to create a more dynamic and less uniform celestial effect.

The dunes container holds three individual dune elements, which will be layered to create a sense of depth.

CSS (DesertLandscape.css):

Sky & Sun Animation: The background of the .sky element is a linear-gradient that animates over 30 seconds, smoothly transitioning from a warm sunset orange/purple to a deep navy blue and back again. The .sun follows a path, moving down the screen and changing color until it disappears below the horizon, perfectly synchronized with the sky's color change.

Starfield: I've used a clever trick here. The star backgrounds are tiny, inlined SVGs. This avoids external requests and keeps the component self-contained. The .stars layer fades in as the sky darkens. The .twinkling layer does the same but also has a separate, faster twinkle animation that pulses its opacity, bringing the night sky to life.

Dunes Creation: This is the core of the landscape illusion. The .dune elements are styled with a border-radius of 50% / 100%, which creates an elliptical curve at the top. By setting the bottom radii to zero, we get a perfect dune shape. By layering three of these with different sizes, colors, and z-index values, we create a beautiful, non-uniform desert foreground.

Simply add the <DesertLandscape /> component to your app, and your background will become a tranquil, ever-changing desert scene. Enjoy the peaceful view!
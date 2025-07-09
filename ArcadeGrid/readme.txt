Interactive 80s Arcade Grid
This component uses modern CSS techniques to generate a retro-futuristic grid. A "spotlight" follows your cursor, illuminating the grid lines as you move, while a subtle animation makes the grid feel like it's constantly scrolling towards a digital horizon.


How It Works
3D Perspective: The magic starts in the .arcade-container which has a perspective property. This creates a 3D space. The grid itself is then tilted back using transform: rotateX(75deg), giving the illusion of a floor stretching into the distance.

The Interactive Grid: The grid effect is achieved by layering multiple background-image gradients on a single div.

Spotlight: The top layer is a radial-gradient centered at the mouse's coordinates (var(--mouse-x) and var(--mouse-y)). This creates a circle of neon light that moves with your cursor.

Grid Lines: Two repeating-linear-gradient layers are used to draw the horizontal and vertical lines of the grid.

Mouse Tracking with CSS Variables: The React component uses a useEffect hook to listen for the mousemove event. When the mouse moves, it updates CSS custom properties (--mouse-x and --mouse-y) on the grid element. The CSS radial-gradient directly uses these variables, allowing the spotlight to track the mouse in real-time without needing to cause constant React re-renders.

Endless Scrolling: The scrollGrid animation continuously changes the translateY position of the grid, making it appear as if you are flying over it endlessly. Because it's a repeating gradient, the pattern is seamless.

Atmospheric Touches: The .glow-overlay adds the finishing touches. A vignette effect darkens the edges, and a transparent repeating-linear-gradient creates subtle "scanlines," mimicking the look of an old CRT arcade monitor.

Just plug the <ArcadeGrid /> component into your app, and you'll be transported back to the golden age of arcades. It's a totally awesome and tubular background for any project!
Real-Time Day/Night Cycle Background
This component uses the client's current time to create a synchronized sky. It calculates the sun/moon position and the color of the sky, updating every minute to stay accurate. It's a beautiful, ambient addition to any application.

How It Works
Real-Time Sync: The component initializes with the user's current new Date(). A useEffect hook sets up a timer that updates the time state every 60 seconds. This re-renders the component and keeps the visuals in sync with the actual time.

Dynamic Sky: The getSkyStyle function checks the current hour and returns the appropriate CSS linear-gradient. I've defined four distinct periods—Morning, Afternoon, Evening, and Night—each with a unique color scheme. The CSS transition property on the container ensures a very slow, smooth blend between these states as time progresses.

Celestial Path: The getCelestialPosition function is the heart of the animation. It calculates the total number of minutes that have passed in the day and converts that into a percentage. Using a Math.sin() formula, it plots this percentage along a beautiful arc that mimics the natural path of the sun and moon across the sky.

Sun & Moon Swap: A simple boolean, isDay, checks if the current hour is within a typical daytime range. This is used in a ternary operator to conditionally render either the .sun or the .moon div. The moon is cleverly styled using box-shadow to create its crescent shape.

Adaptive Stars: The getStarsOpacity function makes the stars appear and disappear realistically. It returns an opacity of 1 (fully visible) during the night and 0 (invisible) during the day. During the transition hours of dawn and dusk, it calculates a fractional opacity, causing the stars to fade in or out gradually.

Just drop the <RealTimeSky /> component into your project, and your background will transform into a living, breathing sky that perfectly matches the rhythm of the user's day. Enjoy this personalized slice of the cosmos!
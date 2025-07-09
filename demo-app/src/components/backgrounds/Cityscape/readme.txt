Dynamic Nighttime Cityscape
This component builds a city skyline from the ground up. It programmatically generates buildings and their windows, then uses React's state and timers to randomly change which windows are lit, creating the illusion of a living, breathing city.

How It Works
Component-Based Buildings: The design is modular. A single Building component is responsible for creating one skyscraper. In the main NighttimeCityscape component, you can easily add, remove, or modify the properties of each Building to customize your city's skyline.

Dynamic Windows:

The Building component calculates the total number of windows it will have based on its windowRows and windowCols props.

It uses a useEffect hook to manage which windows are lit. When the component first mounts, it randomly selects about 40% of the windows to be "on."

A setInterval then fires every few seconds to pick a new random set of lit windows. This creates the dynamic effect of lights turning on and off throughout the city.

CSS Grid for Windows: I've used display: grid to effortlessly create the window matrix. This is a modern and highly efficient way to handle this kind of layout. grid-template-rows and grid-template-columns create the perfect grid based on the props passed to the Building component.

The "Lit" Effect: A window that is meant to be on receives the .lit class. This class changes the background-color to a warm gold and, most importantly, adds a box-shadow to create that beautiful, soft glow effect that makes the light look realistic. The transition on the .window class ensures the lights fade on and off smoothly.

Atmosphere: The familiar sky elements from previous designs—a dark gradient, a crescent moon, and twinkling stars—are added to provide a complete and atmospheric backdrop for the city.

Simply embed the <NighttimeCityscape /> component, and you'll have a stunning, living urban skyline as the background for your application. Enjoy the view from your new virtual penthouse!
Interactive Bioluminescent Reef
This component creates a multi-layered deep-sea environment. The key feature is the interactive glow effect. The sea plants have a hidden, vibrant color that is only revealed by a "light mask" that follows your cursor. This, combined with a gentle parallax effect and swaying animations, creates a truly immersive and magical experience.



How It Works
The mask-image Technique: This is the secret to the interactive glow. Each colorful flora layer has a mask-image property applied to it. The mask is a radial-gradient that is transparent on the outside and solid white in the center. This mask is positioned using the --mouse-x and --mouse-y variables. The white part of the mask reveals the element, while the transparent part hides it. The result is a "spotlight" that only shows the parts of the sea plants you are currently hovering over.

Vibrant Flora: The plants themselves are made from inlined SVG backgrounds, each with a bright, neon color (fill='%23...'). They would be fully visible if not for the mask hiding them. The very front layer is a dark silhouette with its mask disabled, which helps frame the scene and enhance the glowing effect.

Parallax & Sway: Just like in the forest, a mousemove event listener updates CSS custom variables that are used in transform properties to create a parallax depth effect. A gentle, slow sway animation is also applied to each layer to simulate underwater currents, with different animation-delay values to desynchronize their movements.

Marine Snow: The floating particles are created with a clever CSS trick. A single 1px div is given a massive, multi-part box-shadow, with each shadow creating a new "particle" at a different position on the screen. The entire div is then animated to drift upwards slowly, giving the impression of countless floating particles with minimal performance cost.

I hope you enjoy this dive into the deep! Simply add the <BioluminescentReef /> component to your project to create a truly unique and interactive underwater sanctuary.
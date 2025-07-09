ZX Spectrum Loading Screen
This component uses CSS animations to replicate the distinctive, colorful border flash of a ZX Spectrum loading a program from a cassette tape. It's designed to be as authentic as possible, right down to the color palette and text style, to maximize that retro vibe.


How It Works
Authentic Palette: I've defined the official ZX Spectrum 8-color palette (in their "bright" variants) as CSS variables for easy reuse and authenticity.

The Border Illusion: The flashing border isn't a border property in the traditional sense. It's actually the background of the parent .zx-border container, visible because of the padding applied to it. This gives us much more control over its appearance.

Gradient Animation: The core of the effect is the border-flash animation. It's a @keyframes rule that cycles through four different repeating-linear-gradient backgrounds. Each gradient creates the iconic thick stripes of color (Cyan/Red and Yellow/Blue). The animation uses steps(1, end) to create the sharp, instantaneous jumps between colors rather than a smooth fade, perfectly mimicking the original hardware.

The "Screen": The .zx-screen div sits inside the border container. It has the characteristic "paper" color (in this case, cyan) and "ink" color (black). I've used a system-native monospace font (Courier New) which gives a reasonably authentic, blocky feel without needing to load an external font file.

Nostalgic Details: A subtle ::after pseudo-element is layered on top of the screen to create faint horizontal scanlines, adding to the retro CRT monitor feel.

Just embed the <ZxSpectrumLoader /> component in your app, and you'll be hit with a wave of 8-bit nostalgia. All that's missing is the high-pitched loading screech!
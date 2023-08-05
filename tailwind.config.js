/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-decorator": "rgba(151, 151, 151, 0.1036)",
        primary: "#D0D6F9",
        secondary: "#FFFFFF",
        "gray-text": "rgba(255, 255, 255, 0.4951)",
      },
      backgroundImage: {
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "launch-vehicle-mobile":
          "url('/assets/technology/image-launch-vehicle-landscape.jpg')",
        "launch-vehicle-portrait":
          "url('/assets/technology/image-launch-vehicle-portrait.jpg')",
        "spaceport-portrait": "url('/assets/technology/image-spaceport.jpg')",
        "space-capsule-portrait": "url('/assets/technology/image-space-capsule-portrait.jpg')",
      },
      fontSize: {
        "10xl": "10rem",
      },
      maxHeight: {
        128: "50rem",
      },
      minHeight: {
        imgContainer: "16rem",
      },
    },
  },
  plugins: [],
};

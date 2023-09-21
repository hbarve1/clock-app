const siteConfig = {
  appName: "Clock",
  appShortName: "Clock",
  title: "Clock",
  description: "Simple clock app.",
  keywords: "time, hora, hour, minute, seconds, Clock",
  url: "https://clock.hbarve1.com",
  theme: {
    primary: "#FEF2E5",
    secondary: "#ffffff",
    text: "#FEF2E5",
    background: "#361C00",
    bg: "#F3F6EF",
    "icon-gradient-0": "#FD9245",
    "icon-gradient-1": "#06A96B",
    font: "#1E2314",
    slogan: "#323728",
  },
  assets: {
    favicon: "favicon.ico",
    appleTouchIcon: "https://cdn.hbarve1.com/clock/logos/logo-192.png",
    maskedIcon: "https://cdn.hbarve1.com/clock/logos/logo.svg",
    icons: [
      {
        src: "https://cdn.hbarve1.com/clock/logos/logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://cdn.hbarve1.com/clock/logos/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "https://cdn.hbarve1.com/clock/logos/logo-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};

export default siteConfig;

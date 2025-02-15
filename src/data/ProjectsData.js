import crypto from "../assets/Crypto-tracker.png";
import spotify from "../assets/Spotify.png";
import netflix from "../assets/Netflix.png";

export const projects = [
  {
    id: 1,
    name: "Crypto Price Tracker",
    description:
      "Real-time cryptocurrency price tracking application with market data visualization",
    technologies: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
    image: crypto,
    liveLink: "https://liladhar-crypto-price-tracker.netlify.app/",
    githubLink: "https://github.com/Liladharithole/crypto-price-tracker",
  },

  {
    id: 2,
    name: "Netflix Clone",
    description:
      "A clone of Netflix's UI featuring responsive design and movie streaming simulation",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: netflix,
    liveLink: "https://liladhar-ott-clone-01.netlify.app/",
    githubLink: "https://github.com/Liladharithole/netflix-clone",
  },
  {
    id: 3,
    name: "Spotify Clone",
    description:
      "A clone of Spotify's web player implementing music streaming and playlist management",
    technologies: ["React", "Tailwind CSS", "Spotify API"],
    image: spotify,
    liveLink: "https://liladhar-spotify-clone.netlify.app",
    githubLink: "https://github.com/Liladharithole/spotify-clone",
  },
];

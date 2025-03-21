import crypto from "../assets/Crypto-tracker.png";
import spotify from "../assets/Spotify.png";
import netflix from "../assets/Netflix.png";
import Fooddel from "../assets/food-del-1.png";

export const projects = [
  {
    id: 1,
    name: "Crypto Price Tracker",
    description:
      "Real-time cryptocurrency price tracking application with market data visualization",
    technologies: ["React", "API Integration", "Chart.js", "CSS"],
    image: crypto,
    liveLink: "https://liladhar-crypto-price-tracker.netlify.app/",
    githubLink: "https://github.com/Liladharithole/crypto-price-tracker",
  },

  {
    id: 2,
    name: "Food Delivery Website - Frontend",
    description:
      "A React-based front-end for a food delivery platform with interactive food catalog, shopping cart, user authentication, and streamlined checkout process.",
    technologies: ["React", "React Router", "Context API", "CSS"],
    image: Fooddel, 
    liveLink: "https://food-delivery-site-1-60cd.onrender.com/",
    githubLink: "https://github.com/Liladharithole/food-delivery-site-1/tree/main/front-end",
  },

  {
    id: 3,
    name: "Spotify Clone",
    description:
      "A clone of Spotify's web player implementing music streaming and playlist management",
    technologies: ["React", "Tailwind CSS"],
    image: spotify,
    liveLink: "https://liladhar-spotify-clone.netlify.app",
    githubLink: "https://github.com/Liladharithole/spotify-clone",
  },
];

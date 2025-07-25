import crypto from "../assets/Crypto-tracker.png";
import spotify from "../assets/Spotify.png";
import netflix from "../assets/Netflix.png";
import Fooddel from "../assets/food-del-1.png";
import Quick_blog_ai from "../assets/Quick_blog_ai.pmg.png";

export const projects = [
  {
    id: 1,
    name: "Quick Blog AI",
    description:
      "A MERN stack blog platform with AI-powered content generation using Google Gemini, featuring an admin dashboard, rich text editor, and user authentication.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Gemini AI",
      "Tailwind CSS",
      "JWT Authentication",
      "ImageKit",
      "Quill.js",
    ],
    image: Quick_blog_ai,
    liveLink: "https://quick-blog-ai-client.vercel.app/",
    githubLink: "https://github.com/Liladharithole/Quick-Blog-AI",
  },
  {
    id: 2,
    name: "Crypto Price Tracker",
    description:
      "Real-time cryptocurrency price tracking application with market data visualization",
    technologies: ["React", "API Integration", "Chart.js", "CSS"],
    image: crypto,
    liveLink: "https://liladhar-crypto-price-tracker.netlify.app/",
    githubLink: "https://github.com/Liladharithole/crypto-price-tracker",
  },

  {
    id: 3,
    name: "Food Delivery Website - Frontend",
    description:
      "A React-based front-end for a food delivery platform with interactive food catalog, shopping cart, user authentication, and streamlined checkout process.",
    technologies: ["React", "React Router", "Context API", "CSS"],
    image: Fooddel,
    liveLink: "https://food-delivery-site-1-60cd.onrender.com/",
    githubLink:
      "https://github.com/Liladharithole/food-delivery-site-1/tree/main/front-end",
  },

  {
    id: 4,
    name: "Spotify Clone",
    description:
      "A clone of Spotify's web player implementing music streaming and playlist management",
    technologies: ["React", "Tailwind CSS"],
    image: spotify,
    liveLink: "https://liladhar-spotify-clone.netlify.app",
    githubLink: "https://github.com/Liladharithole/spotify-clone",
  },
];

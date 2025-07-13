import React, { useEffect, useRef, useState, useMemo } from "react";

// const Moon = () => {
//   const [currentTime, setCurrentTime] = useState(0);
//   const containerRef = useRef(null);
//   const animationRef = useRef();
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   // Update time for smooth animation
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       // Get current time in milliseconds since midnight
//       const hours = now.getHours();
//       const minutes = now.getMinutes();
//       const seconds = now.getSeconds();
//       const milliseconds = now.getMilliseconds();
//       const timeInDay =
//         hours * 60 * 60 * 1000 +
//         minutes * 60 * 1000 +
//         seconds * 1000 +
//         milliseconds;

//       // 5-hour cycle in milliseconds
//       const cycleDuration = 5 * 60 * 60 * 50;

//       // Calculate progress through the cycle (0 to 1)
//       const cycleProgress = (timeInDay % cycleDuration) / cycleDuration;

//       setCurrentTime(cycleProgress);
//       animationRef.current = requestAnimationFrame(updateTime);
//     };

//     // Start the animation
//     updateTime();

//     // Cleanup
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []); // Removed startTime from dependencies

//   // Get container dimensions
//   useEffect(() => {
//     if (containerRef.current) {
//       const updateSize = () => {
//         setDimensions({
//           width: containerRef.current.offsetWidth,
//           height: containerRef.current.offsetHeight,
//         });
//       };

//       updateSize();
//       window.addEventListener("resize", updateSize);
//       return () => window.removeEventListener("resize", updateSize);
//     }
//   }, []);

//   // 29.5-day moon phase cycle (lunar month)
//   const moonPhase = useMemo(() => {
//     const now = new Date();
//     // Calculate days since known new moon (e.g., July 8, 2025 was a new moon)
//     const knownNewMoon = new Date("2025-07-08T00:00:00Z").getTime();
//     const daysSinceNewMoon = (now - knownNewMoon) / (1000 * 60 * 60 * 24);
//     // Calculate phase (0 to 1) based on 29.5-day cycle
//     const phase = (daysSinceNewMoon % 29.5) / 29.5;
//     return phase;
//   }, [currentTime]); // Still update with currentTime for smooth animation

//   // Calculate position based on current time in the 5-hour cycle
//   const position = useMemo(() => {
//     if (!dimensions.width || !dimensions.height) return { x: 0, y: 0 };

//     // Calculate angle (0 to 360 degrees in radians)
//     // Start from top-right (π/2) and go counter-clockwise
//     const angle = Math.PI / 2 - currentTime * Math.PI * 2;

//     // Adjust radius based on screen size
//     const radiusX = dimensions.width * (window.innerWidth < 768 ? 0.3 : 0.4);
//     const radiusY = dimensions.height * (window.innerWidth < 768 ? 0.3 : 0.4);

//     // Center point of the circle
//     const centerX = dimensions.width / 2;
//     const centerY = dimensions.height / 2;

//     // Calculate position on the circle
//     const x = centerX + Math.cos(angle) * radiusX;
//     const y = centerY + Math.sin(angle) * radiusY;

//     return { x, y };
//   }, [currentTime, dimensions]);

//   // Moon size with phase-based variation (fuller = larger)
//   const moonSize = useMemo(() => {
//     // Smaller base size for mobile
//     const baseSize = window.innerWidth < 768 ? 30 : 50;
//     // Make moon slightly larger when fuller
//     const phaseSize =
//       window.innerWidth < 768
//         ? 5 * Math.sin(moonPhase * Math.PI)
//         : 10 * Math.sin(moonPhase * Math.PI);
//     return baseSize + phaseSize;
//   }, [moonPhase]);

//   // Calculate moon phase mask with better visibility
//   const moonClipPath = useMemo(() => {
//     const size = 100; // Increased base size for the SVG viewBox

//     if (moonPhase < 0.5) {
//       // Waxing (new to full)
//       const radius = size * (0.5 - moonPhase);
//       return `circle(${size / 2}px at ${size * moonPhase}px ${size / 2}px)`;
//     } else {
//       // Waning (full to new)
//       const radius = size * (moonPhase - 0.5);
//       return `circle(${size / 2}px at ${size * (1 - moonPhase) * 2}px ${
//         size / 2
//       }px)`;
//     }
//   }, [moonPhase]);

//   // Add viewport meta tag for mobile
//   useEffect(() => {
//     const viewportMeta = document.querySelector('meta[name="viewport"]');
//     if (!viewportMeta) {
//       const meta = document.createElement("meta");
//       meta.name = "viewport";
//       meta.content =
//         "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
//       document.head.appendChild(meta);
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           width: `${moonSize}px`,
//           height: `${moonSize}px`,
//           transform: "translate(-50%, -50%)",
//           zIndex: 1,
//           transition: "all 0.5s ease-out",
//           filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))",
//           clipPath: moonClipPath,
//           WebkitClipPath: moonClipPath,
//         }}
//       >
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 100 100"
//           style={{
//             display: "block",
//           }}
//         >
//           <defs>
//             <radialGradient
//               id="moonGradient"
//               cx="40%"
//               cy="40%"
//               r="70%"
//               fx="30%"
//               fy="30%"
//             >
//               <stop offset="0%" stopColor="#ffffff" />
//               <stop offset="100%" stopColor="#e0e0e0" />
//             </radialGradient>
//           </defs>
//           <circle cx="50" cy="50" r="45" fill="url(#moonGradient)" />
//           <circle cx="60" cy="30" r="10" fill="rgba(255, 255, 255, 0.2)" />
//           <circle cx="45" cy="25" r="4" fill="rgba(255, 255, 255, 0.15)" />
//           <circle cx="30" cy="40" r="3" fill="rgba(255, 255, 255, 0.15)" />
//           <circle cx="55" cy="50" r="5" fill="rgba(255, 255, 255, 0.15)" />
//         </svg>
//       </div>
//     </div>
//   );
// };

const StarsBackground = () => {
  const [showMoon, setShowMoon] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to match parent
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star settings
    const stars = [];
    const STAR_COUNT = 100;
    const STAR_SPEED = 0.05;
    const STAR_SIZE = 1;

    // Comet settings
    const comets = [];
    const COMET_COUNT = 2;
    const COMET_LENGTH = 10;
    const COMET_MIN_SPEED = 1;
    const COMET_MAX_SPEED = 10;
    const COMET_SIZE = 0.5;

    // Create stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * STAR_SIZE + 0.5,
        speed: Math.random() * STAR_SPEED + 0.05,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    // Create comets
    for (let i = 0; i < COMET_COUNT; i++) {
      createComet();
    }

    function createComet() {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const speed =
        Math.random() * (COMET_MAX_SPEED - COMET_MIN_SPEED) + COMET_MIN_SPEED;

      // Random entry points from any edge
      let x, y, angle;
      const entryEdge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left

      switch (entryEdge) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = -50;
          angle = Math.random() * Math.PI * 0.5 + Math.PI * 0.25; // 45 to 135 degrees
          break;
        case 1: // Right
          x = canvas.width + 50;
          y = Math.random() * canvas.height;
          angle = Math.random() * Math.PI * 0.5 + Math.PI * 0.5; // 90 to 180 degrees
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 50;
          angle = Math.random() * Math.PI * 0.5 + Math.PI * 1.25; // 225 to 315 degrees
          break;
        case 3: // Left
          x = -50;
          y = Math.random() * canvas.height;
          angle = Math.random() * Math.PI * 0.5 - Math.PI * 0.25; // -45 to 45 degrees
          break;
      }

      comets.push({
        x,
        y,
        speed,
        direction,
        tail: Array(COMET_LENGTH)
          .fill()
          .map(() => ({ x: 0, y: 0 })),
        nextPoint: 0,
        size: COMET_SIZE,
        angle,
        brightness: 0.8 + Math.random() * 0.2, // Random brightness
        twinkleSpeed: 0.01 + Math.random() * 0.02, // Twinkling effect
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let animationId;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;

        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw comets
      for (let i = comets.length - 1; i >= 0; i--) {
        const comet = comets[i];

        // Update comet position
        comet.x += Math.cos(comet.angle) * comet.speed;
        comet.y += Math.sin(comet.angle) * comet.speed;

        // Store current position in tail
        comet.tail[comet.nextPoint] = { x: comet.x, y: comet.y };
        comet.nextPoint = (comet.nextPoint + 1) % comet.tail.length;

        // Twinkling effect
        const twinkle =
          Math.sin(frameCount * comet.twinkleSpeed + comet.twinkleOffset) *
            0.2 +
          0.8;

        // Draw comet tail with gradient
        ctx.lineWidth = 1;

        // Get valid tail points
        const points = [];
        for (let j = 0; j < comet.tail.length; j++) {
          const point = comet.tail[(comet.nextPoint + j) % comet.tail.length];
          if (point && point.x) points.push(point);
        }

        // Draw the tail with a gradient
        if (points.length > 1) {
          for (let j = 0; j < points.length - 1; j++) {
            const alpha = (1 - j / points.length) * 0.7 * twinkle;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(points[j].x, points[j].y);
            ctx.lineTo(points[j + 1].x, points[j + 1].y);
            ctx.stroke();
          }

          // Draw comet head with twinkling effect
          if (points[0]) {
            ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * twinkle})`;
            ctx.beginPath();
            ctx.arc(points[0].x, points[0].y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Reset comet when it goes off screen
        if (
          comet.x < -100 ||
          comet.x > canvas.width + 100 ||
          comet.y < -100 ||
          comet.y > canvas.height + 100
        ) {
          comets.splice(i, 1);
          createComet();
        }
      }

      // Reset global alpha
      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      {/* {showMoon && <Moon />} */}
    </div>
  );
};

export default StarsBackground;

import React, { useEffect, useRef, useState, useMemo } from "react";

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Prevent touch actions that cause flashing
    const preventTouch = (e) => {
      e.preventDefault();
    };

    // Set canvas size to match parent
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    // Initial resize
    resizeCanvas();

    // Add touch event listeners to prevent flashing
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      document.body.style.touchAction = "none";
      document.body.style.overscrollBehavior = "none";
      document.body.style.webkitOverflowScrolling = "auto";
      window.addEventListener("touchmove", preventTouch, { passive: false });
    }

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
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.style.touchAction = "";
        document.body.style.overscrollBehavior = "";
        document.body.style.webkitOverflowScrolling = "";
        window.removeEventListener("touchmove", preventTouch);
      }
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
    </div>
  );
};

export default StarsBackground;

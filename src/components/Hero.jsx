// ============================================================
// Hero — Full-viewport landing section
// ============================================================
// - Animated HTML5 Canvas neural-network background:
//     nodes drift slowly, teal lines connect nearby nodes
// - Name, title, tagline, and two CTA buttons
// - Animated scroll-down indicator at the bottom
// ============================================================

import { useEffect, useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi2';
import { FaRegEye } from 'react-icons/fa';

// ---- Neural network canvas animation ----
// Draws drifting nodes connected by lines when within proximity.
// Runs as a requestAnimationFrame loop and cleans up on unmount.
function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animFrameId;

    // Resize canvas to always fill the window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create nodes with random position and velocity
    const NODE_COUNT = 55;
    const CONNECTION_DISTANCE = 160; // pixels — max distance to draw a line
    const TEAL = '45,212,191';       // rgb components of #2dd4bf

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4, // slow drift
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1.5,      // radius 1.5–3.5px
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move each node and bounce off edges
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width)  node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connection lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            // Opacity fades as nodes get further apart
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${TEAL},${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes as small circles
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${TEAL},0.5)`;
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Positioned absolutely behind the text content
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ---- Main Hero component ----
export default function Hero() {
  // Smooth scroll to the projects section when "View My Work" is clicked
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background canvas */}
      <NeuralCanvas />

      {/* Subtle radial gradient overlay — darkens the edges so text is readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #0d1117 100%)',
        }}
        aria-hidden="true"
      />

      {/* ---- Text content ---- */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">

        {/* Greeting line */}
        <p className="font-mono text-teal text-sm sm:text-base mb-4 tracking-widest uppercase animate-fade-in">
          Hi, I&apos;m
        </p>

        {/* Name — intentionally not enormous per preference */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-2 leading-tight">
          Shrinidhi Bhat
        </h1>

        {/* Nickname — friendly, memorable */}
        <p className="font-mono text-text-muted text-sm mb-4 tracking-wide">
          (friends call me <span className="text-teal">Shri</span>)
        </p>

        {/* Role */}
        <h2 className="text-xl sm:text-2xl font-medium text-teal mb-6">
          Data &amp; AI Engineer
        </h2>

        {/* Tagline — experience + focus areas */}
        <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          <span className="text-text-primary font-medium">5+ years</span> building across firmware, robotics, and AI —
          now focused on{' '}
          <span className="text-teal">Computer Vision</span>,{' '}
          <span className="text-teal">Data Engineering</span>, and{' '}
          <span className="text-teal">intelligent systems</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Request CV — opens a pre-filled email */}
          <a
            href="mailto:bhatshrinidhi97@gmail.com?subject=CV%20Request&body=Hi%20Shrinidhi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20request%20a%20copy%20of%20your%20CV.%0A%0AThank%20you!"
            className="btn-primary"
          >
            <HiOutlineMail size={18} />
            Request CV
          </a>

          {/* View My Work — smooth scrolls to Projects section */}
          <button onClick={scrollToProjects} className="btn-ghost">
            <FaRegEye size={16} />
            View My Work
          </button>
        </div>
      </div>

      {/* ---- Animated scroll-down chevron ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <HiChevronDown size={28} className="text-teal opacity-60" />
      </div>
    </section>
  );
}

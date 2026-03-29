// ============================================================
// Experience — Work experience vertical timeline
// ============================================================
// Desktop: central vertical line, cards alternate left/right.
// Mobile: single column, all cards left-aligned.
// Each card slides in from the side as it enters the viewport.
// Data is imported from src/data/experience.js — edit there.
// ============================================================

import { useEffect, useRef } from 'react';
import { experiences } from '../data/experience.js';

// Individual timeline entry card.
// index is used to determine left/right alternation on desktop.
function TimelineCard({ exp, index }) {
  const cardRef = useRef(null);

  // Attach IntersectionObserver to this individual card so each
  // card animates in independently as the user scrolls.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // On desktop, even-index cards slide from the left; odd from the right
  const isLeft = index % 2 === 0;
  const animClass = isLeft ? 'reveal-left' : 'reveal-right';

  return (
    // On desktop: odd/even cards sit on opposite sides of the timeline
    // On mobile: all cards are full-width
    <div className={`relative flex w-full md:w-1/2 ${isLeft ? 'md:pr-8 md:self-start' : 'md:pl-8 md:ml-auto md:self-start'}`}>

      {/* Timeline dot — the circle sitting on the centre line */}
      <div
        className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-teal border-2 border-bg z-10
          ${isLeft ? '-right-[7px]' : '-left-[7px]'}`}
        aria-hidden="true"
      />

      {/* Card */}
      <div ref={cardRef} className={`${animClass} card w-full`}>

        {/* Header row: title + date */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="text-text-primary font-semibold text-base leading-snug">
            {exp.title}
          </h3>
          <span className="font-mono text-xs text-text-muted whitespace-nowrap shrink-0 mt-0.5">
            {exp.period}
          </span>
        </div>

        {/* Company + location */}
        <p className="text-teal text-sm font-medium mb-1">
          {exp.company} &nbsp;·&nbsp; <span className="text-text-muted font-normal">{exp.location}</span>
        </p>

        {/* Topic / project focus */}
        <p className="text-text-muted text-sm italic mb-3">{exp.topic}</p>

        {/* Bullet points */}
        <ul className="space-y-1.5 mb-4">
          {exp.points.map((pt, i) => (
            <li key={i} className="text-text-muted text-sm flex gap-2">
              <span className="text-teal mt-1 shrink-0">▸</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5">
          {exp.techStack.map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="section-container">
      <h2 className="section-heading">Work Experience</h2>

      {/* Timeline wrapper — the central vertical line is a pseudo-element
          on this div, visible only on md+ screens */}
      <div className="relative">
        {/* Centre line */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-bg-border"
          aria-hidden="true"
        />

        {/* Cards — stacked vertically with gap */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <TimelineCard key={exp.company + exp.period} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

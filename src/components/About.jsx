// ============================================================
// About — "About Me" section
// ============================================================
// Two-column layout on desktop: photo left, text right.
// Single-column stacked on mobile.
// Fade-in on scroll via the useIntersection hook.
// ============================================================

import { useIntersection } from '../hooks/useIntersection.js';

// Bio bullet points — edit this array to update the About Me text.
// Each entry is one paragraph. Content sourced from references/resume.tex.
const BIO_POINTS = [
  "I'm Shrinidhi, most people call me Shri. I'm a Data & AI Engineer (Forward Deployed) at EnablerMinds GmbH, a consulting startup where I build production-ready data and AI systems for client engagements and internal PoCs.",
  "My work spans streaming pipelines, Databricks, model-serving APIs, CI/CD, observability, agentic AI solutions, and stakeholder-facing delivery.",
  "I enjoy startup and fast-paced environments where engineers take ownership from problem framing to production delivery.",
  "I collaborate with international teams in English and bring basic conversational German.",
  "Outside of work, I like football, badminton, hiking, via ferrata, and reading.",
];

// NOTE: the LinkedIn / GitHub links now live in the Hero section (src/components/Hero.jsx).

export default function About() {
  // Animate the whole section in when it enters the viewport
  const sectionRef = useIntersection({ threshold: 0.1 });

  return (
    <div className="section-container">
      <h2 className="section-heading">About Me</h2>

      {/* Two-column grid on md+, single column on mobile.
          items-start => photo and text share the same top edge, instead of the
          photo floating in the vertical middle of the text block. */}
      <div
        ref={sectionRef}
        className="reveal grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto"
      >
        {/* ---- Left: Photo ---- */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            {/* Teal decorative border ring behind the image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal/40 to-transparent" />
            <img
              src="/assets/profile.jpg"
              alt="Shrinidhi Bhat eating zapikanka"
              className="relative w-56 h-72 object-cover rounded-2xl border-2 border-bg-border"
            />
          </div>
        </div>

        {/* ---- Right: Text ---- */}
        <div className="space-y-4">
          {BIO_POINTS.map((point, i) => (
            <p key={i} className="text-text-muted leading-relaxed">
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

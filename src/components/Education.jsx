// ============================================================
// Education — Degree cards
// ============================================================
// Two cards side-by-side on desktop, stacked on mobile.
// Data is imported from src/data/education.js — edit there.
// ============================================================

import { useIntersectionMultiple } from '../hooks/useIntersection.js';
import { PiGraduationCapBold } from 'react-icons/pi';
import { education } from '../data/education.js';

export default function Education() {
  const containerRef = useIntersectionMultiple('.reveal', { threshold: 0.15 });

  return (
    <div className="section-container">
      <h2 className="section-heading">Education</h2>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={edu.degree}
            className="reveal card"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Icon + degree */}
            <div className="flex items-start gap-3 mb-3">
              <PiGraduationCapBold size={22} className="text-teal mt-0.5 shrink-0" />
              <div>
                <h3 className="text-text-primary font-semibold text-base leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-teal text-sm mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-text-muted text-sm">
                  {edu.location} &nbsp;·&nbsp; {edu.year}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-muted text-sm leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

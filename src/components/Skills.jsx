// ============================================================
// Skills — Tech stack badge grid
// ============================================================
// Displays skill categories, each with a row of pill badges.
// Badges pop in with a staggered scale animation as the section
// enters the viewport.
// Data is imported from src/data/skills.js — edit there.
// ============================================================

import { useIntersectionMultiple } from '../hooks/useIntersection.js';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  // Animate all category blocks when the container enters view
  const containerRef = useIntersectionMultiple('.skill-category', { threshold: 0.1 });

  return (
    <div className="section-container">
      <h2 className="section-heading">Skills &amp; Tech Stack</h2>

      <div ref={containerRef} className="space-y-8">
        {skillCategories.map((cat, catIndex) => (
          <div
            key={cat.category}
            className="skill-category reveal"
            style={{ transitionDelay: `${catIndex * 0.08}s` }}
          >
            {/* Category label */}
            <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-3">
              {cat.category}
            </h3>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="badge"
                  // Each badge within the category staggers slightly
                  style={{ transitionDelay: `${catIndex * 0.08 + skillIndex * 0.04}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

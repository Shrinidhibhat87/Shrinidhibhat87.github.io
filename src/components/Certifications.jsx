// ============================================================
// Certifications — Certification badge cards
// ============================================================
// Only shows certifications with status "achieved".
// In-progress certifications are intentionally hidden
// (they are commented out in src/data/certifications.js).
// Data is imported from src/data/certifications.js — edit there.
// ============================================================

import { useIntersectionMultiple } from '../hooks/useIntersection.js';
import { TbCertificate } from 'react-icons/tb';
import { certifications } from '../data/certifications.js';

export default function Certifications() {
  const containerRef = useIntersectionMultiple('.reveal', { threshold: 0.15 });

  // Filter to only show achieved certifications
  const achieved = certifications.filter((c) => c.status === 'achieved');

  if (achieved.length === 0) return null; // Hide section entirely if nothing to show

  return (
    <div className="section-container">
      <h2 className="section-heading">Certifications</h2>

      {/* Centered row of cards — wraps on mobile */}
      <div
        ref={containerRef}
        className="flex flex-wrap justify-center gap-6"
      >
        {achieved.map((cert, index) => (
          <div
            key={cert.name}
            className="reveal card flex items-start gap-4 max-w-sm w-full"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Certificate icon */}
            <div className="p-3 rounded-lg bg-teal/10 border border-teal/20 shrink-0">
              <TbCertificate size={28} className="text-teal" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-text-primary font-semibold text-sm leading-snug mb-1">
                {cert.name}
              </h3>
              <p className="text-teal text-sm">{cert.issuer}</p>
              <p className="text-text-muted text-xs font-mono mt-0.5">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Projects — Project showcase grid
// ============================================================
// 2-column grid on desktop, 1-column on mobile.
// Each card: project image (or placeholder), title, description,
// tech badges, bullet points, and a GitHub link button.
// Cards fade in with a stagger as the section enters the viewport.
// Data is imported from src/data/projects.js — edit there.
// ============================================================

import { useIntersectionMultiple } from '../hooks/useIntersection.js';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { projects } from '../data/projects.js';

// Placeholder shown when a project has no image (image: null)
function ImagePlaceholder({ title }) {
  return (
    <div className="w-full h-48 bg-bg-border/30 rounded-lg flex items-center justify-center">
      {/* Shows the first letter of the project title */}
      <span className="text-4xl font-bold text-teal/30 font-mono">
        {title.charAt(0)}
      </span>
    </div>
  );
}

// Single project card
function ProjectCard({ project, delay }) {
  return (
    <div
      className={`reveal card flex flex-col stagger-${delay}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      {/* Project image or placeholder */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-48 object-cover rounded-lg mb-4"
          loading="lazy"
        />
      ) : (
        <div className="mb-4">
          <ImagePlaceholder title={project.title} />
        </div>
      )}

      {/* Title */}
      <h3 className="text-text-primary font-semibold text-base mb-2 leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-3">
        {project.description}
      </p>

      {/* Bullet points */}
      <ul className="space-y-1.5 mb-4 flex-1">
        {project.points.map((pt, i) => (
          <li key={i} className="text-text-muted text-sm flex gap-2">
            <span className="text-teal mt-1 shrink-0">▸</span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>

      {/* GitHub link button — pushed to bottom of card */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost text-sm py-2 w-full justify-center mt-auto"
        aria-label={`View ${project.title} on GitHub`}
      >
        <FaGithub size={16} />
        View on GitHub
        <HiOutlineExternalLink size={14} className="opacity-60" />
      </a>
    </div>
  );
}

export default function Projects() {
  // Observe all .reveal elements inside the grid container
  const gridRef = useIntersectionMultiple('.reveal', { threshold: 0.1 });

  return (
    <div className="section-container">
      <h2 className="section-heading">Projects</h2>

      {/* 2-column grid on md+, single column on mobile */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={index + 1}  // stagger-1 through stagger-4
          />
        ))}
      </div>
    </div>
  );
}

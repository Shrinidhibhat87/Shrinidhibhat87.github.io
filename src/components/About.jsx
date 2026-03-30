// ============================================================
// About — "About Me" section
// ============================================================
// Two-column layout on desktop: photo left, text right.
// Single-column stacked on mobile.
// Fade-in on scroll via the useIntersection hook.
// ============================================================

import { useIntersection } from '../hooks/useIntersection.js';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// Bio bullet points — edit this array to update the About Me text.
// Each entry is one paragraph. Content sourced from references/resume.tex (updated March 2026).
const BIO_POINTS = [
  "I'm Shrinidhi — most people call me Shri. I'm a Data & AI Engineer at EnablerMinds GmbH, a consulting firm, where I deliver production ML/CV systems and data platforms for client engagements. Think end-to-end: ingestion pipelines, query optimisation, GenAI POCs, and Dev→Prod automation — all the way to stakeholder sign-off.",
  "With 5+ years spanning Embedded Firmware (Western Digital, Aptiv), Robotics & Perception (Bosch Center for AI, ROS2/SLAM), and Computer Vision research (BMW Autonomous Driving, Forschungszentrum Jülich), I bring a full-stack engineering perspective that goes well below the Python layer.",
  "I hold an M.Sc. in Robotic Systems Engineering from RWTH Aachen University. My thesis at BMW's Autonomous Driving Campus achieved 70%+ bandwidth reduction in semantic segmentation pipelines using vision transformers — work that bridges research rigour with production constraints.",
  "I've lived and worked in Germany since 2021, collaborating with international teams across industry and research. I speak fluent English and conversational German (B1) — enough to run a client meeting, read technical docs, and hold my own at the coffee machine.",
  "Outside of work: football ⚽, badminton 🏸, hiking ⛰️, via ferrata 🧗, and reading 📖.",
];

// Social / contact links — update hrefs as needed
const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shrinidhi-bhat-9635a615a/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Shrinidhibhat87',
    icon: FaGithub,
  },
  {
    label: 'Email',
    href: 'mailto:bhatshrinidhi97@gmail.com',
    icon: HiOutlineMail,
  },
];

export default function About() {
  // Animate the whole section in when it enters the viewport
  const sectionRef = useIntersection({ threshold: 0.1 });

  return (
    <div className="section-container">
      <h2 className="section-heading">About Me</h2>

      {/* Two-column grid on md+, single column on mobile */}
      <div
        ref={sectionRef}
        className="reveal grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center"
      >
        {/* ---- Left: Photo ---- */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            {/* Teal decorative border ring behind the image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal/40 to-transparent" />
            <img
              src="/assets/profile.jpg"
              alt="Shrinidhi Bhat eating zapikanka"
              className="relative w-52 h-64 object-cover rounded-2xl border-2 border-bg-border"
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

          {/* Social icon buttons — centered so they sit symmetrically under the bio text */}
          <div className="flex gap-4 pt-4 justify-center">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-muted hover:text-teal transition-colors duration-200"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

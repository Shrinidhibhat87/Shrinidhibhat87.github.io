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
// Each entry is one paragraph / bullet.
const BIO_POINTS = [
  "I'm Shrinidhi — most people call me Shri. I work as a Data and AI Engineer at EnablerMinds GmbH, where I'm deployed as an external consultant within client teams, delivering end-to-end Data and AI solutions using Databricks, Azure Data Factory, dbt, and LangGraph.",
  "With 5+ years of experience spanning Embedded Firmware, Robotics, and AI research, I bring a rare full-stack perspective — from hardware-level C++ to production-grade machine learning pipelines.",
  "My research background includes Computer Vision (semantic segmentation, 3D object detection, vision transformers) and Robotics (ROS2, SLAM, point cloud processing). I hold an M.Sc. in Robotic Systems Engineering from RWTH Aachen University.",
  "I've lived and worked in Germany since 2021, collaborating with teams at BMW, Bosch Center for AI, and Forschungszentrum Jülich. I speak fluent English and conversational German (B1) — enough to hold a meeting, navigate daily life, and enjoy small talk over coffee.",
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

          {/* Social icon buttons */}
          <div className="flex gap-4 pt-4">
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

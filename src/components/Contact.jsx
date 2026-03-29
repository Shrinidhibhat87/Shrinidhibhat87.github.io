// ============================================================
// Contact — Social links and contact section
// ============================================================
// Centered layout with heading, tagline, and icon buttons
// for GitHub, LinkedIn, and Email.
// ============================================================

import { useIntersection } from '../hooks/useIntersection.js';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// Update these if your URLs or email ever change
const CONTACT_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Shrinidhibhat87',
    icon: FaGithub,
    description: 'See my code',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shrinidhi-bhat-9635a615a/',
    icon: FaLinkedin,
    description: 'Connect professionally',
  },
  {
    label: 'Email',
    href: 'mailto:bhatshrinidhi97@gmail.com',
    icon: HiOutlineMail,
    description: 'Send a message',
  },
];

export default function Contact() {
  const sectionRef = useIntersection({ threshold: 0.2 });

  return (
    <div className="section-container">
      <h2 className="section-heading">Get In Touch</h2>

      <div ref={sectionRef} className="reveal text-center max-w-xl mx-auto">
        <p className="text-text-muted leading-relaxed mb-10">
          Whether you have a project in mind, a question, or just want to connect —
          feel free to reach out. I&apos;m always open to interesting conversations.
        </p>

        {/* Icon link cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {CONTACT_LINKS.map(({ label, href, icon: Icon, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="card flex flex-col items-center gap-2 py-6 px-8 hover:border-teal
                         hover:shadow-teal-glow group transition-all duration-300 flex-1"
              aria-label={label}
            >
              <Icon
                size={28}
                className="text-text-muted group-hover:text-teal transition-colors duration-200"
              />
              <span className="text-text-primary font-medium text-sm">{label}</span>
              <span className="text-text-muted text-xs">{description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

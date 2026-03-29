// ============================================================
// Navbar — Sticky top navigation bar
// ============================================================
// - Fixed at the top of the viewport, always visible while scrolling
// - Desktop: nav links centered across the full bar
// - Scroll-spy: highlights the currently visible section in teal
// - Mobile: hamburger button (right side) toggles full-screen overlay menu
// ============================================================

import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

// All nav links — label is what the user sees, id must match the
// id attribute on the corresponding section element in App.jsx
const NAV_LINKS = [
  { label: 'About',          id: 'about' },
  { label: 'Experience',     id: 'experience' },
  { label: 'Projects',       id: 'projects' },
  { label: 'Skills',         id: 'skills' },
  { label: 'Education',      id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Articles',       id: 'articles' },
  { label: 'Contact',        id: 'contact' },
];

export default function Navbar() {
  // Controls whether the mobile menu overlay is open
  const [menuOpen, setMenuOpen] = useState(false);
  // Tracks which section id is currently in view (for scroll-spy highlight)
  const [activeSection, setActiveSection] = useState('');
  // Adds a subtle shadow/border to the navbar once user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // ---- Scroll-spy: observe all sections with IntersectionObserver ----
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // When a section is more than 40% visible, mark it as active
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ---- Smooth-scroll helper ----
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <>
      {/* ---- Main navbar bar ---- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-bg/90 backdrop-blur-md border-b border-bg-border shadow-lg'
            : 'bg-transparent'
          }`}
      >
        {/* Desktop: links centered. Mobile: hamburger pinned to the right */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center relative">

          {/* Desktop nav links — centered */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium transition-colors duration-200 relative
                    after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-teal
                    after:transition-all after:duration-200
                    ${activeSection === id
                      ? 'text-teal after:w-full'
                      : 'text-text-muted hover:text-text-primary after:w-0 hover:after:w-full'
                    }`}
                  aria-current={activeSection === id ? 'true' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button — absolute right so it doesn't affect centering */}
          <button
            className="md:hidden absolute right-4 text-text-primary hover:text-teal transition-colors p-1 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <IoCloseOutline size={28} />
              : <RxHamburgerMenu size={24} />
            }
          </button>
        </div>
      </nav>

      {/* ---- Mobile full-screen overlay menu ---- */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-2xl font-medium transition-colors duration-200
                ${activeSection === id ? 'text-teal' : 'text-text-primary hover:text-teal'}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

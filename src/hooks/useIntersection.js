// ============================================================
// useIntersection — Custom React hook
// ============================================================
// Uses the browser's IntersectionObserver API to detect when
// a DOM element enters the visible area of the screen.
//
// Usage:
//   const ref = useIntersection();
//   <div ref={ref} className="reveal">...</div>
//
// When the element scrolls into view, the hook adds the CSS
// class "visible" to it, which triggers the CSS transition
// defined in index.css (.reveal.visible).
//
// options (optional):
//   threshold - 0 to 1, how much of the element must be visible
//               before triggering. Default: 0.1 (10%)
//   rootMargin - CSS margin around the viewport. Default: '0px'
// ============================================================

import { useEffect, useRef } from 'react';

export function useIntersection(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the "visible" class to trigger the CSS animation
            entry.target.classList.add('visible');
            // Once visible, stop observing — we only animate in once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    observer.observe(element);

    // Cleanup: disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

// ============================================================
// useIntersectionMultiple — observe many children at once
// ============================================================
// Usage:
//   const containerRef = useIntersectionMultiple('.reveal');
//   <ul ref={containerRef}>
//     <li className="reveal stagger-1">...</li>
//     ...
//   </ul>
//
// Attaches an observer to every child element matching
// the given CSS selector inside the container element.
// ============================================================

export function useIntersectionMultiple(selector = '.reveal', options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options.threshold, options.rootMargin]);

  return containerRef;
}

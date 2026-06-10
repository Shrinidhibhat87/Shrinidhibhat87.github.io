// ============================================================
// Articles — Published articles / blog posts
// ============================================================
// Vertical card layout: full-width banner image on top, text below.
// "Read on Medium" button opens the article in a new tab.
// Data is imported from src/data/articles.js — edit there.
// ============================================================

import { useIntersectionMultiple } from '../hooks/useIntersection.js';
import { SiMedium } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { MdAccessTime } from 'react-icons/md';
import { articles } from '../data/articles.js';

// Placeholder when an article has no image
function ArticleImagePlaceholder() {
  return (
    <div className="w-full h-full min-h-[120px] bg-bg-border/30 rounded-lg flex items-center justify-center">
      {/* Generic document icon so it works for any platform */}
      <HiOutlineExternalLink size={32} className="text-teal/30" />
    </div>
  );
}

export default function Articles() {
  const containerRef = useIntersectionMultiple('.reveal', { threshold: 0.1 });

  if (articles.length === 0) return null;

  // Sort newest-first by sortDate (ISO string sorts correctly). Copy first so
  // we don't mutate the imported array.
  const sortedArticles = [...articles].sort((a, b) =>
    (b.sortDate || '').localeCompare(a.sortDate || '')
  );

  return (
    <div className="section-container">
      <h2 className="section-heading">Articles</h2>

      <div ref={containerRef} className="space-y-4">
        {sortedArticles.map((article, index) => (
          <div
            key={article.title}
            // p-4 overrides the global .card p-6 to make article frames ~25% smaller
            className="reveal card !p-4 flex flex-col gap-3"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Article image — compact full-width banner on top of the card.
                Fixed 11:2 (5.5:1) ratio matches the padded diagram canvases so the
                wide diagrams fill the banner edge to edge and every card's image is
                exactly the same size. object-contain never crops; padded background
                blends into the card surface colour. */}
            <div className="w-full">
              {article.image ? (
                <img
                  src={article.image}
                  alt={`${article.title} cover`}
                  className="w-full aspect-[11/2] object-contain rounded-lg bg-bg-surface"
                  loading="lazy"
                />
              ) : (
                <ArticleImagePlaceholder />
              )}
            </div>

            {/* Article text */}
            <div className="flex flex-col flex-1">
              {/* Meta: date + reading time */}
              <div className="flex items-center gap-3 text-text-muted text-xs font-mono mb-2">
                <span>{article.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MdAccessTime size={13} />
                  {article.readingTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-semibold text-base leading-snug mb-2">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                {article.description}
              </p>

              {/* Read button — uses Medium icon for Medium articles, generic link otherwise */}
              <div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm py-2 px-4 inline-flex"
                  aria-label={`Read ${article.title} on ${article.platform}`}
                >
                  {article.platform === 'Medium'
                    ? <SiMedium size={15} />
                    : <HiOutlineExternalLink size={15} />}
                  Read on {article.platform}
                  <HiOutlineExternalLink size={13} className="opacity-60" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

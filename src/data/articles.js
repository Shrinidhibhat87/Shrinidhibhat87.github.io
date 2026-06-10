// ============================================================
// Articles Data
// ============================================================
// To add a new article: add an entry to the array below.
// Fields:
//   title       - Article title
//   description - Short summary (1–2 sentences)
//   image       - Path relative to /public, or null for placeholder
//   url         - Full URL to the article (Medium, Dev.to, etc.)
//   platform    - Display name of the platform (e.g. "Medium")
//   date        - Display date string (shown on the card)
//   sortDate    - ISO date "YYYY-MM-DD" used ONLY for sorting newest-first
//   readingTime - Estimated reading time string
// ============================================================
// Order in this array does not matter — the Articles component sorts by
// `sortDate` descending (newest first) before rendering.
// ============================================================

export const articles = [
  {
    // Latest article — Delta table optimization on a metadata-driven lakehouse
    title: "Optimization of Delta Tables: How it Saves Costs",
    description:
      "Slow queries and growing storage quietly drive up costs. This beginner-friendly guide walks through Delta table optimization techniques — and how to verify they actually cut query time and spend on a real data platform.",
    image: "/assets/article-delta-optimization.png",
    url: "https://medium.com/@shrinidhi.bhat/optimization-of-delta-tables-how-it-saves-costs-a58cc23ade07",
    platform: "Medium",
    date: "June 10, 2026",
    sortDate: "2026-06-10",
    readingTime: "7 min read",
  },
  {
    title: "Supervised 3D Bounding Box Detection Pipeline",
    description:
      "A comprehensive guide to building an end-to-end pipeline for 3D object detection using transformer-based architectures on point cloud data.",
    image: "/assets/project-3dbbox.png",
    url: "https://medium.com/@shrinidhi.bhat/supervised-3d-bounding-box-detection-pipeline-e6a8c9976165",
    platform: "Medium",
    date: "April 2025",
    sortDate: "2025-04-01",
    readingTime: "8 min read",
  },
  {
    // Written for EnablerMinds on metadata-driven ingestion architecture
    title: "Metadata-Driven Ingestion Pipelines — and Why Your Lakehouse Needs It",
    description:
      "A practitioner's guide to scalable, low-touch data onboarding using metadata-driven architecture on modern lakehouses — covering design patterns, Delta Lake integration, and real-world trade-offs.",
    image: "/assets/article-metadata-ingestion.png",
    url: "https://www.enablerminds.com/post/metadata-driven-ingestion-pipelines-and-why-your-lakehouse-needs-it",
    platform: "EnablerMinds Blog",
    date: "March 4, 2026",
    sortDate: "2026-03-04",
    readingTime: "4 min read",
  },
  // Add more articles here as you write them
];

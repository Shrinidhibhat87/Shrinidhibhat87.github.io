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
//   date        - Display date string
//   readingTime - Estimated reading time string
// ============================================================

export const articles = [
  {
    title: "Supervised 3D Bounding Box Detection Pipeline",
    description:
      "A comprehensive guide to building an end-to-end pipeline for 3D object detection using transformer-based architectures on point cloud data.",
    image: "/assets/project-3dbbox.png",
    url: "https://medium.com/@shrinidhi.bhat/supervised-3d-bounding-box-detection-pipeline-e6a8c9976165",
    platform: "Medium",
    date: "April 2025",
    readingTime: "8 min read",
  },
  {
    // Written for EnablerMinds on metadata-driven ingestion architecture
    title: "Metadata-Driven Ingestion Pipelines — and Why Your Lakehouse Needs It",
    description:
      "A practitioner's guide to scalable, low-touch data onboarding using metadata-driven architecture on modern lakehouses — covering design patterns, Delta Lake integration, and real-world trade-offs.",
    image: null, // No image — component will render a neutral placeholder
    url: "https://www.enablerminds.com/post/metadata-driven-ingestion-pipelines-and-why-your-lakehouse-needs-it",
    platform: "EnablerMinds Blog",
    date: "2025",
    readingTime: "4 min read",
  },
  // Add more articles here as you write them
];

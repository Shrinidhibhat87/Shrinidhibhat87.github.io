// ============================================================
// Projects Data
// ============================================================
// To add a project: add an object to the array below.
// To remove: delete the entry.
// To reorder: move entries (displayed in array order, top-left first).
//
// Fields:
//   title       - Project name
//   description - One or two sentence summary
//   image       - Path relative to /public  (use null for placeholder)
//   github      - GitHub URL string
//   techStack   - Array of technology strings (shown as badges)
//   points      - Array of bullet point strings (key achievements)
// ============================================================

export const projects = [
  {
    // 🏆 1st place — AI x Energy Hackathon (Berlin, June 2026)
    title: "Never Ghosted — AI Sales Assistant",
    description:
      "Hackathon-winning agentic sales assistant for solar installers. Reads a deal's quote, customer profile, and signals, then writes a grounded multi-channel closing strategy — explaining the why behind every recommendation.",
    image: "/assets/project-never-ghosted.png",
    github: "https://github.com/Shrinidhibhat87/reonic-never-ghosted",
    techStack: ["TypeScript", "VoltAgent", "Next.js", "FastAPI", "Python", "PostgreSQL", "OpenAI", "Docker Compose"],
    points: [
      "Won 1st place overall at an AI x Energy Hackathon (70+ participants, 4 tracks) — built and demoed a working product in under 4 hours.",
      "Designed a 5-step agentic workflow: context validation → knowledgebase load → deterministic scoring → LLM evaluation → LLM strategy synthesis.",
      "Grounded recommendations in real customer reviews (Trustpilot/Google) scraped and embedded into a JSON knowledgebase.",
      "Shipped a Next.js frontend, FastAPI + Postgres backend, and a VoltAgent TS service with graceful deterministic fallback — all dockerised.",
    ],
  },
  {
    title: "Amenity Detection and Description System",
    description:
      "Production-style AI property platform that detects amenities from photos, supports human review, generates listing descriptions, and serves searchable public listings.",
    image: null, // No image available; placeholder will be shown
    github: "https://github.com/Shrinidhibhat87/amenity_detector",
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "VLM", "OpenRouter", "PostgreSQL", "pgvector", "Docker Compose", "Prometheus", "Grafana", "CI"],
    points: [
      "Built a multi-model VLM pipeline for room-level amenity detection, editable review, alt text, captions, and listing description generation.",
      "Designed a FastAPI + PostgreSQL backend with pgvector/FTS hybrid search and a strict Next.js TypeScript frontend over HTTP APIs.",
      "Added SEO and agent-facing surfaces including server-rendered pages, JSON-LD, sitemap, robots.txt, llms.txt, and JSONL feed endpoints.",
      "Shipped Docker Compose orchestration, Alembic migrations, structured logs, Prometheus/Grafana observability, and GitHub Actions CI.",
    ],
  },
  {
    title: "3D Bounding Box Prediction",
    description:
      "End-to-end deep learning pipeline using 3DETR for predicting bounding box corners on point cloud data.",
    image: "/assets/project-3dbbox.png",
    github: "https://github.com/Shrinidhibhat87/codingchallenge_sereact",
    techStack: ["Python", "PyTorch", "3DETR", "Weights & Biases", "NumPy"],
    points: [
      "Developed an end-to-end pipeline for 3D bounding box prediction with custom dataloader, augmentation, and transformer model.",
      "Conducted research on SoTA transformer methodologies, adapting them for limited datasets.",
      "Achieved a mean IoU of 0.27 with only 100 training samples through systematic hyperparameter tuning.",
      "Used Weights & Biases for comprehensive experiment tracking and metric analysis.",
    ],
  },
  {
    title: "Transformer-Based Compression for Semantic Segmentation",
    description:
      "Bandwidth-efficient semantic segmentation framework using Mask2Former on the CityScapes dataset — achieved 70%+ bandwidth reduction.",
    image: "/assets/project-thesis.png",
    github: "https://github.com/Shrinidhibhat87/MasterThesis",
    techStack: ["Python", "PyTorch", "HuggingFace", "Mask2Former", "VAE", "Docker"],
    points: [
      "Designed the entire architecture for bandwidth-efficient semantic segmentation using Mask2Former.",
      "Built custom dataloaders and torchvision transforms to reduce bandwidth usage by over 70%.",
      "Integrated a VAE for image reconstruction to benchmark against the baseline model.",
    ],
  },
  {
    title: "Monocular Visual Odometry",
    description:
      "Camera motion estimation from monocular video using FAST feature detection, KLT optical flow, RANSAC, and the 5-point algorithm.",
    image: "/assets/project-vo.png",
    github: "https://github.com/Shrinidhibhat87/monocular_visual_odometry",
    techStack: ["C++", "OpenCV", "Git", "CMake"],
    points: [
      "Implemented image preprocessing, FAST feature detection, and the 5-point algorithm for essential matrix estimation.",
      "Applied RANSAC for robust outlier rejection during motion estimation.",
      "Maintained clean, modular C++ code with Git version control and continuous integration.",
    ],
  },
];

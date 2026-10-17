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
    // Newest project.
    title: "Career Copilot — Agentic Job-Search Assistant",
    description:
      "Personal job-search agent that discovers postings from ATS boards, hard filters them, scores the survivors against a CV with local or cloud LLMs, and renders a ranked digest. Can run 100% locally, so no data has to leave your machine. It recommends roles and never submits an application.",
    image: "/assets/project-career-copilot.png",
    github: "https://github.com/Shrinidhibhat87/career-copilot",
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "pydantic-ai", "vLLM", "Ollama", "OpenRouter", "SQLite", "Presidio", "Docker", "GitHub Actions"],
    points: [
      "Designed a hexagonal architecture (JobSource, StateStore, LLMClient, Notifier ports) so a local model, a cloud provider, or a new job board is a swap-in adapter, not a rewrite.",
      "Built a tool calling discovery agent that finds company ATS boards (Greenhouse, Workable, SmartRecruiters, Personio and more), plus a two stage LLM funnel: cheap triage, then deep CV match.",
      "Ran models on a 6 GB GTX 1660 Ti with a 4-bit AWQ Qwen3-4B on vLLM in Docker under WSL2, with per-machine profiles for Ollama on Apple Silicon and OpenRouter in the cloud.",
      "Added a Presidio PII redaction gateway in front of every model call, per-person accounts with their own SQLite database, a Next.js UI, and CI with ruff, mypy and pytest.",
    ],
  },
  {
    // 🏆 1st place — AI x Energy Hackathon (Berlin, June 2026)
    title: "Never Ghosted — AI Sales Assistant",
    description:
      "Hackathon-winning agentic sales assistant for solar installers. Reads a deal's quote, customer profile, and signals, then writes a grounded multi-channel closing strategy — explaining the why behind every recommendation.",
    image: "/assets/project-never-ghosted.png",
    github: "https://github.com/Shrinidhibhat87/reonic-never-ghosted",
    techStack: ["TypeScript", "VoltAgent", "Next.js", "FastAPI", "Python", "PostgreSQL", "OpenAI", "Docker Compose"],
    points: [
      "Won 1st place overall at an AI x Energy Hackathon (70+ participants, 4 tracks) — built and demoed a working product in under 18 hours.",
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

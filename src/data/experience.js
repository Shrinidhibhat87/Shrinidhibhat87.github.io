// ============================================================
// Work Experience Data
// ============================================================
// To add or edit a role, simply add/modify an entry in this array.
// Entries are displayed newest-first (top of timeline = index 0).
// Fields:
//   title    - Your job title
//   company  - Company name
//   location - City, Country
//   period   - Display date string e.g. "07/2025 – Present"
//   topic    - One-line description of main focus / project
//   techStack - Array of technology strings (shown as badges)
//   points   - Array of bullet points describing your work. Each entry is
//              either a plain string, or an object { label, text } where
//              `label` renders as a bold teal prefix (e.g. "AI:" / "Data:")
// ============================================================

export const experiences = [
  {
    title: "Data & AI Engineer (FDE)",
    company: "EnablerMinds GmbH (consulting startup)",
    location: "Germany (Remote)",
    period: "07/2025 – Present",
    topic: "Data and AI engineering for client production workloads and internal PoCs",
    techStack: ["Python", "Databricks", "Delta Lake", "Confluent Kafka", "Azure Event Hubs", "Azure Key Vault", "Cosmos DB", "Brightdata", "Dragonfly", "OpenTelemetry", "FastAPI", "PostgreSQL", "pgvector", "OpenAI Agents SDK", "FAISS", "LangGraph", "AWS Bedrock", "Grafana", "CI/CD"],
    // Bullets order: AI Enrichment Service first, then AI work, GenAI POC, then Data-platform work.
    points: [
      {
        label: "AI Enrichment Service",
        text: "Co-architected and built a deployed Kafka-driven, hexagonal service producing evidence-backed product attributes with confidence scores; owned the rebalance-safe consumer edge and Brightdata, Dragonfly, and Cosmos DB integrations, supporting concurrent jobs, idempotent redelivery, a 1-year audit trail, and E2E OpenTelemetry/Grafana observability.",
      },
      {
        label: "AI",
        text: "Built Agentic Commerce: LLM-parsed NL catalog search (pgvector/SQL + cross-encoder reranking), grounded SEO + SKU-readiness audits, and an OpenAI Agents SDK agent with ACP checkout.",
      },
      "Contributed to a GenAI POC with FAISS semantic search, SQLite structured queries, and a LangGraph agent deployed on AWS Bedrock.",
      {
        label: "Data",
        text: "Architected ingestion across heterogeneous sources: event streams (Confluent Kafka, Event Hubs) and token/key-authenticated REST APIs (JWT via Key Vault) into Databricks Delta, with metadata-driven onboarding.",
      },
      "Built query optimization production pipelines running 3.5x faster; automated Dev/UAT/Prod code and config promotion, cutting compute cost by about 90%.",
    ],
  },
  {
    title: "PhD Student — Computer Vision & Data Science",
    company: "Forschungszentrum Jülich IAS-9",
    location: "Jülich, Germany",
    period: "01/2025 – 06/2025",
    topic: "Computer Vision methods for in-situ Scanning Transmission Electron Microscopy (4D-STEM)",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Weights & Biases", "LiberTEM", "CI/CD"],
    points: [
      "Researched computer vision methods to automate defect detection and tracking in novel 4D-STEM images.",
      "Built an end-to-end computer vision pipeline infrastructure for training and deployment.",
    ],
  },
  {
    title: "Master Thesis — Computer Vision",
    company: "BMW Group (Autonomous Driving Campus)",
    location: "München, Germany",
    period: "03/2024 – 07/2024",
    topic: "Bandwidth Efficient Learning on Vision Transformers for Semantic Segmentation",
    techStack: ["Python", "PyTorch", "HuggingFace", "Tensorboard", "Docker", "CI/CD", "Pillow"],
    points: [
      "Integrated Mask2Former (SoTA vision transformer) into existing stack; created pipeline for scalable cluster training.",
      "Pioneered architecture for image compression using attention maps, optimising storage efficiency by 30%.",
      "Developed custom torchvision transforms, reducing bandwidth usage by over 70%.",
      "Used VAE-based generative AI for image reconstruction to optimise segmentation model performance.",
    ],
  },
  {
    title: "Robotics Intern — Robotic Perception",
    company: "Bosch Center for AI",
    location: "Renningen, Germany",
    period: "09/2023 – 02/2024",
    topic: "3D Multi-view segmentation pipeline for scene understanding",
    techStack: ["Python", "PyTorch", "ROS2", "Docker", "Open3D", "OpenCV", "RViz", "NumPy", "RESTful API", "CI/CD"],
    points: [
      "Designed a 3D multi-view segmentation pipeline on a multi-threaded ROS2 node for a household robotic application.",
      "Implemented custom Python libraries to construct and register 3D point clouds for SLAM mapping using RGBD data.",
      "Developed a baseline library function that maps segments across frames at 20 Hz using 3D point clouds.",
      "Integrated SAM (Segment Anything Model) and GLIP (vision-language model) into the ROS2 node via RESTful API.",
    ],
  },
  {
    title: "Embedded AI — Working Student",
    company: "Aptiv PLC",
    location: "Wuppertal, Germany",
    period: "09/2022 – 08/2023",
    topic: "Optimisation tool for the Aptiv Embedded AI Stack",
    techStack: ["JavaScript", "Python", "PyTorch", "Docker", "GitHub Actions", "CI/CD", "NPM", "Jest", "ONNXRuntime", "TVM", "ONNX"],
    points: [
      "Customised and optimised Netron (a model visualisation tool), reducing debug time by over 50%.",
      "Developed model optimisation features for edge frameworks including ONNXRuntime, TVM, and ONNX.",
      "Built the entire unit testing architecture for the tool using npm and Jest.",
      "Deployed the containerised testing architecture on a CI/CD pipeline using GitHub Actions.",
    ],
  },
  {
    title: "Engineer — Firmware Development",
    company: "Western Digital India",
    location: "Bangalore, India",
    period: "07/2019 – 09/2021",
    topic: "18/20/22 TB HDD product development and 16/18 TB product sustenance",
    techStack: ["C++", "Git", "Jenkins", "CMake", "Python", "Jira", "Agile", "SAFe"],
    points: [
      "Designed and optimised algorithms to prioritise HDD commands using complex data structures (Queues, Graphs, Hashmaps).",
      "Implemented features to integrate incoming commands into appropriate data structures; constructed ETL pipelines for analysis.",
      "Delivered customer-facing failure and value demands within the Dispatch eHDD team.",
      "Engaged in end-to-end software development, testing, and validation within an Agile/SAFe framework.",
    ],
  },
  {
    title: "Embedded IoT Intern",
    company: "TAAL Tech India",
    location: "Bangalore, India",
    period: "12/2018 – 06/2019",
    topic: "Smart Building Lighting Application",
    techStack: ["C", "BLE Mesh", "UART"],
    points: [
      "Developed firmware for BLE Mesh protocol from the ground up for a smart building lighting application.",
      "Developed and tested firmware on the nRF52840 chipset that communicated with a mobile application.",
      "Integrated nRF52840 with UART for communication with sensors and drivers on the microcontroller.",
    ],
  },
];

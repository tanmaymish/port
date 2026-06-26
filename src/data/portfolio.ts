export const personal = {
  name: "Tanmay Mishra",
  email: "tanmaymish78@gmail.com",
  location: "India",
  roles: [
    "Software Engineer",
    "Cybersecurity Engineer",
    "Backend Engineer",
    "Distributed Systems Developer",
  ],
  bio: "I build systems that scale, secure, and endure. Distributed systems, backend services, cybersecurity tooling — I care about how things work under pressure and how they break gracefully when they don't.",
  education: {
    degree: "B.Tech Computer Science and Engineering",
    university: "KIIT University",
    period: "2022–2026",
    gpa: "7.52",
  },
  github: "https://github.com/tanmaymish",
  social: {
    github: "tanmaymish",
    email: "tanmaymish78@gmail.com",
    linkedin: "tanmaymish",
  },
};

export const skills = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Bash", "Go"],
  frameworks: ["Spring Boot", "Flask", "Node.js", "React", "Next.js"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  infrastructure: [
    "Docker",
    "Kafka",
    "Linux",
    "Git",
    "REST APIs",
    "Microservices",
    "Distributed Systems",
  ],
  cybersecurity: [
    "OWASP",
    "Burp Suite",
    "Network Security",
    "Recon",
    "Bug Bounty",
    "Cloud Security",
    "Automation",
  ],
  cs: [
    "Operating Systems",
    "Computer Networks",
    "DBMS",
    "Compiler Design",
    "Theory of Computation",
    "Algorithms",
    "Data Structures",
  ],
};

export const projects = [
  {
    id: "doms-order-service",
    title: "Doms Order Service",
    subtitle: "Distributed Order Management System",
    status: "production" as const,
    description:
      "A fault-tolerant distributed order management system built with microservices architecture. Handles concurrent order processing with retry mechanisms and circuit breakers to ensure consistency under load.",
    problem:
      "Traditional monolithic order systems fail under concurrent traffic spikes and lack graceful degradation. The challenge was designing a system that maintains data consistency across distributed nodes while tolerating partial failures.",
    architecture:
      "Event-driven microservices with RESTful boundaries. Each service owns its data store, communicates via well-defined contracts. Saga pattern handles distributed transactions. Health checks and circuit breakers prevent cascading failures.",
    challenges: [
      "Ensuring idempotency across distributed retries",
      "Handling partial failures without data corruption",
      "Maintaining consistency without 2PC overhead",
      "Optimizing PostgreSQL for high-concurrency writes",
    ],
    solutions: [
      "Implemented idempotency keys on every mutation endpoint",
      "Saga pattern with compensating transactions for rollbacks",
      "Optimistic locking with version columns on critical entities",
      "Connection pooling and prepared statements for DB efficiency",
    ],
    tech: ["Spring Boot", "PostgreSQL", "Docker", "Microservices", "REST APIs", "Java"],
    metrics: [
      { label: "Concurrent Orders", value: "500+", unit: "req/s" },
      { label: "Fault Tolerance", value: "99.9", unit: "% uptime" },
      { label: "Retry Success", value: "98", unit: "%" },
      { label: "Avg Latency", value: "<50", unit: "ms" },
    ],
    github: "https://github.com/tanmaymish",
    featured: true,
    color: "#3b82f6",
  },
  {
    id: "event-stream",
    title: "Event Stream Processing System",
    subtitle: "Real-time Distributed Messaging Pipeline",
    status: "production" as const,
    description:
      "High-throughput event stream processing system capable of ingesting and processing over 1,000 events per second with low latency. Built on Apache Kafka with custom producer-consumer implementations.",
    problem:
      "Need for real-time analytics on high-volume event data with guaranteed delivery, ordering, and exactly-once processing semantics — without sacrificing throughput.",
    architecture:
      "Kafka clusters with topic partitioning for parallelism. Custom Python consumers with batch processing. Java producers with async buffering. Dead-letter queues for failed events. Offset management for at-least-once guarantees.",
    challenges: [
      "Achieving sub-100ms end-to-end latency at 1K+ events/sec",
      "Consumer rebalancing causing processing gaps",
      "Backpressure handling during consumer lag spikes",
      "Schema evolution without breaking existing consumers",
    ],
    solutions: [
      "Optimized batch sizes and linger.ms for throughput/latency balance",
      "Cooperative sticky partition assignment strategy",
      "Flow control with pause/resume consumer APIs",
      "Avro schema registry with backward compatibility enforcement",
    ],
    tech: ["Apache Kafka", "Python", "Java", "Distributed Messaging", "Real-time Processing"],
    metrics: [
      { label: "Throughput", value: "1000+", unit: "events/sec" },
      { label: "End-to-end Latency", value: "<100", unit: "ms" },
      { label: "Message Loss", value: "0", unit: "%" },
      { label: "Consumer Lag", value: "<500", unit: "ms" },
    ],
    github: "https://github.com/tanmaymish",
    featured: true,
    color: "#8b5cf6",
  },
  {
    id: "oil-spill-detection",
    title: "Oil Spill Detection System",
    subtitle: "Smart India Hackathon Finalist — GIS & Satellite Intelligence",
    status: "finalist" as const,
    description:
      "Satellite-based oil spill detection system using GIS data, AIS vessel tracking, and machine learning to identify and classify oil spills in real time. Top 30 finalist at Smart India Hackathon.",
    problem:
      "Manual oil spill detection is slow, expensive, and misses incidents in remote maritime zones. Early detection is critical for environmental response.",
    architecture:
      "Satellite imagery ingestion pipeline → preprocessing with GIS normalization → ML classifier for spill vs. non-spill → AIS correlation for source attribution → alert system.",
    challenges: [
      "Cloud cover interference with optical satellite imagery",
      "Low-resolution SAR data preprocessing for ML inputs",
      "Correlating spill location with AIS vessel histories",
      "Real-time processing of large geospatial datasets",
    ],
    solutions: [
      "SAR (Synthetic Aperture Radar) imagery for cloud-independent detection",
      "Custom preprocessing pipeline for SAR backscatter normalization",
      "Temporal AIS windowing for vessel proximity correlation",
      "Chunked geospatial processing with lazy evaluation",
    ],
    tech: ["Python", "GIS", "Satellite Data", "Machine Learning", "AIS", "Remote Sensing"],
    metrics: [
      { label: "Detection Accuracy", value: "87", unit: "%" },
      { label: "Response Time", value: "<5", unit: "min" },
      { label: "Coverage Area", value: "500km²", unit: "" },
      { label: "Hackathon Rank", value: "Top 30", unit: "" },
    ],
    github: "https://github.com/tanmaymish",
    featured: false,
    color: "#10b981",
  },
  {
    id: "huntermind",
    title: "HunterMind",
    subtitle: "AI-Powered Recon Automation Platform",
    status: "building" as const,
    description:
      "A flagship cybersecurity platform for automated reconnaissance, vulnerability surface mapping, and intelligent target profiling. Designed for professional bug bounty hunters and red teams.",
    problem:
      "Manual recon is time-consuming and inconsistent. Hunters miss critical subdomains, endpoints, and parameter patterns that automated tooling with intelligence can surface systematically.",
    architecture:
      "Modular pipeline architecture: passive recon → active enumeration → fingerprinting → intelligent scoring. Each module runs independently, feeds a unified findings graph. AI layer correlates results and surfaces high-value targets.",
    challenges: [
      "Rate limiting and detection avoidance across recon phases",
      "Correlating disparate recon data into actionable findings",
      "Scaling enumeration without triggering WAF/IDS rules",
      "Real-time dashboard for live recon sessions",
    ],
    solutions: [
      "Configurable rate limiting with randomized delay profiles",
      "Graph-based data model for cross-source correlation",
      "Traffic fingerprint normalization to blend with legitimate traffic",
      "Async event-driven architecture for real-time updates",
    ],
    tech: ["Python", "Go", "React", "PostgreSQL", "Redis", "Docker", "REST APIs"],
    metrics: [
      { label: "Status", value: "In Dev", unit: "" },
      { label: "Modules", value: "5+", unit: "planned" },
      { label: "Target", value: "Bug Bounty", unit: "" },
      { label: "Architecture", value: "Modular", unit: "" },
    ],
    github: "https://github.com/tanmaymish",
    featured: true,
    color: "#ef4444",
  },
];

export const certifications = [
  {
    id: "grc",
    title: "GRC and Cybersecurity",
    issuer: "Professional Certification",
    description: "Governance, Risk, and Compliance frameworks in enterprise security contexts.",
    icon: "shield",
    color: "#3b82f6",
  },
  {
    id: "adv-security",
    title: "Advanced System Security",
    issuer: "Professional Certification",
    description: "Deep-dive into system-level security, privilege escalation, and hardening.",
    icon: "lock",
    color: "#8b5cf6",
  },
  {
    id: "cloud-security",
    title: "Cloud Computing Security",
    issuer: "Professional Certification",
    description: "Securing cloud infrastructure, IAM, and multi-tenant environments.",
    icon: "cloud",
    color: "#06b6d4",
  },
  {
    id: "ddos",
    title: "DDoS Attack and Defense",
    issuer: "Professional Certification",
    description: "Network-layer attack patterns, traffic analysis, and mitigation strategies.",
    icon: "network",
    color: "#f59e0b",
  },
];

export const achievements = [
  {
    id: "lti",
    title: "Graduate Engineer Trainee",
    org: "LTIMindtree",
    description: "Pre-placement offer from LTIMindtree as Graduate Engineer Trainee.",
    icon: "briefcase",
    year: "2025",
    highlight: true,
  },
  {
    id: "sih",
    title: "Smart India Hackathon Finalist",
    org: "Government of India",
    description: "Top 30 teams nationwide. Built satellite-based oil spill detection system.",
    icon: "trophy",
    year: "2024",
    highlight: true,
  },
  {
    id: "leetcode",
    title: "200+ LeetCode Problems",
    org: "LeetCode",
    description: "Consistent algorithmic problem solving across DSA categories.",
    icon: "code",
    year: "Ongoing",
    highlight: false,
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Started B.Tech at KIIT University",
    description: "Enrolled in Computer Science and Engineering. Began learning DSA and systems.",
    type: "education" as const,
  },
  {
    year: "2023",
    title: "Deep-dive into Backend Engineering",
    description:
      "Built first REST APIs with Spring Boot. Studied distributed systems fundamentals. Started exploring Linux and networking.",
    type: "engineering" as const,
  },
  {
    year: "2023",
    title: "Entered Cybersecurity",
    description:
      "Started learning OWASP, network security, and bug bounty methodology. Completed GRC and Advanced System Security certifications.",
    type: "security" as const,
  },
  {
    year: "2024",
    title: "Smart India Hackathon Finalist",
    description:
      "Top 30 teams nationally. Engineered oil spill detection system with GIS + ML pipeline.",
    type: "achievement" as const,
  },
  {
    year: "2024",
    title: "Distributed Systems & Kafka",
    description:
      "Built event stream processing at 1000+ events/sec. Studied consensus protocols, CAP theorem, and fault tolerance patterns.",
    type: "engineering" as const,
  },
  {
    year: "2025",
    title: "Graduate Engineer Trainee — LTIMindtree",
    description: "Pre-placement offer secured. Continuing to build production-grade systems.",
    type: "achievement" as const,
  },
  {
    year: "2025",
    title: "HunterMind — Flagship Security Platform",
    description:
      "Designing and building AI-powered recon automation platform for bug bounty hunters.",
    type: "security" as const,
  },
  {
    year: "2026",
    title: "B.Tech Graduation",
    description: "Graduating with CSE degree. Full focus on distributed systems and security.",
    type: "education" as const,
  },
];

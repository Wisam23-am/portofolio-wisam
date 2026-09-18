import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'tbconnect',
    slug: 'tbconnect',
    title: 'TBConnect Health Portal',
    summary: 'TB patient monitoring and community health worker offline-first mobile & web platform.',
    description:
      'TBConnect is a healthcare intervention platform designed to help community health workers (CHWs) track patient medication adherence, log diagnostic sputum tests, and visualize regional patient outcomes. Built with an offline-first architecture to ensure smooth usability even in rural clinics with spotty connectivity.',
    role: 'Lead Full-Stack & Mobile Developer',
    period: '2025 — 2026',
    techStack: ['Flutter', 'Supabase', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    category: 'Mobile App',
    images: [
      '/images/projects/tbconnect-1.svg',
      '/images/projects/tbconnect-2.svg',
      '/images/projects/tbconnect-3.svg',
    ],
    liveUrl: 'https://tbconnect-demo.vercel.app',
    repoUrl: 'https://github.com/wisam/tbconnect',
    featured: true,
    problem:
      'In many community health centers, TB medication adherence is manually tracked on paper logs. Lost records and delayed follow-ups directly lead to multidrug-resistant tuberculosis (MDR-TB) outbreaks.',
    solution:
      'Created a cross-platform mobile app with local SQLite caching that syncs seamlessly with a Supabase PostgreSQL backend when network becomes available. Combined with a real-time web portal for medical supervisors.',
    features: [
      'Offline-first patient check-in and medication logging with conflict-free background synchronization.',
      'Automated SMS / push notification adherence reminders for patients and care workers.',
      'Comprehensive supervisory dashboard with interactive geospatial heatmaps of active treatment cohorts.',
      'Role-based access control (RBAC) ensuring patient medical confidentiality compliant with health privacy norms.',
      'One-click PDF / Excel compliance report generation for public health agencies.'
    ],
    architecture: [
      'Frontend: Flutter for cross-platform mobile client (iOS/Android) and Next.js 15 for administrative dashboard.',
      'Backend: Supabase Edge Functions with Row Level Security (RLS) on PostgreSQL.',
      'Storage & Sync: Local SQLite with delta sync queue and automated retry backoff.',
      'Hosting: Vercel for web dashboard, Supabase managed cloud database.'
    ],
    challenges: [
      'Designing a conflict resolution mechanism for offline field updates when multiple CHWs update the same patient registry.',
      'Optimizing Flutter bundle size and memory consumption for entry-level Android devices used by field staff.'
    ],
    metrics: [
      { label: 'Patient Adherence Rate', value: '+34%' },
      { label: 'Sync Latency', value: '< 400ms' },
      { label: 'Field Staff User Rating', value: '4.8 / 5.0' },
      { label: 'Active Monitored Cases', value: '1,200+' }
    ]
  },
  {
    id: 'netpulse-monitor',
    slug: 'netpulse-monitor',
    title: 'NetPulse Network Telemetry',
    summary: 'High-throughput real-time network latency, packet loss, and server telemetry dashboard.',
    description:
      'A distributed network observability platform engineered to monitor multi-node homelabs and remote cloud infrastructure. Features sub-second telemetry aggregation, automated alert notifications via Discord/Telegram webhooks, and live throughput charts.',
    role: 'Systems & Backend Engineer',
    period: '2025',
    techStack: ['Go (Golang)', 'React', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'Docker', 'Prometheus'],
    category: 'DevOps & Systems',
    images: [
      '/images/projects/netpulse-1.svg',
      '/images/projects/netpulse-2.svg',
    ],
    liveUrl: 'https://netpulse-telemetry.pages.dev',
    repoUrl: 'https://github.com/wisam/netpulse-monitor',
    featured: true,
    problem:
      'Standard server monitoring suites are often resource-heavy, complex to configure for small-to-medium clusters, or require costly cloud subscriptions.',
    solution:
      'Engineered a lightweight Go agent (< 15MB RAM) that pushes ICMP, HTTP probe, and CPU/RAM metrics over encrypted WebSockets to a centralized Next.js/React dashboard with zero external dependencies.',
    features: [
      'Sub-500ms real-time metric streaming via persistent WebSockets.',
      'Configurable threshold alerting with webhook integrations (Slack, Discord, Telegram, Email).',
      'Historical latency graphs with 30-day retention and aggregate percentiles (p50, p95, p99).',
      'Docker Compose one-line deployment for edge nodes and control planes.'
    ],
    architecture: [
      'Agent: Go daemon compiled for Linux (ARM64/x86_64) using raw sockets for ICMP probes.',
      'Server: Go HTTP/WebSocket hub with in-memory ring buffers and optional SQLite archival.',
      'Client: React + Tailwind CSS with Canvas-based 60fps streaming time-series graphs.'
    ],
    challenges: [
      'Preventing UI rendering bottlenecks when consuming 100+ telemetry events per second across 20 monitored nodes.',
      'Cross-compiling CGO-free Go binaries for minimal Alpine Linux and embedded routers.'
    ],
    metrics: [
      { label: 'Agent Memory Footprint', value: '< 12MB' },
      { label: 'Telemetry Jitter', value: '< 5ms' },
      { label: 'Max Monitored Targets', value: '500+' },
      { label: 'Uptime Reliability', value: '99.99%' }
    ]
  },
  {
    id: 'cloudvault-core',
    slug: 'cloudvault-core',
    title: 'CloudVault Encrypted Storage',
    summary: 'Zero-knowledge client-side encrypted object storage and secure file sharing API.',
    description:
      'CloudVault is a privacy-first cloud storage solution utilizing client-side AES-GCM-256 encryption. Files are chunked and encrypted in the browser before being streamed to S3-compatible bucket backends, ensuring the host server never sees plaintext data.',
    role: 'Full-Stack Developer & Security Lead',
    period: '2024 — 2025',
    techStack: ['Next.js', 'TypeScript', 'Web Crypto API', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS S3'],
    category: 'Cloud & API',
    images: [
      '/images/projects/cloudvault-1.svg',
      '/images/projects/cloudvault-2.svg',
    ],
    liveUrl: 'https://cloudvault-secure.vercel.app',
    repoUrl: 'https://github.com/wisam/cloudvault-core',
    featured: true,
    problem:
      'Most cloud storage providers have access to unencrypted user files on their disks, creating vulnerability risks for sensitive credentials, configuration backups, and private data.',
    solution:
      'Developed a zero-knowledge web application where master keys are derived via PBKDF2 in the browser and files are encrypted with unique initialization vectors prior to multipart upload.',
    features: [
      'Client-side AES-GCM 256-bit encryption before upload leaves browser.',
      'Time-expiring, password-protected shareable download links with download count limits.',
      'Chunked streaming upload handling files up to 2GB smoothly without freezing the UI.',
      'Zero-knowledge architecture: server only stores ciphertext and cryptographically hashed auth tokens.'
    ],
    architecture: [
      'Frontend: Next.js App Router with Web Crypto API and Web Workers for multithreaded encryption.',
      'Storage: S3-compatible object storage with presigned encrypted upload URLs.',
      'Database: PostgreSQL with Prisma ORM for metadata and sharing link tokens.'
    ],
    challenges: [
      'Executing multi-gigabyte cryptographic operations in JavaScript without blocking the main rendering thread (solved with Web Workers).',
      'Implementing resumable multipart upload for large encrypted blobs.'
    ],
    metrics: [
      { label: 'Encryption Standard', value: 'AES-256-GCM' },
      { label: 'Client Throughput', value: '85 MB/s' },
      { label: 'Zero Knowledge Guarantee', value: '100%' },
      { label: 'Files Secured', value: '50k+' }
    ]
  },
  {
    id: 'omnitask-flow',
    slug: 'omnitask-flow',
    title: 'OmniTask Collaborative Workspace',
    summary: 'High-performance team project manager with real-time Kanban boards and markdown docs.',
    description:
      'A sleek, keyboard-first team collaboration workspace combining Kanban boards, sprint backlogs, and nested markdown documentation. Designed for speed, featuring instant optimistic UI updates and live multi-cursor presence.',
    role: 'Full-Stack Engineer',
    period: '2024',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL'],
    category: 'Full Stack',
    images: [
      '/images/projects/omnitask-1.svg',
      '/images/projects/omnitask-2.svg',
    ],
    liveUrl: 'https://omnitask-flow.vercel.app',
    repoUrl: 'https://github.com/wisam/omnitask-flow',
    featured: false,
    problem:
      'Existing task management software is frequently bloated, slow to load, and lacks integrated technical documentation capabilities for software teams.',
    solution:
      'Built a streamlined Next.js application with optimistic mutation state, fuzzy global command palette (Cmd+K), and markdown documentation editor.',
    features: [
      'Drag-and-drop Kanban boards with custom columns, filters, and priority tags.',
      'Rich-text & Markdown workspace with slash commands (/heading, /code, /checklist).',
      'Global keyboard shortcuts & Command Palette for swift navigation without touching the mouse.',
      'Activity audit logs and team permission levels (Admin, Member, Viewer).'
    ],
    architecture: [
      'Full-Stack Next.js 14 App Router with Server Actions and optimistic client cache.',
      'PostgreSQL database hosted on Neon with connection pooling.',
      'Tailwind CSS with custom glassmorphic theme tokens.'
    ],
    challenges: [
      'Handling high-frequency drag-and-drop position sorting efficiently in PostgreSQL.',
      'Designing an intuitive keyboard navigation system for all complex modals and lists.'
    ],
    metrics: [
      { label: 'First Contentful Paint', value: '0.8s' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Daily Active Testers', value: '350+' }
    ]
  },
  {
    id: 'meshguard-iot',
    slug: 'meshguard-iot',
    title: 'MeshGuard IoT Gateway',
    summary: 'Secure edge gateway firmware & web console for Zigbee/ESP32 sensor networks.',
    description:
      'An embedded edge system management portal and MQTT gateway for monitoring environmental sensors, power meters, and access controls in smart facilities. Built with Linux edge services and a responsive web control center.',
    role: 'Embedded Systems & Software Engineer',
    period: '2023 — 2024',
    techStack: ['Python', 'MQTT', 'Docker', 'Linux / Raspberry Pi', 'React', 'Tailwind CSS'],
    category: 'DevOps & Systems',
    images: [
      '/images/projects/meshguard-1.svg',
      '/images/projects/meshguard-2.svg',
    ],
    liveUrl: 'https://meshguard-demo.pages.dev',
    repoUrl: 'https://github.com/wisam/meshguard-iot',
    featured: false,
    problem:
      'Fragmented IoT sensor protocols often require proprietary hubs, exposing networks to security risks and vendor lock-in.',
    solution:
      'Created an open-source bridge and control dashboard that normalizes MQTT sensor payloads, enforces local TLS, and provides offline fallback rules for relay actuators.',
    features: [
      'Auto-discovery for MQTT and Zigbee2MQTT peripheral devices.',
      'Visual rule engine for creating automated triggers (e.g., temperature thresholds to ventilation fans).',
      'Real-time status indicators and network topology graph visualization.',
      'Encrypted remote tunnel integration using WireGuard VPN.'
    ],
    architecture: [
      'Edge Gateway: Python/AsyncIO daemon running as a Docker container on Raspberry Pi OS.',
      'Message Bus: Mosquitto MQTT broker with TLS client certificates.',
      'Web Interface: React Single Page Application served directly by embedded Nginx.'
    ],
    challenges: [
      'Ensuring fail-safe execution of automated relay rules even during gateway network loss.',
      'Constraining write operations to extend flash SD card lifespan on Raspberry Pi.'
    ],
    metrics: [
      { label: 'Edge Latency', value: '< 15ms' },
      { label: 'Sensor Nodes Connected', value: '64' },
      { label: 'System Uptime', value: '180+ Days' }
    ]
  },
  {
    id: 'devmetrics-hub',
    slug: 'devmetrics-hub',
    title: 'DevMetrics Cloud Audit',
    summary: 'Automated GitHub & Cloudflare deployment audit, Lighthouse score tracker, and SLA monitor.',
    description:
      'A continuous quality platform that tracks website performance regressions, accessibility scores, and deployment uptime over time, providing team leads with actionable weekly audit digests.',
    role: 'Full-Stack Developer',
    period: '2024',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'GitHub API'],
    category: 'Cloud & API',
    images: [
      '/images/projects/devmetrics-1.svg',
      '/images/projects/devmetrics-2.svg',
    ],
    liveUrl: 'https://devmetrics-hub.vercel.app',
    repoUrl: 'https://github.com/wisam/devmetrics-hub',
    featured: false,
    problem:
      'Teams frequently push releases that unintentionally degrade web performance, Lighthouse scores, and SEO metadata without noticing until user complaints arise.',
    solution:
      'Built an automated webhook consumer that runs headless Lighthouse audits on every pull request deploy preview and posts formatted score comparison comments.',
    features: [
      'Automated PR audit bot posting Lighthouse delta scores on GitHub PRs.',
      'Historical trend charts for Core Web Vitals (LCP, FID, CLS, INP).',
      'Automated broken link checker and OpenGraph preview verification.',
      'Configurable alert thresholds for performance regressions exceeding 10%.'
    ],
    architecture: [
      'Next.js 14 App Router, Next.js Route Handlers for GitHub Webhooks.',
      'Puppeteer & Chrome Headless for automated Lighthouse evaluations.',
      'PostgreSQL for time-series audit records.'
    ],
    challenges: [
      'Running headless browser audits in serverless container execution limits without timing out.',
      'Normalizing variance in Lighthouse scores across different network test environments.'
    ],
    metrics: [
      { label: 'Audit Run Time', value: '< 25s' },
      { label: 'PRs Audited', value: '4,500+' },
      { label: 'Performance Gain', value: '+28%' }
    ]
  }
];

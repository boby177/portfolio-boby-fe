import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "cbms",
    companyName: "CBMS (Cikarang Behandle Management System)",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Internal system used by government Customs (BC) and Quarantine teams to manage the container inspection process across a 9-stage workflow.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "PHP",
      "CodeIgniter",
      "SQL Server",
      "Stored Procedures",
      "JQuery",
      "Ajax",
    ],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2026-12-01"),
    companyLogoImg: "/projects/cbms/cbms_logo.png",
    pagesInfoArr: [
      {
        title: "Status Monitoring Dashboard",
        description:
          "A real-time dashboard displaying container status across 9 workflow stages, with live updates as statuses change.",
        imgArr: ["/projects/cbms/cbms_status_dashboard_illustration.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a full-stack engineer, I built and maintained CBMS, a system used by government Customs (BC) and Quarantine teams to manage the container inspection process across 9 distinct status stages.",
        "The system tracks each container through a defined workflow, from initial waiting status through to completion, with real-time updates and validation at every stage.",
      ],
      bullets: [
        "Built a real-time monitoring dashboard displaying container status across all 9 stages, with live updates as status changes",
        "Implemented validation logic for each of the 9 status stages to ensure data integrity throughout the process",
        "Developed status update features integrating with external APIs, including BC's government API and Microsoft 365 API",
        'Designed the status transition logic connecting each stage from "waiting" to "done" across the 9-step workflow',
        "Resolved a critical production incident from a counter field overflow, coordinating fixes across multiple stored procedures and tables",
        "Built a caching layer and automated long-running query terminator to improve database performance under high concurrency",
      ],
    },
  },
  {
    id: "doss",
    companyName: "DOSS (Dry Port One Stop Service System)",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Support"],
    shortDescription:
      "Internal system used across multiple divisions (CS, Finance, Tax, Gate/CY, Operations) to streamline daily logistics workflows with document generation and government data integration.",
    websiteLink: "",
    githubLink: "",
    techStack: ["PHP", "CodeIgniter", "SQL Server", "JQuery", "Ajax"],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2026-12-01"),
    companyLogoImg: "/projects/doss/doss-logo.png",
    pagesInfoArr: [
      {
        title: "System Architecture",
        description:
          "DOSS connects multiple internal divisions to shared document generation and external government data sources.",
        imgArr: ["/projects/doss/doss_architecture_diagram.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I contributed feature development for DOSS, a system used across multiple internal divisions including Customer Service, Finance, Tax, Gate/Container Yard, Behandle, and Operations to streamline daily logistics workflows.",
        "The system centralizes document generation and data integration needs shared across divisions, reducing manual work for tasks like tax reporting and container yard operations.",
      ],
      bullets: [
        "Built an XML data generator pulling from invoice data, used by the Tax team to upload directly into the government tax application",
        "Developed features integrating with government Customs (BC) data, primarily used by the Customer Service team",
        "Built PDF, Excel, and QR code generation used across multiple divisions, with QR codes primarily used by the Container Yard (CY) team",
        "Provided ongoing operational support, fixing bugs and resolving issues reported by users across divisions",
      ],
    },
  },
  {
    id: "mycdp",
    companyName: "MyCDP",
    type: "Professional",
    category: ["Backend", "Support"],
    shortDescription:
      "Payment and document processing system covering SP2 import, KMT export, and container trucking/delivery processes, integrated with a payment gateway and government Customs API.",
    websiteLink: "",
    githubLink: "",
    techStack: ["SQL Server", "Spring Boot", "Java"],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2026-12-01"),
    companyLogoImg: "/projects/mycdp/mycdp-logo.png",
    pagesInfoArr: [
      {
        title: "System Architecture",
        description:
          "MyCDP handles payment verification and auto-generates invoices and SP2 documents, integrating with the Doku payment gateway and government Customs API.",
        imgArr: ["/projects/mycdp/mycdp_architecture_diagram.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I provided support and reliability improvements for MyCDP, a payment system covering SP2 import, KMT export, and container trucking/delivery processes.",
        "Work focused on diagnosing and resolving production issues related to payment transactions and document generation, ensuring users could complete critical logistics processes without manual intervention.",
      ],
      bullets: [
        "Investigated and resolved transaction issues, including cases where payment status remained pending, by cross-checking with the Doku payment gateway",
        "Fixed errors affecting invoice and SP2 print generation",
        "Built a manual refresh feature that checks payment status via the Doku API and automatically triggers SP2 invoice generation and stored procedure execution on success",
        "Worked with BL (Bill of Lading) document verification, pulling data from the government Customs (BC) API",
      ],
    },
  },
  {
    id: "portfolio-website",
    companyName: "Personal Portfolio Website",
    type: "Personal",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Personal portfolio website adapted from an open-source Next.js template, customized with real project case studies, work experience, and a rated skill system.",
    websiteLink: "https://nbarkiya.xyz",
    githubLink: "",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Git"],
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-07-30"),
    companyLogoImg: "/projects/portfolio/portfolio-logo.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "A clean, minimal landing page with sections for skills, projects, experience, and contributions.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I forked and customized an open-source Next.js portfolio template originally built by Naman Barkiya, adapting it to showcase my own work experience, projects, and technical skills.",
        "The site includes a rated skill system, detailed experience entries per company, and case studies for both professional and personal projects.",
      ],
      bullets: [
        "Forked and customized an open-source Next.js portfolio template",
        "Populated the site with real project case studies, work experience, and a rated skill system",
        "Adapted content and structure to fit a career transition narrative targeting the Japanese job market",
      ],
    },
  },
  {
    id: "bm-wallet",
    companyName: "BM Wallet",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Digital wallet/payment backend service built with NestJS, TypeORM, and PostgreSQL, featuring full Swagger API documentation and JWT authentication.",
    websiteLink: "https://bm-wallet-production.up.railway.app/api/docs",
    githubLink: "https://github.com/boby177/bm-wallet",
    techStack: [
      "Nest.js",
      "Typescript",
      "TypeORM",
      "PostgreSQL",
      "Swagger",
      "JWT",
      "Git",
    ],
    startDate: new Date("2024-11-16"),
    endDate: new Date("2024-11-23"),
    companyLogoImg: "/projects/bm-wallet/bm-wallet-logo.png",
    pagesInfoArr: [
      {
        title: "Database Schema",
        description:
          "Relational schema covering wallet balances, transactions, and related entities.",
        imgArr: ["/projects/bm-wallet/bm-wallet-db-schema.png"],
      },
      {
        title: "API Documentation",
        description:
          "Swagger-generated API documentation covering all wallet endpoints.",
        imgArr: ["/projects/bm-wallet/bm-wallet-swagger-docs.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "BM Wallet is a backend service for a digital wallet and payment application, built independently to practice designing a transactional system from scratch.",
        "The project covers database design, API development, and documentation, originally built as a take-home coding assessment and since expanded as a personal reference project.",
      ],
      bullets: [
        "Designed a relational database schema for wallet balances, transactions, and related entities using TypeORM and PostgreSQL",
        "Built a fully documented REST API using Swagger, covering wallet operations end-to-end",
        "Implemented JWT-based authentication to secure API endpoints",
        "Deployed a live instance to Railway for public API testing and documentation access",
      ],
    },
  },
  {
    id: "bpk-penabur",
    companyName: "BPK Penabur School Management System",
    type: "Professional",
    category: ["Backend"],
    shortDescription:
      "School management system for a major Indonesian education institution, built with microservices. Led backend development for the Student Activity module.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Nest.js",
      "TypeORM",
      "PostgreSQL",
      "Swagger",
      "Typescript",
      "AWS S3",
      "Google Cloud",
      "Git",
    ],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-16"),
    companyLogoImg: "/projects/bpk-penabur/bpk-logo.png",
    pagesInfoArr: [
      {
        title: "Student Activity Module",
        description:
          "Backend module covering student extracurricular activities and health check-up tracking, with shared SSO login across all services.",
        imgArr: ["/projects/bpk-penabur/bpk_sso_architecture_diagram.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I served as backend team lead for the Student Activity module in BPK Penabur's school management system, part of a large-scale microservices platform where each module was developed and maintained by separate frontend and backend teams.",
        "The module covered student extracurricular activities and health check-up tracking, and included a shared SSO login system used across all services on the platform.",
      ],
      bullets: [
        "Led backend development for the Student Activity module, covering extracurricular activities and health check-up tracking",
        "Built a shared SSO login module connecting all services, enabling single sign-on across the entire platform",
        "Integrated data from other module services to support cross-module features",
        "Designed and developed APIs using NestJS, TypeORM, and PostgreSQL, documented with Swagger",
        "Coordinated with QA, UI/UX, mobile dev, frontend, and other module service teams to align on requirements and API contracts",
      ],
    },
  },
  {
    id: "ipeka",
    companyName: "IPEKA Christian School Management System",
    type: "Professional",
    category: ["Full Stack"],
    shortDescription:
      "School management system for a major Indonesian education institution, built with microservices. Contributed as both frontend and backend engineer.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Nest.js", "Prisma", "PostgreSQL", "AWS S3", "Typescript"],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/projects/ipeka/ipeka-logo.png",
    pagesInfoArr: [
      {
        title: "Module Services Architecture",
        description:
          "Backend API and database architecture across 5+ module services in a microservices system.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I contributed as a full-stack engineer on IPEKA's school management system, starting on the frontend by building UI mockups based on Figma designs before transitioning to backend development.",
        "On the backend, I designed and developed APIs across 5+ module services within a microservices architecture, including database schema design and service-level architecture for individual modules.",
      ],
      bullets: [
        "Built initial frontend mockups based on UI/UX Figma designs before shifting focus to backend",
        "Designed and developed APIs across 5+ module services using NestJS, Prisma, and PostgreSQL",
        "Designed database schemas and service architecture for individual modules within the microservices system",
        "Integrated data across multiple module services within the microservices architecture",
        "Worked with frontend, mobile, UI/UX design, and QA teams, following Agile methodology",
      ],
    },
  },
  {
    id: "fishtail",
    companyName: "Fishtail Trade Financing Platform",
    type: "Professional",
    category: ["Backend"],
    shortDescription:
      "Trade financing platform for a US-based startup, built with a globally distributed team across Asia, the US, and Europe.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Node.js",
      "express.js",
      "GraphQL",
      "Apollo Server",
      "Prisma",
      "PostgreSQL",
      "Swagger",
      "JWT",
      "Google Cloud",
      "Git",
    ],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/projects/fishtail/fishtail-logo.png",
    pagesInfoArr: [
      {
        title: "Backend Architecture",
        description:
          "GraphQL-based backend for loan application and payment processing flows, built for a globally distributed team.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I worked as a backend engineer on Fishtail, a trade financing platform for a US-based startup, collaborating within a globally distributed team spanning Asia, the US, and Europe.",
        "Communication and collaboration were conducted fully in English, with work hours aligned to US timezone to coordinate effectively with the distributed team.",
      ],
      bullets: [
        "Built backend features using Node.js, Express, Prisma, and GraphQL (Apollo Server, GraphQL Yoga)",
        "Implemented JWT-based authentication for secure user account creation",
        "Integrated GCP Bucket for file storage",
        "Collaborated with frontend, DevOps, design, and project management teams",
        "Followed Agile methodology, presenting completed features every 2-week sprint",
      ],
    },
  },
  {
    id: "bioma",
    companyName: "Bioma Loan Product Platform",
    type: "Professional",
    category: ["Full Stack"],
    shortDescription:
      "Loan product platform developed for a government (Kominfo) initiative, using Node.js, PostgreSQL, and React.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Sequelize",
      "Typescript",
      "Git",
    ],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/bioma/bioma-logo.png",
    pagesInfoArr: [
      {
        title: "Loan Product Detail View",
        description:
          "Frontend and backend implementation for detailed loan product view pages within the platform.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I worked as a full-stack engineer on Bioma, a loan product platform developed for a government (Kominfo) initiative, handling both backend and frontend development.",
        "The role involved close coordination with both the Bioma and Kominfo teams, presenting weekly progress updates alongside QA, frontend, mobile, and project management teams.",
      ],
      bullets: [
        "Built both backend and frontend features, including detailed loan product view pages",
        "Presented weekly progress updates to both the Bioma and Kominfo teams",
        "Collaborated with QA, frontend, mobile, and project management teams",
        "Used Sequelize as the ORM layer for PostgreSQL database operations",
      ],
    },
  },
  {
    id: "hydrotoring",
    companyName: "Hydrotoring",
    type: "Personal",
    category: ["Web Dev", "IoT"],
    shortDescription:
      "IoT-based hydroponic monitoring system built for my undergraduate thesis, combining sensor hardware with a real-time web dashboard.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Javascript",
      "Firebase",
      "Chart.js",
      "Arduino",
      "Raspberry Pi",
    ],
    startDate: new Date("2019-09-01"),
    endDate: new Date("2020-06-01"),
    companyLogoImg: "/projects/hydrotoring/hydrotoring-logo.png",
    pagesInfoArr: [
      {
        title: "System Architecture",
        description:
          "End-to-end architecture covering hardware (sensors, Arduino, Raspberry Pi) and software (Firebase, web dashboard) flow.",
        imgArr: ["/projects/hydrotoring/architecture-system.png"],
      },
      {
        title: "Use Case Diagram",
        description:
          "Use case diagram outlining user interactions with the dashboard and sensor data views.",
        imgArr: ["/projects/hydrotoring/usecase.png"],
      },
      {
        title: "Landing Page",
        description:
          "Introductory landing page explaining the Hydrotoring monitoring system.",
        imgArr: [
          "/projects/hydrotoring/landing-1.png",
          "/projects/hydrotoring/landing-2.png",
        ],
      },
      {
        title: "Dashboard",
        description:
          "Main dashboard showing real-time charts for humidity, temperature, water acidity, and soil moisture.",
        imgArr: ["/projects/hydrotoring/dashboard.png"],
      },
      {
        title: "Sensor Detail Pages",
        description:
          "Individual pages per sensor showing live charts and historical readings.",
        imgArr: [
          "/projects/hydrotoring/sensor-tds.png",
          "/projects/hydrotoring/sensor-temp.png",
          "/projects/hydrotoring/sensor-yl-69.png",
          "/projects/hydrotoring/history.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Hydrotoring is an IoT-based hydroponic monitoring system I built for my undergraduate thesis at Universitas Komputer Indonesia (UNIKOM).",
        "The system connects 4 types of sensors (pH, TDS, DHT22, YL-69) to Arduino Uno and Raspberry Pi 3 microcontrollers, streaming real-time data to Firebase, which is then visualized through live charts and historical tables on a web dashboard.",
      ],
      bullets: [
        "Integrated pH, TDS, temperature/humidity (DHT22), and soil moisture (YL-69) sensors via Arduino Uno and Raspberry Pi 3",
        "Streamed real-time sensor data to Firebase for storage and live retrieval",
        "Built a web dashboard with authentication and per-sensor monitoring pages using Chart.js for data visualization",
        "Designed the end-to-end system architecture covering hardware, data flow, and the web application",
        "Documented the system with use case diagrams and architecture diagrams as part of the thesis",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

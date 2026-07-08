import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "cdp",
    position: "Software Engineer",
    company: "Cikarang Dry Port ",
    location: "Bekasi, Indonesia",
    startDate: new Date("2024-12-16"),
    endDate: "Present",
    description: [
      "Maintain and support 10+ internal business applications across logistics operations, providing 24-hour on-call incident response.",
      "Resolved a critical production incident involving a numeric field overflow in SQL Server affecting multiple stored procedures and downstream tables.",
      "Built internal monitoring dashboards (Next.js, Tailwind, Recharts) replacing manual Google Sheets-based tracking for plant conditions and vehicle certification status.",
    ],
    achievements: [
      "Diagnosed and fixed a production-breaking bug where a counter field exceeded its column width after crossing 1 million records, coordinating fixes across multiple stored procedures and tables.",
      "Designed a caching layer (cache table + SQL Agent job) to reduce concurrent load on a high-traffic tracking application.",
      "Delivered new features using CodeIgniter (PHP) and SQL Server based on direct end-user requirements gathering.",
    ],
    skills: [
      "PHP",
      "CodeIgniter",
      "SQL Server",
      "Stored Procedures",
      "Next.js",
      "React",
      "Javascript",
      "JQuery",
      "Ajax",
    ],
    companyUrl: "https://www.cikarangdryport.com",
    logo: "/experience/cdp-logo.png",
  },
  {
    id: "wgs",
    position: "Website Developer",
    company: "Walden Global Service",
    location: "Bandung, Indonesia",
    startDate: new Date("2022-03-01"),
    endDate: new Date("2024-12-13"),
    description: [
      "Delivered full-stack and backend development across 3 major client projects using Node.js, NestJS, and React/Next.js.",
      "Promoted to team leader for a 30+ engineer school management system project within the first two years.",
      "Contributed to a US-based fintech project (Fishtail), collaborating with an international team in English across time zones.",
    ],
    achievements: [
      "Selected as team leader for the 'Student Activity' module on a 30+ engineer project, overseeing module architecture and delivery.",
      "Built a shared authentication module (Google SSO) used across multiple microservices for a large-scale school management platform.",
      "Recognized for technical ability within the first year and assigned to an international team supporting a US fintech client, working night-shift meetings to align with US time zones.",
    ],
    skills: [
      "Node.js",
      "Nest.js",
      "express.js",
      "Typescript",
      "Javascript",
      "React",
      "Next.js",
      "Material UI",
      "PostgreSQL",
      "Prisma",
      "TypeORM",
      "GraphQL",
      "Apollo Server",
      "Swagger",
      "AWS S3",
      "GCP Bucket",
      "Git",
      "Agile Methodology",
    ],
    companyUrl: "https://wgs.co.id",
    logo: "/experience/wgs-logo.png",
  },
  {
    id: "builtdesign",
    position: "Internship",
    company: "Research Center for Informatics, LIPI",
    location: "Bandung, Indonesia",
    startDate: new Date("2019-07-01"),
    endDate: new Date("2019-10-01"),
    description: [
      "Completed a university internship building a monitoring dashboard for environmental sensor data (air humidity, temperature, and soil moisture).",
      "Developed a cross-platform system with a JavaScript-based web dashboard and a mobile app using Flutter and Dart.",
      "Used Firebase for real-time data handling and testing, working with simulated sensor data as the project was not yet integrated with physical hardware.",
      "Compiled a final internship report documenting the project scope and outcomes for university submission.",
    ],
    achievements: [
      "Built a cross-platform monitoring dashboard (web + mobile) for environmental sensor readings, ensuring consistent UI and data sync across platforms.",
      "Implemented Firebase real-time database integration to handle and test live data flow ahead of physical sensor deployment.",
      "Gained hands-on experience with mobile development using Flutter and Dart on a real-world use case.",
      "Completed the internship with a formal project report evaluated by both the host institution and university.",
    ],
    skills: [
      "Javascript",
      "Flutter",
      "Dart",
      "Firebase",
      "Dashboard Development",
    ],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/lipi-logo.png",
  },
];

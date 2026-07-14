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
      "Software Engineer at a container port and logistics operator, supporting 10+ internal apps used across daily port operations",
      "Work closely with different divisions — CS, Finance, Tax, Commercial, Gate Team, and government Customs (BC) — to resolve reported issues",
      "Fix bugs reported through the ticketing system and build new features that connect with other internal apps via microservices",
      "Clean up slow queries and stored procedures so things run smoother",
      "Comfortable troubleshooting fast under pressure, since users always want issues fixed quickly",
    ],
    achievements: [
      "Fixed a production incident where a counter field overflowed after hitting 1 million records, tracing and patching the issue across several stored procedures and tables",
      "Built a caching layer (cache table + SQL Server Agent job) to reduce load and keep a high-traffic tracking app stable",
      "Replaced a manual, spreadsheet-based tracking process with proper monitoring dashboards (Next.js, Tailwind, Recharts)",
      "Work directly with CS, Finance, Tax, Commercial, Gate, and Customs teams to gather requirements and resolve issues fast through the ticketing system",
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
      "Remote Desktop",
      "IT Support",
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
      "Software Engineer at WGS (IT outsourcing), assigned to work on 5 different client projects while employed under the same company",
      "Delivered 3 major projects: a government-affiliated (Kominfo) product platform, a US-based loan/financing app, and 2 large-scale school management systems built from scratch",
      "Worked with an international team in English on the US client project",
      "Followed Agile methodology, including sprint meetings every 2 weeks, collaborating across FE, UI/UX, mobile, QA, PM, and product owner teams",
      "Took on multiple roles across projects — fullstack, backend, and frontend — depending on client needs",
    ],
    achievements: [
      "Delivered a government-affiliated (Kominfo) product loading application end-to-end as a fullstack engineer",
      "Handled backend development for a US client's loan/financing platform, working full-time in English with a multinational team",
      "Designed backend architecture from scratch for 2 major school management systems (IPEKA, BPK Penabur), covering schema design through API implementation",
      "Implemented cloud integrations (AWS S3, GCP Bucket, GCP SSO, JWT) across multiple client projects",
      "Adapted across 5 different companies and multiple roles (fullstack, backend, frontend) within a single outsourcing tenure",
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
      "JEST",
      "JWT",
      "Microservices",
      "Agile Methodology",
    ],
    companyUrl: "https://wgs.co.id",
    logo: "/experience/wgs-logo.png",
  },
  {
    id: "lipi",
    position: "Internship",
    company: "Research Center for Informatics, LIPI",
    location: "Bandung, Indonesia",
    startDate: new Date("2019-07-01"),
    endDate: new Date("2019-10-01"),
    description: [
      "University internship (~4 months) at a government research institution",
      "Built a monitoring dashboard displaying sensor data — air humidity, temperature, and soil moisture — for plantation/agricultural monitoring",
      "Developed the web dashboard using JavaScript and Bootstrap, and a mobile app using Flutter and Dart, with Firebase as the database",
      "Project was a design/prototype concept only, not yet integrated with actual IoT hardware",
      "Delivered a final presentation of the project results",
    ],
    achievements: [
      "Built a cross-platform monitoring dashboard (web + mobile) for agricultural sensor data, covering humidity, temperature, and soil conditions",
      "Implemented Firebase as the real-time database for both web and mobile interfaces",
      "Gained hands-on experience with mobile development using Flutter and Dart",
      "Presented the final project and received a good evaluation score from the university",
    ],
    skills: [
      "Javascript",
      "Flutter",
      "Dart",
      "Bootstrap",
      "Firebase",
      "Dashboard Development",
    ],
    companyUrl: "https://lipi.or.id",
    logo: "/experience/lipi-logo.png",
  },
];

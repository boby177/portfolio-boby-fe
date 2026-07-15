import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 5,
    icon: Icons.nestjs,
  },
  {
    name: "Code Igniter",
    description:
      "Develop web applications rapidly with a lightweight PHP framework that emphasizes simplicity and performance.",
    rating: 5,
    icon: Icons.codeigniter,
  },
  {
    name: "Laravel",
    description:
      "Build modern web applications with elegant syntax and powerful features using a PHP framework.",
    rating: 3,
    icon: Icons.laravel,
  },
  {
    name: "Spring Boot",
    description:
      "Simplify the creation of stand-alone, production-grade Spring-based applications.",
    rating: 1,
    icon: Icons.springboot,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "GraphQL",
    description: "Design and build APIs using Apollo Server and GraphQL Yoga.",
    rating: 3,
    icon: Icons.graphql,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "PHP",
    description:
      "Build dynamic web applications and server-side scripts with a widely-used scripting language.",
    rating: 5,
    icon: Icons.php,
  },
  {
    name: "Tailwind CSS",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 3,
    icon: Icons.tailwindcss,
  },
  // {
  //   name: "AWS",
  //   description:
  //     "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
  //   rating: 3,
  //   icon: Icons.amazonaws,
  // },
  {
    name: "Google Cloud Platform",
    description:
      "Manage cloud storage buckets and implement Google login integration.",
    rating: 3,
    icon: Icons.googlecloud,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "PostgreSQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "SQL Server",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.sqlite,
  },
  {
    name: "GitHub",
    description:
      "Manage and organize code repositories efficiently for collaborative software development.",
    rating: 5,
    icon: Icons.github,
  },
  {
    name: "Prisma",
    description:
      "Simplify database access and management with a modern ORM for Node.js and TypeScript.",
    rating: 5,
    icon: Icons.prisma,
  },
  {
    name: "TypeORM",
    description:
      "A TypeScript-based ORM for Node.js and TypeScript, supporting both Active Record and Data Mapper patterns.",
    rating: 4,
    icon: Icons.typeorm,
  },
  {
    name: "Docker",
    description: "Configure basic containers within CI/CD pipelines.",
    rating: 2,
    icon: Icons.docker,
  },
  {
    name: "Firebase",
    description: "Build real-time data sync features into applications.",
    rating: 3,
    icon: Icons.firebase,
  },
  {
    name: "Amazon Web Services (AWS)",
    description: "Set up static file storage using S3 for application assets.",
    rating: 2,
    icon: Icons.aws,
  },
  {
    name: "Java",
    description: "Basic understanding of syntax and OOP concepts.",
    rating: 2,
    icon: Icons.java,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);

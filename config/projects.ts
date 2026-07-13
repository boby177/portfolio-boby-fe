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
    category: ["Web Dev"],
    shortDescription:
      "Personal portfolio website adapted from an open-source Next.js template, customized with real project case studies, work experience, and a rated skill system.",
    websiteLink: "https://nbarkiya.xyz",
    githubLink: "",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS"],
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
    id: "the-super-focus",
    companyName: "TheSuperFocus",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Pomodoro-inspired productivity web app with real-time sessions and recurring payments.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Socket.io",
      "Typescript",
      "MongoDB",
    ],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Realtime Focus Sessions",
        description:
          "Built real-time focus sessions using sockets to help people stay accountable and productive.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "TheSuperFocus is a productivity web app inspired by the Pomodoro technique, built to help users stay focused and complete deep-work sessions.",
        "It includes real-time session support and a paid tier with recurring billing.",
      ],
      bullets: [
        "Built a Pomodoro-inspired productivity web app using real-time sockets.",
        "Integrated Razorpay for recurring payments, securing 10+ premium users.",
      ],
    },
  },
  {
    id: "built-design",
    companyName: "Builtdesign",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://builtdesign.in",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "Nest.js",
      "Typescript",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/builtdesign/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [
          "/projects/builtdesign/landing_1.webp",
          "/projects/builtdesign/landing_3.webp",
          "/projects/builtdesign/landing_5.webp",
          "/projects/builtdesign/landing_6.webp",
          "/projects/builtdesign/landing_2.webp",
          "/projects/builtdesign/landing_4.webp",
        ],
      },
      {
        title: "Custom PDF Reader and optimizer",
        description:
          "Specialized PDF viewer with optimization features for improved performance and user experience",
        imgArr: ["/projects/builtdesign/pdf_opt.webp"],
      },
      {
        title: "Clients Dashboard",
        description:
          "Comprehensive client portal with project tracking, document management, and communication tools",
        imgArr: [
          "/projects/builtdesign/cli_dashboard_1.webp",
          "/projects/builtdesign/cli_dashboard_2.webp",
          "/projects/builtdesign/cli_dashboard_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Powerful administrative interface for managing users, projects, and system settings",
        imgArr: ["/projects/builtdesign/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
      ],
    },
  },
  {
    id: "the-super-quotes",
    companyName: "The Super Quotes",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.thesuperlife",
    techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/superquotes/logo.png",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description:
          "Elegantly designed quotes display with customizable themes and sharing options",
        imgArr: ["/projects/superquotes/app_2.webp"],
      },
      {
        title: "Quotes Download Component",
        description:
          "Feature allowing users to download quotes as beautiful images for social media sharing",
        imgArr: [
          "/projects/superquotes/app_4.webp",
          "/projects/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description:
          "User profile management with favorites, history, and personalization settings",
        imgArr: ["/projects/superquotes/app_6.webp"],
      },
      {
        title: "Interest Selection and Update Page",
        description:
          "Interactive interface for users to select and update their quote preferences and interests",
        imgArr: [
          "/projects/superquotes/app_1.webp",
          "/projects/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description:
          "Adaptive design ensuring optimal user experience across various device sizes and orientations",
        imgArr: ["/projects/superquotes/app_5.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "apex-shopping",
    companyName: "Apex Shopping App",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
    githubLink: "https://github.com/namanbarkiya/apex-shopping-app",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/apex/logo.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "Custom animated splash screen with app branding",
        imgArr: ["/projects/apex/app_7.webp"],
      },
      {
        title: "Login/Signup Authentication",
        description: "Secure user authentication system with Firebase",
        imgArr: ["/projects/apex/app_1.webp"],
      },
      {
        title: "All Products Explore Screen",
        description: "Interactive product browsing with categories and filters",
        imgArr: ["/projects/apex/app_3.webp"],
      },
      {
        title: "Admin Panel",
        description:
          "Comprehensive admin dashboard for product and order management",
        imgArr: ["/projects/apex/app_4.webp", "/projects/apex/app_6.webp"],
      },
      {
        title: "Sidenav Navigation",
        description: "Intuitive side navigation for easy app navigation",
        imgArr: ["/projects/apex/app_5.webp"],
      },
      {
        title: "Firebase Database",
        description:
          "Real-time database structure for efficient data management",
        imgArr: ["/projects/apex/db.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        "Implemented secure user authentication and authorization using Firebase",
        "Designed and developed an intuitive product browsing and shopping cart system",
        "Created a comprehensive admin panel for product and order management",
        "Integrated real-time data synchronization using Firebase Database",
        "Implemented state management using Redux for optimal performance",
        "Designed responsive UI components following mobile-first principles",
        "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "builtdesign-blogs",
    companyName: "Builtdesign Blogs",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
    websiteLink: "https://blog.builtdesign.in",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/builtdesign-blogs/logo.png",
    pagesInfoArr: [
      {
        title: "Blog Landing Page",
        description:
          "Modern and responsive landing page showcasing featured articles",
        imgArr: ["/projects/builtdesign-blogs/blog_2.webp"],
      },
      {
        title: "Blog Listing",
        description:
          "Organized display of all blog posts with search and filtering",
        imgArr: ["/projects/builtdesign-blogs/blog_3.webp"],
      },
      {
        title: "Category Navigation",
        description: "Intuitive category-based navigation system",
        imgArr: ["/projects/builtdesign-blogs/blog_1.webp"],
      },
      {
        title: "Article View",
        description:
          "Clean and readable article layout with rich media support",
        imgArr: [
          "/projects/builtdesign-blogs/blog_4.webp",
          "/projects/builtdesign-blogs/blog_5.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As part of the Builtdesign platform, I developed a sophisticated blog website that serves as a content hub for the company's thought leadership and industry insights. The project leveraged Next.js and React to create a fast, SEO-friendly platform.",
        "The blog platform features a modern, responsive design that prioritizes readability and user engagement. I implemented a robust content management system using Netlify CMS, enabling the content team to easily publish and manage blog posts.",
        "The architecture includes server-side rendering for optimal performance and SEO, while MongoDB provides flexible content storage. TypeScript ensures code reliability and maintainability throughout the application.",
        "Key features include category-based navigation, search functionality, and a rich text editor for content creation. The platform supports various content types including images, code snippets, and embedded media.",
      ],
      bullets: [
        "Developed a modern blog platform using Next.js and React with TypeScript",
        "Implemented Netlify CMS for efficient content management",
        "Created a responsive design that prioritizes readability and user engagement",
        "Built server-side rendering for optimal performance and SEO",
        "Integrated MongoDB for flexible content storage and management",
        "Developed category-based navigation and search functionality",
        "Implemented rich text editing capabilities for content creation",
      ],
    },
  },

  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/projects/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/projects/cirql/web_3.png", "/projects/cirql/web_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Cirql Dashboard' personal, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
        "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
  {
    id: "inscript-hindi-typing",
    companyName: "Inscript Hindi Typing",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
    websiteLink: "https://hindityping.namanbarkiya.xyz",
    githubLink: "https://github.com/namanbarkiya/inscript-hindi-keyboard",
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-06-15"),
    companyLogoImg: "/projects/hindi-keyboard/logo.png",
    pagesInfoArr: [
      {
        title: "Typing Interface",
        description: "Minimal and user-friendly Inscript Hindi typing area",
        imgArr: ["/projects/hindi-keyboard/web_1.png"],
      },
      {
        title: "Copy and Download the file",
        description:
          "Export functionality allowing users to copy text or download as a document file",
        imgArr: [
          "/projects/hindi-keyboard/web_2.png",
          "/projects/hindi-keyboard/web_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
        "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
        "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
        "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
        "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
        "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
      ],
      bullets: [
        "Developed a user-friendly website for Inscript Hindi typing.",
        "Catered to the needs of Hindi writers in digital news and media.",
        "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
        "Mapped English and Hindi alphabets to provide a seamless typing experience.",
        "Utilized HTML and CSS to design a user-friendly UI.",
        "Implemented Local Storage to enable users to save and retrieve their work.",
        "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
        "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

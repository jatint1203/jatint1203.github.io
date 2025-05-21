import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  CodeIcon,
  GraduationCap,
  HomeIcon,
  NotebookIcon,
  PencilLine,
} from "lucide-react";

export const DATA = {
  name: "Jatin Tiwari",
  initials: "JT",
  url: "https://jatintiwari.dev",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Python Developer specializing in backend development, API creation, and database management. Passionate about building scalable and secure web applications.",
  summary: "Experienced Python Developer with expertise in backend development, API creation, and database management. Proficient in Django and DRF for building scalable and secure web applications. Skilled in Docker, Nginx, and Gunicorn for efficient containerization and high-performance deployment. Strong understanding of RESTful API design and third-party API integrations.",    

  avatarUrl: "/logo-face.png",
  skills: [
    // Languages
    "Python", 
    "JavaScript",
    "SQL",
    "PostgreSQL",

    // Frameworks & Libraries
    "Django",
    "Django Rest Framework (DRF)",
    "Flask",
    "React.js",

    // Developer Tools & DevOps
    "Linux",
    "Git",
    "Docker",
    "NGINX",
    "RabbitMQ",
    "VS Code",
    "Postman",
    "Grafana",
    "Prometheus",

    // Other Skills
    "HTML",
    "WordPress",
    "Web Security",
    "Cloud Deployment"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "#education", icon: GraduationCap, label: "Education" },
  ],
  contact: {
    email: "jatintiwari9312@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jatint1203",
        icon: Icons.github,
        contact: true,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jatintiwari1203",
        icon: Icons.linkedin,
        contact: true,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:jatintiwari9312@gmail.com",
        icon: Icons.email,
        contact: true,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Daten and Wissen Pvt Ltd",
      href: "",
      badges: ["On-Site", "Mumbai", "India" ],
      location: "Mumbai",
      title: "Software Developer Engineer - Backend",
      icon: false,
      logoUrl: "/experience/daten.png",
      start: "Nov 2023",
      end: "April 2025",
      description: `* Reduced the number of APIs by 40% using class-based views, improving data retrieval speed by 20%.
        \n* Optimized PostgreSQL databases and queries, achieving a 30% reduction in response time.
        \n* Ensured application scalability and reliability through effective server deployment using Nginx and Gunicorn.
        \n* Enhanced team efficiency by 15% through collaboration with cross-functional teams to meet project deadlines.
        \n* Used Grafana and Prometheus for monitor and visualize applications and systems.
        \n* Handled server management and Docker configuration for streamlined deployments.
        \n* Maintained GitHub repositories, ensuring version control and team coordination.
        \n* Assisted in software installation, resolving technical issues and documenting the process.
        \n* Contributed to research and development by exploring new tools and technologies to enhance system performance.`,
    },
    {
    
      company: "Self Employed - Freelance",
      href: "",
      badges: ["Hybrid", "India"],
      location: "Hybrid",
      title: "Full Stack Developer",
      icon: false,
      logoUrl: "/experience/self.png",
      start: "Sept 2021",
      end: "Oct 2023",
      description: `* Designed efficient APIs leveraging the capabilities of DRF, supporting over 2000 concurrent users daily.
        \n* Built full-stack applications using Django for the backend and HTML/CSS for the frontend.
        \n* Hosted websites on shared hosting and VPS via Hostinger.com, gaining practical server management experience.
        \n* Collaborated with Flutter developers on app development, successfully launching apps on the Google Play Store.`,
    },

    {
      company: "Business For Development - Biz4D",
      href: "",
      badges: ["Remote", "Germany"],
      location: "Remote",
      title: "Software Developer - Intern",
      icon: false,
      logoUrl: "/experience/self.png",
      start: "June 2022",
      end: "Aug 2022",
      description: `* Handled server management and Docker configuration for streamlined deployments.
        \n* Maintained GitHub repositories, ensuring version control and team coordination.
        \n* Assisted in software installation, resolving technical issues and documenting the process.
        \n* Contributed to research and development by exploring new tools and technologies to enhance system performance.`,
    },
  ],
  education: [
    {
      school: "Saraswati College Of Engineering",
      href: "",
      degree: "Bachelor of Engineering in Information Technology - 7.9 CGPA",
      icon: true,
      logoUrl: "/graduation-cap.svg",
      start: "2019",
      end: "2023",
    },
    {
      school: "Guru Nanak Khalsa College",
      href: "",
      degree: "Higher Secondary Certificate (HSC) - 79.36 Percent",
      icon: true,
      logoUrl: "/graduation-cap.svg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Real-Time Monitoring System",
      href: "",
      dates: "",
      active: true,
      description:
        "A real-time carbide monitoring system with Socket Channels for efficient data transmission, RBAC for secure user interactions, and RabbitMQ for managing CCTV frames. Features automated frame processing and comprehensive analytics reporting.",
      technologies: [
        
        "Django Rest Framework",
        "CCTV",
        "WebSocket",
        "RabbitMQ",
        "PostgreSQL",
        "Docker",
        "NGINX",
        "Gunicorn",
        "Grafana",
        "Prometheus",
        "Linux",
        "FastAPI",
   
      ],
      links: [],
      image: "/projects/monitoring.png",
      video: "",
    },
    {
      title: "Automated Vehicle Information Management System",
      href: "",
      dates: "",
      active: true,
      description:
        "An intelligent vehicle management system with ANPR capabilities, M Parivahan API integration, and SAP synchronization. Features real-time processing, comprehensive data storage, and multi-channel notification system.",
      technologies: [
        "DRF",
        "OpenCV",
        "Flask",
        "PostgreSQL",
        "WebSocket",
        "REST APIs",
        "React JS",
        "ANPR",
        "Docker",
        "Scripting",
        "Whatsapp & SMS Integration",
        "SAP Integration",
        "M Parivahan API Integration",
      ],
      links: [],
      image: "/projects/vehicle.png",
      video: "",
    },
    {
      title: "Gym and Chat App (SecureFit Communicator)",
      href: "",
      dates: "",
      active: true,
      description:
        "A secure gym management and communication platform with end-to-end encryption, real-time chat, and comprehensive gym management features. Deployed on AWS with role-based access and geolocation features.",
      technologies: [
        "Django",
        "WebSocket",
        "AWS",
        "PostgreSQL",
        "JWT",
        "AES/RSA Encryption",
        "Geolocation",
        "Role-Based Access Control",
        "Linux",
        "AWS"
        
      ],
      links: [],
      image: "/projects/gym.png",
      video: "",
    },
  ],
} as const;

// Project data. Add a real `github` / `demo` URL per project when you
// have one — leave the placeholder otherwise. Never invent a repository.

export const featuredProject = {
  slug: "movie-ticket-booking-aws",
  title: "Movie Ticket Booking System",
  subtitle: "Cloud deployment on AWS",
  date: "March 2026",
  categories: ["Cloud"],
  description:
    "A cloud-based movie ticket booking application demonstrating application deployment, database integration and scalable AWS infrastructure — built to practice how a real production stack fits together, from networking to monitoring.",
  features: [
    "Application hosting on EC2",
    "Relational data managed through RDS",
    "Movie poster and media storage on S3",
    "Custom VPC configuration and security groups",
    "Traffic distribution via Elastic Load Balancer",
    "Auto Scaling for variable load",
    "Infrastructure monitoring with CloudWatch",
  ],
  stack: ["AWS", "EC2", "RDS", "S3", "VPC", "Elastic Load Balancer", "Auto Scaling", "CloudWatch", "HTML", "PHP"],
  github: "YOUR_GITHUB_URL",
  demo: null,
};

const projects = [
  {
    slug: "hypermarket-management-system",
    title: "Hypermarket Management System",
    date: null,
    categories: ["Software", "Web"],
    description:
      "A practical business-management application covering billing, inventory and vendor operations for a retail environment, with role-based access for Admin, Manager and Billing Staff.",
    features: [
      "Role-based access — Admin, Manager, Billing Staff",
      "Counter billing and product search",
      "Product and stock management",
      "Customer loyalty points and discounts",
      "Bill management and returns",
      "Vendor management",
      "Weekly profit/loss analytics",
    ],
    stack: ["React", "Vite", "Node.js", "Express.js", "MySQL"],
    github: "YOUR_GITHUB_URL",
    demo: null,
  },
  {
    slug: "ai-image-detector",
    title: "AI Image Detector",
    date: null,
    categories: ["AI/ML"],
    description:
      "An application focused on detecting whether an image is AI-generated or authentic, built to explore practical image classification workflows.",
    features: [],
    stack: ["Python", "Machine Learning"],
    github: "YOUR_GITHUB_URL",
    demo: null,
  },
  {
    slug: "ai-gift-recommender",
    title: "AI Gift Recommender",
    date: null,
    categories: ["AI/ML", "Web"],
    description:
      "A recommendation tool that suggests gift ideas based on user input, built entirely on the front end to explore rule-based recommendation logic.",
    features: [],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "YOUR_GITHUB_URL",
    demo: null,
  },
  {
    slug: "college-management-system",
    title: "College Management System",
    date: "April – May 2025",
    categories: ["Software"],
    description:
      "A desktop application for managing student and academic records, built with a focus on structured data handling and a functional desktop UI.",
    features: [],
    stack: ["Python", "Tkinter"],
    github: "YOUR_GITHUB_URL",
    demo: null,
  },
  {
    slug: "e-pharmacy-store",
    title: "E-Pharmacy Store",
    date: "November 2024",
    categories: ["Web"],
    description:
      "An online pharmacy storefront concept supporting product discovery and order workflows for medicines and health products.",
    features: [
      "Product and category search",
      "Symptom-based search",
      "Prescription upload",
      "Order tracking",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "YOUR_GITHUB_URL",
    demo: null,
  },
];

export const filterOptions = ["All", "Cloud", "Web", "Software", "AI/ML"];

export default projects;

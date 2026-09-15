// Technical skills grouped by category.
// No ratings or percentages by design — technology lists only.

const skillGroups = [
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS",
      "EC2",
      "RDS",
      "S3",
      "CloudFront",
      "Elastic Load Balancing",
      "Auto Scaling",
      "CloudWatch",
      "IAM",
      "SNS",
      "VPC",
      "Apache CloudStack",
    ],
  },
  {
    category: "DevOps",
    items: ["Docker", "Dockerfile", "Docker Compose", "Linux", "Ubuntu", "Git", "GitHub"],
  },
  {
    category: "Programming",
    items: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "PHP"],
  },
  {
    category: "Web & Backend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Flask",
      "MySQL",
    ],
  },
];

// Summary cards shown just under the hero.
export const summaryCards = [
  {
    title: "Cloud Engineering",
    description:
      "AWS infrastructure, deployment, monitoring and scalable architectures.",
  },
  {
    title: "Development",
    description: "Python, Java, C++, JavaScript, Node.js and backend development.",
  },
  {
    title: "DevOps",
    description: "Docker, Linux, deployment workflows and cloud operations.",
  },
  {
    title: "Problem Solving",
    description: "Data structures, databases and practical software projects.",
  },
];

export default skillGroups;

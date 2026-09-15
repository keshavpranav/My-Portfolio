// AWS services with hands-on / practical exposure.
// Wording intentionally avoids overstating expertise.

const cloudServices = [
  {
    code: "EC2",
    name: "Elastic Compute Cloud",
    description: "Compute infrastructure for hosting applications.",
  },
  {
    code: "RDS",
    name: "Relational Database Service",
    description: "Managed relational database infrastructure.",
  },
  {
    code: "S3",
    name: "Simple Storage Service",
    description: "Object storage for application assets and data.",
  },
  {
    code: "CloudFront",
    name: "Content Delivery Network",
    description: "Content delivery and caching at the edge.",
  },
  {
    code: "ELB",
    name: "Elastic Load Balancer",
    description: "Traffic distribution across application instances.",
  },
  {
    code: "ASG",
    name: "Auto Scaling",
    description: "Dynamic scaling of application infrastructure.",
  },
  {
    code: "CloudWatch",
    name: "Monitoring & Metrics",
    description: "Infrastructure monitoring and observability.",
  },
  {
    code: "IAM",
    name: "Identity & Access Mgmt",
    description: "Identity and access management.",
  },
  {
    code: "SNS",
    name: "Simple Notification Service",
    description: "Notification and alerting infrastructure.",
  },
  {
    code: "VPC",
    name: "Virtual Private Cloud",
    description: "Networking and infrastructure isolation.",
  },
];

// The request path through a typical deployed project — this is a genuine
// sequence, shown as the architecture diagram in the Cloud section.
export const architectureFlow = [
  { code: "Client", label: "Client request" },
  { code: "CloudFront", label: "Edge caching" },
  { code: "ELB", label: "Load balancing" },
  { code: "EC2", label: "Application layer" },
  { code: "RDS", label: "Data layer" },
];

// Supporting services attached to the flow rather than sitting on the
// main path.
export const architectureSupport = [
  { code: "S3", label: "Static & media assets" },
  { code: "CloudWatch", label: "Monitoring" },
  { code: "ASG", label: "EC2 capacity" },
];

export default cloudServices;

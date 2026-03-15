export type RecruiterRole =
  | "general"
  | "fullstack"
  | "backend"
  | "cloud"
  | "devops";

export interface RecruiterQaItem {
  question: string;
  answer: string;
  keywords: string[];
}

export interface RoleFaqConfig {
  label: string;
  intro: string;
  faqs: RecruiterQaItem[];
}

export const recruiterRoleFaqs: Record<RecruiterRole, RoleFaqConfig> = {
  general: {
    label: "General Profile",
    intro:
      "I am a Computer Science graduate student at ASU and a software engineer with 3+ years of experience in cloud automation, full-stack development, and DevOps.",
    faqs: [
      {
        question: "Tell me about your profile in short.",
        answer:
          "I am Deep Sharma, a CS graduate student at ASU and a software engineer focused on building reliable cloud and full-stack systems.",
        keywords: ["profile", "about", "introduction", "summary", "who are you"],
      },
      {
        question: "What are your strongest skills?",
        answer:
          "My strongest areas are cloud automation, infrastructure as code, DevOps workflows, backend systems, and full-stack product development.",
        keywords: ["skills", "strengths", "core", "expertise"],
      },
      {
        question: "What education background do you have?",
        answer:
          "I am pursuing an M.S. in Computer Science at Arizona State University and completed a B.Tech in Computer Science at SRM University.",
        keywords: ["education", "degree", "university", "asu", "srm"],
      },
      {
        question: "How can we contact you?",
        answer:
          "You can reach me at de.sharma993@gmail.com or connect on LinkedIn: https://www.linkedin.com/in/deepsharma993/.",
        keywords: ["contact", "email", "linkedin", "reach"],
      },
    ],
  },
  fullstack: {
    label: "Full Stack",
    intro:
      "For full-stack roles, I focus on shipping product features end-to-end, from responsive UI to API and deployment.",
    faqs: [
      {
        question: "What full-stack technologies do you use?",
        answer:
          "I work with React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, and Tailwind CSS, with cloud integration on AWS and Azure.",
        keywords: ["full stack", "frontend", "backend", "react", "node", "stack"],
      },
      {
        question: "Can you build and own end-to-end features?",
        answer:
          "Yes. I have built features from UI and API design to database modeling, testing, deployment, and monitoring.",
        keywords: ["end to end", "feature", "ownership", "delivery"],
      },
      {
        question: "Which project best shows full-stack capability?",
        answer:
          "TerraZure and FairShare are strong examples of end-to-end product thinking, covering frontend UX, backend workflows, and infrastructure concerns.",
        keywords: ["project", "full-stack", "terrazure", "fairshare"],
      },
      {
        question: "How do you approach performance and reliability?",
        answer:
          "I prioritize clear API contracts, scalable data access patterns, caching where useful, and observability to catch issues early.",
        keywords: ["performance", "reliability", "scale", "api", "observability"],
      },
    ],
  },
  backend: {
    label: "Backend",
    intro:
      "For backend roles, I focus on clean service design, scalability, secure access patterns, and operational visibility.",
    faqs: [
      {
        question: "What backend experience do you bring?",
        answer:
          "I have experience designing APIs and backend services using Node.js, Express, Python, and FastAPI, backed by SQL and NoSQL databases.",
        keywords: ["backend", "api", "fastapi", "express", "service"],
      },
      {
        question: "How do you design robust APIs?",
        answer:
          "I use clear contracts, validation, error handling, and versioning strategy while keeping observability and maintainability in mind.",
        keywords: ["api design", "validation", "error handling", "contracts"],
      },
      {
        question: "What about data and persistence?",
        answer:
          "I have worked with PostgreSQL, MongoDB, and MySQL, and I optimize schema and query choices for both correctness and speed.",
        keywords: ["database", "postgresql", "mongodb", "mysql", "schema", "query"],
      },
      {
        question: "Do you work on distributed/cloud backend systems?",
        answer:
          "Yes. I have worked with AWS services and queue-driven or asynchronous workflows in cloud-native systems.",
        keywords: ["distributed", "cloud", "aws", "queue", "async"],
      },
    ],
  },
  cloud: {
    label: "Cloud",
    intro:
      "For cloud-focused roles, I specialize in provisioning, automation, and secure multi-environment operations.",
    faqs: [
      {
        question: "Which cloud platforms have you used?",
        answer:
          "I have hands-on experience with both AWS and Azure for deploying and operating production-like systems.",
        keywords: ["cloud", "aws", "azure", "platform"],
      },
      {
        question: "How do you manage infrastructure?",
        answer:
          "I rely on infrastructure-as-code, automation, and repeatable workflows so environments are consistent and easy to scale.",
        keywords: ["infrastructure", "iac", "terraform", "automation"],
      },
      {
        question: "Do you have experience with containerized cloud workflows?",
        answer:
          "Yes. I have containerized services with Docker and integrated them into cloud orchestration and deployment processes.",
        keywords: ["container", "docker", "orchestration", "deployment"],
      },
      {
        question: "How do you think about cloud cost and reliability?",
        answer:
          "I balance cost and resilience by right-sizing resources, automating repetitive work, and designing around failure modes.",
        keywords: ["cost", "reliability", "resilience", "optimization"],
      },
    ],
  },
  devops: {
    label: "DevOps",
    intro:
      "For DevOps roles, I focus on CI/CD, infrastructure automation, and reducing deployment risk through repeatable pipelines.",
    faqs: [
      {
        question: "What DevOps tools are in your toolbox?",
        answer:
          "I work with Terraform, Docker, Kubernetes, Jenkins, and cloud-native services to automate build and release flows.",
        keywords: ["devops", "terraform", "docker", "kubernetes", "jenkins"],
      },
      {
        question: "How do you set up CI/CD pipelines?",
        answer:
          "I build pipelines that validate code quality, run tests, and deploy with environment-aware safeguards.",
        keywords: ["ci", "cd", "pipeline", "release", "automation"],
      },
      {
        question: "How do you reduce deployment risk?",
        answer:
          "I use incremental rollout strategies, consistent infra definitions, and monitoring/alerts to detect regressions quickly.",
        keywords: ["deployment", "risk", "rollout", "monitoring", "alerts"],
      },
      {
        question: "How do you collaborate with product and engineering teams?",
        answer:
          "I align platform work with product delivery goals so infrastructure and developer experience directly improve shipping velocity.",
        keywords: ["collaboration", "platform", "developer experience", "delivery"],
      },
    ],
  },
};

export const recruiterRoles: RecruiterRole[] = [
  "general",
  "fullstack",
  "backend",
  "cloud",
  "devops",
];

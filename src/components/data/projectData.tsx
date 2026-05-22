// Image Imports
// Tic Tac Toe
import tictacttoeImage1 from "../../assets/project/tictactoe/1.jpg";
import tictacttoeImage2 from "../../assets/project/tictactoe/2.jpg";
import tictacttoeImage3 from "../../assets/project/tictactoe/3.jpg";

// Phishing Detection
import phishingdetectionImage1 from "../../assets/project/phishing/1.png";
import phishingdetectionImage2 from "../../assets/project/phishing/2.png";

// TerraZure
import terraZureImage1 from "../../assets/project/terraZure/1.png";
import terraZureImage2 from "../../assets/project/terraZure/2.png";
import terraZureImage4 from "../../assets/project/terraZure/4.png";

// FairShare
import fairShareImage1 from "../../assets/project/FairShare/1.png";
import fairShareImage2 from "../../assets/project/FairShare/2.png";
import fairShareImage3 from "../../assets/project/FairShare/3.png";
import fairShareImage4 from "../../assets/project/FairShare/4.png";
import fairShareImage5 from "../../assets/project/FairShare/5.png";

// Elastic Face Recognition
import elasticFaceRecognitionImage1 from "../../assets/project/ElasticFaceRecognition/1.png";

// ASU Tutoring Assistant
import asuTutoringImage1 from "../../assets/project/asu_tutoring_assistant/1.png";

// Portfolio Agent
import portfolioAgentImage1 from "../../assets/project/portfolio_agent/1.png";

// Text2SQL
import text2SqlImage1 from "../../assets/project/text2sql/1.png";

// Project Data Structure
export type ProjectCategory = "ai" | "cloud" | "other";

export interface Project {
  name: string;
  img: string[];
  app: boolean;
  github: string;
  demo?: { title: string; link: string }[];
  info: string[];
  stack: string[];
  featured?: boolean; // Add featured flag for top projects
  category: ProjectCategory;
}

// Project Data Array
export const projects: Project[] = [
  {
    name: "FairShare",
    img: [fairShareImage1, fairShareImage2, fairShareImage3, fairShareImage4, fairShareImage5],
    app: false,
    github: "https://github.com/satwikm39/FairShare",
    demo: [
      {
        title: "Visit Website",
        link: "https://www.fair-share.online/",
      },
    ],
    info: [
      "Full-stack bill splitting application featuring an AI-driven backend built with Python (FastAPI).",
      "Unstructured Ingestion: Built a backend engine that uses LLMs to parse unstructured receipts and accurately extract complex line items.",
      "Deterministic Tool Integration: Designed a workflow utilizing structured API outputs to serve as a reliable, predictable bridge between the LLM and the relational database.",
      "Full-Stack Automation: Integrated the backend with a React/TypeScript frontend where users dynamically select items and confirm split ratios, eliminating manual data entry."
    ],
    stack: ["React", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Supabase", "LLMs", "Structured Outputs", "AWS Textract", "Render"],
    featured: true,
    category: "ai",
  },
  {
    name: "ASU Tutoring Assistant",
    img: [asuTutoringImage1],
    app: false,
    github: "https://github.com/hadessharma",
    info: [
      "Intelligent assistant developed for the Arizona State University tutoring center to generate structured student study plans while strictly enforcing academic integrity policies.",
      "Strict Policy Guardrails: Implemented rigid prompt constraints and system boundaries to guarantee the agent never discloses direct answers, enforcing ASU's strict academic integrity policy.",
      "Orchestration & RAG (LangChain): Built a multi-source retrieval pipeline using LangChain to ingest and process raw student queries alongside pre-documented learning resources and call transcripts.",
      "Thematic Curriculums: Synthesized unstructured dialogue and support logs into clean, topic-by-topic study schedules mapped to specific student learning gaps."
    ],
    stack: ["LangChain", "Python", "OpenAI GPT", "RAG", "Prompt Engineering", "Academic Integrity Guardrails"],
    featured: false,
    category: "ai",
  },
  {
    name: "Portfolio Conversational AI",
    img: [portfolioAgentImage1],
    app: false,
    github: "https://github.com/hadessharma/portfolio-react",
    demo: [
      {
        title: "Visit Website",
        link: "https://sharmacodes.com",
      },
    ],
    info: [
      "Real-time, hallucination-resistant portfolio chat agent designed to handle context-specific user inquiries with low-latency streaming responses.",
      "Context Optimization: Engineered a structured Markdown knowledge base optimized for LLM ingestion, ensuring precise, hallucination-resistant retrieval without requiring a vector database.",
      "Guardrails & Inference Control: Implemented prompt-level guardrails, low-temperature inference configurations, and length limits to restrict responses strictly to the provided knowledge base.",
      "Streaming Pipeline: Architected a real-time streaming inference pipeline using FastAPI StreamingResponse and the React ReadableStream API to minimize user-facing latency."
    ],
    stack: ["FastAPI", "React", "ReadableStream API", "Prompt Engineering", "Streaming API", "Markdown Context"],
    featured: false,
    category: "ai",
  },
  {
    name: "Text2SQL",
    img: [text2SqlImage1],
    app: false,
    github: "https://github.com/hadessharma/Text2SQL",
    info: [
      "Full-stack application that translates natural language questions into verified, safe, and syntax-correct SQL queries using a hosted FLAN-T5 LLM.",
      "Schema-Aware Context: Designed an ingestion pipeline that parses SQL DDL schemas into structured graphs, providing the LLM with exact schema context for query generation.",
      "Multi-Stage Validation: Engineered a validation pipeline that performs syntactic, semantic, and security checks to catch and reject unsafe or malformed SQL queries before they reach the database.",
      "Secure Layer Separation: Architected a strict separation between the LLM inference layer and the data layer, enforcing enterprise-style security boundaries for database execution."
    ],
    stack: ["FLAN-T5 LLM", "Hugging Face", "Python", "FastAPI", "React", "PostgreSQL", "SQL Parsing", "Database Security"],
    featured: false,
    category: "ai",
  },
  {
    name: "TerraZure",
    img: [terraZureImage1, terraZureImage2, terraZureImage4],
    app: false,
    github: "https://github.com/hadessharma/terraZure",
    info: [
      "Cloud Management Platform built with FastAPI and React for dynamically provisioning and monitoring hybrid AWS and Azure infrastructure.",
      "Containerized Orchestration: Isolated the execution environment using Docker to safely run Terraform CLI commands via asynchronous Python subprocesses.",
      "Credential Management: Implemented secure multi-tenant credential systems using PostgreSQL and SQLAlchemy to dynamically map AWS IAM and Azure Service Principal accounts.",
      "Interactive Dashboards: Built real-time React UI dashboards connected to cloud SDK queries for live resource tracking and monitoring."
    ],
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Terraform", "Azure", "AWS"],
    featured: true,
    category: "cloud",
  },
  {
    name: "Phishing Detection",
    img: [phishingdetectionImage1, phishingdetectionImage2],
    app: false,
    github: "https://github.com/shoviknandy/Phishing-detection---ML",
    info: [
      "Machine learning project designed to detect phishing URLs by comparing and contrasting different classification algorithms for optimal accuracy.",
      "Machine Learning Frameworks: Evaluated multiple classifiers including XGBoost and Scikit-learn algorithms to identify the most effective detection model.",
      "Feature Engineering: Engineered 26 distinct lexical and network features to robustly identify phishing characteristics in target URLs.",
      "Dataset & Scale: Trained and evaluated models on a diverse, verified dataset comprising over 10,000 benign and phishing URLs."
    ],
    stack: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
    featured: false,
    category: "other",
  },
  {
    name: "Elastic Face Recognition",
    img: [elasticFaceRecognitionImage1],
    app: false,
    github: "https://github.com/hadessharma/Elastic-Face-Recognition-Service-on-AWS",
    info: [
      "A scalable, cloud-native face recognition service built on AWS infrastructure that automatically scales based on real-time demand.",
      "Real-Time Processing: Built an asynchronous image processing pipeline using AWS S3 and SQS to handle concurrent face recognition requests.",
      "Auto-Scaling Infrastructure: Orchestrated AWS EC2 instances to dynamically scale resources up or down in response to queue length and workload demands.",
      "Deep Learning Inference: Integrated a pre-trained machine learning model behind a FastAPI gateway for low-latency image analysis."
    ],
    stack: ["Python", "FastAPI", "AWS", "EC2", "S3", "SQS"],
    featured: true,
    category: "cloud",
  },
  {
    name: "Tic Tac Toe",
    img: [tictacttoeImage1, tictacttoeImage2, tictacttoeImage3],
    app: true,
    github: "https://github.com/hadessharma/TicTacToe",
    demo: [
      {
        title: "Bluetooth Multiplayer",
        link: "https://www.youtube.com/watch?v=TWcV-bMbiUk",
      },
      {
        title: "vs AI",
        link: "https://www.youtube.com/watch?v=8V81xjbQjyY",
      },
    ],
    info: [
      "Android Tic-Tac-Toe application featuring optimized AI gameplay and local/wireless multiplayer support.",
      "Minimax AI Engine: Implemented the Minimax algorithm with alpha-beta pruning to power a responsive AI opponent across three difficulty levels.",
      "Bluetooth Multiplayer: Integrated Android Bluetooth APIs to enable seamless, low-latency multiplayer gaming between two separate devices.",
      "Data Persistence: Built local storage mechanisms to persist game history, player statistics, and match states across app launches."
    ],
    stack: ["Android", "Kotlin", "XML", "Minimax"],
    category: "other",
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured === true);
};
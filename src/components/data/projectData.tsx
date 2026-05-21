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
export interface Project {
  name: string;
  img: string[];
  app: boolean;
  github: string;
  demo?: { title: string; link: string }[];
  info: string[];
  stack: string[];
  featured?: boolean; // Add featured flag for top projects
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
  },
  {
    name: "TerraZure",
    img: [terraZureImage1, terraZureImage2, terraZureImage4],
    app: false,
    github: "https://github.com/hadessharma/terraZure",
    info: [
      "Architected a highly-concurrent Cloud Management Platform using FastAPI and React, allowing users to dynamically provision and monitor AWS and Azure infrastructure via interactive UI dashboards. Containerized the orchestration engine using Docker, creating an isolated backend environment that safely executes Terraform CLI commands via asynchronous Python subprocesses, mirroring enterprise CI/CD runners. Implemented secure, multi-tenant credential management using PostgreSQL and SQLAlchemy, allowing dynamic mapping of multiple distinct AWS IAM and Azure Service Principal accounts to real-time cloud SDK queries.",
    ],
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Terraform", "Azure", "AWS"],
    featured: true,
  },
  {
    name: "Phishing Detection",
    img: [phishingdetectionImage1, phishingdetectionImage2],
    app: false,
    github: "https://github.com/shoviknandy/Phishing-detection---ML",
    info: [
      "This project aims to detect phishing URLs using advanced machine learning techniques. We compare and contrast different algorithms to identify the most effective approach in phishing detection.",
    ],
    stack: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
    featured: false,
  },
  {
    name: "Elastic Face Recognition",
    img: [elasticFaceRecognitionImage1],
    app: false,
    github: "https://github.com/hadessharma/Elastic-Face-Recognition-Service-on-AWS",
    info: [
      "A scalable, cloud-native face recognition service built on AWS infrastructure that automatically scales based on demand. The system processes uploaded images to identify faces using a pre-trained machine learning model and returns results in real-time.",
    ],
    stack: ["Python", "FastAPI", "AWS", "EC2", "S3", "SQS"],
    featured: true,
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
      "This project develops a Tic-Tac-Toe app for Android, featuring an AI opponent that uses the Minimax algorithm with alpha-beta pruning for optimized gameplay across three difficulty levels: Easy, Medium, and Hard.",
    ],
    stack: ["Android", "Kotlin", "XML", "Minimax"],
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured === true);
};
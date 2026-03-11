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
        link: "https://fair-share-split.vercel.app/",
      },
    ],
    info: [
      "A smart bill-splitting web application that allows groups to upload receipt images and automatically extract item prices using OCR. Users can proportionally assign shares for each item rather than splitting evenly, and the app automatically pro-rates taxes and totals based on individual consumption. Features include Receipt OCR, Group Management, Weighted Splitting, and Real-time Balance Tracking.",
    ],
    stack: ["React", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Supabase", "AWS Textract", "Render"],
    featured: true,
  },
  {
    name: "TerraZure",
    img: [terraZureImage1, terraZureImage2, terraZureImage4],
    app: false,
    github: "https://github.com/hadessharma/terraZure",
    info: [
      "Architected a highly-concurrent Cloud Management Platform using FastAPI and React, allowing users to dynamically provision and monitor AWS and Azure infrastructure via interactive UI dashboards. Containerized the orchestration engine using Docker, creating an isolated backend environment that safely executes Terraform CLI commands via asynchronous Python subprocesses, mirroring enterprise CI/CD runners. Implemented secure, multi-tenant credential management using PostgreSQL and SQLAlchemy, allowing dynamic mapping of multiple distinct AWS IAM and Azure Service Principal accounts to real-time cloud SDK queries.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Terraform", "Azure", "AWS"],
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
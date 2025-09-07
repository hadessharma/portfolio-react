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
}

// Project Data Array
export const projects: Project[] = [
  {
    name: "TerraZure",
    img: [terraZureImage1, terraZureImage2, terraZureImage4],
    app: false,
    github: "https://github.com/hadessharma/terraZure",
    info: [
      "TerraZure enables users to easily deploy and manage cloud resources through a user-friendly graphical interface, without needing in-depth knowledge of the underlying Terraform technology. The platform integrates with multiple cloud providers, allowing authenticated deployment across different environments. Users can customize cloud deployments through simple front-end forms, which directly feed into Terraform's automation modules.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Terraform", "Azure", "AWS"],
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
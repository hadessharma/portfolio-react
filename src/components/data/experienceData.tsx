// programming language import
import java from "../../assets/skill-icons/java.png";
import javaScript from "../../assets/skill-icons/javascript.png";
import python from "../../assets/skill-icons/python.png";
import cpp from "../../assets/skill-icons/cpp.png";
import kotlin from "../../assets/skill-icons/kotlin.png";

// tools and DB import
import nodejs from "../../assets/skill-icons/nodejs.png";
import mongodb from "../../assets/skill-icons/mongodb.png";
import express from "../../assets/skill-icons/express.png";
import mysql from "../../assets/skill-icons/mysql.png";
import k8s from "../../assets/skill-icons/kubernetes.png";
import git from "../../assets/skill-icons/git.png";

export interface ImageData {
  img: string;
  title: string;
}

export const programmingLanguages: ImageData[] = [
  {
    img: java,
    title: "Java",
  },
  {
    img: javaScript,
    title: "JavaScript",
  },
  {
    img: python,
    title: "Python",
  },
  {
    img: cpp,
    title: "CPP",
  },
  {
    img: kotlin,
    title: "Kotlin",
  },
];

export const toolsDatabase: ImageData[] = [
  {
    img: nodejs,
    title: "NodeJs",
  },
  {
    img: mongodb,
    title: "MongoDB",
  },
  {
    img: express,
    title: "Express",
  },
  {
    img: mysql,
    title: "MySQL",
  },
  {
    img: k8s,
    title: "Kubernetes",
  },
  {
    img: git,
    title: "Git",
  },
];

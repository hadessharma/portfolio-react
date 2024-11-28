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
// import git from "../../assets/skill-icons/git.png";

// frontend import
import html from "../../assets/skill-icons/html.png";
import react from "../../assets/skill-icons/react.png";
import tailwind from "../../assets/skill-icons/tailwind.png";
import redux from "../../assets/skill-icons/redux.png";
import compose from "../../assets/skill-icons/jetpackcompose.png";

// cloud and database import
import azure from "../../assets/skill-icons/azure.png";
import aws from "../../assets/skill-icons/aws.png";
import jenkins from "../../assets/skill-icons/jenkins.png";
import terraform from "../../assets/skill-icons/terraform.png";
import docker from "../../assets/skill-icons/docker.png";
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
  // {
  //   img: git,
  //   title: "Git",
  // },
];

export const frontend: ImageData[] = [
  {
    img: html,
    title: "HTML",
  },
  {
    img: react,
    title: "REACT",
  },
  {
    img: tailwind,
    title: "Tailwind",
  },
  {
    img: redux,
    title: "Redux",
  },
  {
    img: compose,
    title: "Compose",
  },
];

export const cloudDevOps: ImageData[] = [
  {
    img: azure,
    title: "Azure",
  },
  {
    img: aws,
    title: "AWS",
  },
  {
    img: jenkins,
    title: "Jenkins",
  },
  {
    img: terraform,
    title: "Terraform",
  },
  {
    img: docker,
    title: "Docker",
  },
];

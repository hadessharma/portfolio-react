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
import postgre from "../../assets/skill-icons/postgre.png";
// import git from "../../assets/skill-icons/git.png";

// frontend import
import html from "../../assets/skill-icons/html.png";
import react from "../../assets/skill-icons/react.png";
import tailwind from "../../assets/skill-icons/tailwind.png";
import redux from "../../assets/skill-icons/redux.png";
import compose from "../../assets/skill-icons/jetpackcompose.png";

// cloud and DevOps import
import azure from "../../assets/skill-icons/azure.png";
import aws from "../../assets/skill-icons/aws.png";
import jenkins from "../../assets/skill-icons/jenkins.png";
import terraform from "../../assets/skill-icons/terraform.png";
import docker from "../../assets/skill-icons/docker.png";
export interface ImageData {
  img: string;
  title: string;
  showLabel?: boolean;
}

export const programmingLanguages: ImageData[] = [
  {
    img: java,
    title: "Java",
    showLabel: true,
  },
  {
    img: javaScript,
    title: "JavaScript",
    showLabel: true,
  },
  {
    img: python,
    title: "Python",
    showLabel: true,
  },
  {
    img: cpp,
    title: "CPP",
    showLabel: true,
  },
  {
    img: kotlin,
    title: "Kotlin",
    showLabel: true,
  },
];

export const toolsDatabase: ImageData[] = [
  {
    img: nodejs,
    title: "NodeJs",
    showLabel: true,
  },
  {
    img: mongodb,
    title: "MongoDB",
    showLabel: true,
  },
  {
    img: express,
    title: "Express.js",
    showLabel: true,
  },
  {
    img: mysql,
    title: "MySQL",
    showLabel: true,
  },
  {
    img: postgre,
    title: "PostgreSQL",
    showLabel: true,
  },
  {
    img: k8s,
    title: "Kubernetes",
    showLabel: true,
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
    showLabel: true,
  },
  {
    img: react,
    title: "React",
    showLabel: true,
  },
  {
    img: tailwind,
    title: "Tailwind CSS",
    showLabel: true,
  },
  {
    img: redux,
    title: "Redux",
    showLabel: true,
  },
  {
    img: compose,
    title: "Jetpack Compose",
    showLabel: true,
  },
];

export const cloudDevOps: ImageData[] = [
  {
    img: azure,
    title: "Azure",
    showLabel: true,
  },
  {
    img: aws,
    title: "AWS",
    showLabel: true,
  },
  {
    img: jenkins,
    title: "Jenkins",
    showLabel: true,
  },
  {
    img: terraform,
    title: "Terraform",
    showLabel: true,
  },
  {
    img: docker,
    title: "Docker",
    showLabel: true,
  },
];

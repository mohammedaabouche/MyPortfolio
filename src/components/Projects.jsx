import React from "react";
import ImageGallery from "./ImageGallery";
import "../style/style.css";

function Projects() {
  const projects = [
    {
      title: "Kubernetes Cluster Monitoring Tool",
      description:
        "A tool developed to monitor Kubernetes clusters, manage notifications, and handle alerts. This project helps oversee the health and status of clusters, ensuring smooth operations.",
      tasks: [
        "Monitor cluster health and performance",
        "Set up alerting and notification management",
        "Deploy services using microk8s and ArgoCD",
        "Integrate with Prometheus for monitoring",
        "Containerize applications using Docker",
        "Set up a scalable architecture using Kubernetes",
      ],
      images: [
        require("../assets/hardiot6.png"),
        require("../assets/hardiot8.png"),
        require("../assets/hardiot7.png"),
        require("../assets/hardiot9.png"),
        require("../assets/hardiot10.png"),
        require("../assets/hardiot1.png"),
        require("../assets/hardiot2.png"),
        require("../assets/hardiot3.png"),
        require("../assets/hardiot4.png"),
        require("../assets/hardiot5.png"),
      ],
      tech: [
        require("../assets/icons/javascript-original.svg").default,
        require("../assets/icons/nestjs-original.svg").default,
        require("../assets/icons/react-original.svg").default,
        require("../assets/icons/express-original.svg").default,
        require("../assets/icons/docker-original.svg").default,
        require("../assets/icons/kubernetes-original.svg").default,
        require("../assets/icons/prometheus-original.svg").default,
        require("../assets/icons/argocd-original.svg").default,
      ],
    },
    {
      title: "Android Employee Management Application",
      description:
        "An Android application that simplifies employee management, tracking revenue, and expenses while also managing items for customers and providing relevant statistics.",
      tasks: [
        "Develop Android app for managing employees",
        "Track employee-related expenses and revenues",
        "Generate statistics for management insights",
        "Develop functionalities to manage customer items",
      ],
      images: [
        require("../assets/freelance4.png"),
        require("../assets/freelance2.png"),
        require("../assets/freelance3.png"),
        require("../assets/freelance1.png"),
       
      ],
      tech: [
        require("../assets/icons/flutter-original.svg").default,
        require("../assets/icons/sqlite-original.svg").default,
        require("../assets/icons/dart-original.svg").default,
      ],
    },

    {
      title: "DIGIHRM",
      description:
        "DIGIHRM is a full-stack application for managing employees, departments, and projects. It allows the user to create, update, and delete employees, departments, and projects. The user can also assign employees to projects and departments. My task in the project was concerning the employee aspect.",
      tasks: [
        "Create, update, and delete employees",
        "Assign employees to departments",
        "Assign employees to projects",
        "View employees and their details",
        "Assign and view employee assets, projects, departments, and tasks",
        "Manage employee attendance, performance, and documents",
      ],
      images: [
        require("../assets/9digihrm.png"),
        require("../assets/8digihrm.png"),
        require("../assets/7digihrm.png"),
        require("../assets/6digihrm.png"),
        require("../assets/5digihrm.png"),
        require("../assets/4digihrm.png"),
        require("../assets/3digihrm.png"),
        require("../assets/2digihrm.png"),
        require("../assets/1digihrm.png"),

   
      ],
      tech: [
        require("../assets/icons/nodejs-original.svg").default,
        require("../assets/icons/nestjs-original.svg").default,
        require("../assets/icons/prisma-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
      ],
    },

    {
      title: "Data Entry Platform",
      description:
        "The Data Entry Platform is designed to collect and stream data from various protocols (SNMP, OPCUA, WebSocket) to Kafka. It consists of multiple servers that ensure seamless data processing and transmission.",
      tasks: [
        "Collect data from SNMP, OPCUA, and WebSocket protocols",
        "Stream data to Kafka for processing",
        "Implement GRPC for communication between services",
        "Ensure data integrity during transmission",
        "Manage server configurations for optimal performance",
      ],
      images: [
        require("../assets/stage12.png"),
        require("../assets/stage11.png"),
        require("../assets/stage1.png"),
      ],
      tech: [
        require("../assets/icons/python-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
        require("../assets/icons/apachekafka-original.svg").default,
        require("../assets/icons/rabbitmq-original.svg").default,

        require("../assets/icons/javascript-original.svg").default,
      ],
    },
    {
      title: "Wander",
      description:
        "A tourism platform that offers tourists an interactive space to explore points of interest through listings of cafes, restaurants, museums, and more. The platform also features a newsfeed for users to post and engage with community updates.",
      tasks: [
        "Develop platform for listing tourist attractions",
        "Integrate a newsfeed for user interactions",
        "Provide a system for posting and sharing updates within the community",
        "Implement functionalities for exploring various tourist spots",
      ],
      images: [
        require("../assets/image2.png"),
        require("../assets/image1.png"),
        require("../assets/image1.png"),
      ],
      tech: [
        require("../assets/icons/react-original.svg").default,
        require("../assets/icons/nodejs-original.svg").default,
        require("../assets/icons/tailwindcss-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
        require("../assets/icons/spring-original.svg").default,
        require("../assets/icons/java-original.svg").default,
      ],
    },
    {
      title: "ChessGame",
      description:
        "An offline chess application designed with virtual boards and pieces, offering users an authentic chess-playing experience on the go.",
      tasks: [
        "Design a virtual chessboard for an offline playing experience",
        "Ensure smooth gameplay and user interactions",
        "Implement chess rules and move validation",
      ],
      images: [
        require("../assets/image2.png"),
        require("../assets/image1.png"),
        require("../assets/image1.png"),
      ],
      tech: [
        require("../assets/icons/java-original.svg").default,
      ],
    },
    {
      title: "maCaisse",
      description:
        "A web-based application designed to streamline budget management for individuals and small to medium-sized businesses. It offers features like expense tracking, income monitoring, and customizable budget categories.",
      tasks: [
        "Develop expense and income tracking features",
        "Provide customizable budget categories",
        "Generate reports on financial status",
        "Ensure an intuitive user interface for easy financial management",
      ],
      images: [
        require("../assets/maCaisse.jpeg"),
  
      ],
      tech: [
        require("../assets/icons/react-original.svg").default,
        require("../assets/icons/nodejs-original.svg").default,
        require("../assets/icons/tailwindcss-original.svg").default,
        require("../assets/icons/nestjs-original.svg").default,
        require("../assets/icons/mongodb-original.svg").default,
      ],
    },
  ];

  return (
    <div id="My Projects">
      <h1 className="projectsh1">My Projects</h1>
      <div className="projects grid grid-cols-1 gap-14">
        {projects.map((project, index) => (
          <div key={index} className="project grid grid-cols-5 gap-10">
            <div className="col-span-3 max-[800px]:col-span-5 ">
              <h2>{project.title}</h2>
              <h5>Description</h5>
              <p>{project.description}</p>

              <ul className="project-tasks grid grid-cols-1 gap-1 ">
                {project.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              <h5>Technologies & Tools</h5>
              <div className="grid grid-cols-8 gap-0">
                {project.tech.map((tech, index) => (
                  <img key={index} src={tech} alt="" />
                ))}
              </div>
            </div>
            <div className="project-image-wrapper col-span-2 max-[800px]:col-span-5">
              <h5>Images</h5>

              {project.images && <ImageGallery images={project.images} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

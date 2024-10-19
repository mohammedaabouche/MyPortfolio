import React from "react";
import ImageGallery from "./ImageGallery";
import "../style/style.css";

function Projects() {
  const projects = [
    {
      title: "DIGIHRM",
      description:
        "DIGIHRM is a full-stack application for managing employees, departments, and projects. It allows the user to create, update, and delete employees, departments, and projects. The user can also assign employees to projects and departments. My task in the project was concerning the employee aspect.",
      tasks: [
        "Create, update, and delete employees",
        "Assign employees to departments",
        "Assign employees to projects",
        "View employees",
        "View employee's details",
        "Assign and View employee's assets",
        "Assign and View employee's projects",
        "View employee's departments",
        "View employee's salary",
        "View employee's attendance",
        "View employee's leaves",
        "View employee's documents",
        "View employee's tasks",
        "View employee's performance",
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
        require("../assets/icons/react-original.svg").default,
        require("../assets/icons/nestjs-original.svg").default,
        require("../assets/icons/tailwindcss-original.svg").default,
        require("../assets/icons/nodejs-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
        require("../assets/icons/prisma-original.svg").default,
        require("../assets/icons/postman-original.svg").default,
        require("../assets/icons/typescript-original.svg").default,
        require("../assets/icons/javascript-original.svg").default,
        require("../assets/icons/jira-original.svg").default,
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
        "Manage server configurations for optimal performance"
      ],
      images: [
        require("../assets/stage12.png"),
        require("../assets/stage11.png"),
        require("../assets/stage1.png")
      ],
      tech: [
        require("../assets/icons/python-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
        require("../assets/icons/apachekafka-original.svg").default,
        require("../assets/icons/rabbitmq-original.svg").default,
       
        require("../assets/icons/javascript-original.svg").default
      ]
    },
    {
      title: "Web Application for Budget Management",
      description:
        "This web application is designed for budget management, targeting individuals and small to medium-sized businesses. It offers features for expense tracking, income monitoring, and customizable budget categories.",
      tasks: [
        "Track expenses and income",
        "Create and manage customizable budget categories",
        "Generate financial reports",
        "Provide insights on spending patterns",
        "Ensure user-friendly interface for budget management"
      ],
      images: [
        require("../assets/maCaisse.jpeg"),
      
      ],
      tech: [
        require("../assets/icons/react-original.svg").default,
        require("../assets/icons/nestjs-original.svg").default,
        require("../assets/icons/tailwindcss-original.svg").default,
        require("../assets/icons/nodejs-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
        require("../assets/icons/prisma-original.svg").default,
        require("../assets/icons/postman-original.svg").default,
        require("../assets/icons/typescript-original.svg").default,
        require("../assets/icons/javascript-original.svg").default
      ]
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
              <h5 >Description</h5>
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

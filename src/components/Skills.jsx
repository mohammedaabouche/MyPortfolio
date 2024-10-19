import React from "react";
import "../style/style.css";

function Skills() {
  const mySkills = [
    {
      title: "Languages",
      skills: [
        { name: "العربية", level: "Native", icon: "" },
        { name: "Français", level: "Fluent", icon: "" },
        { name: "English", level: "Fluent", icon: "" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          name: "C",
          level: "Advanced",
          icon: require("../assets/icons/c-original.svg").default,
        },
        {
          name: "Python",
          level: "Intermediate",
          icon: require("../assets/icons/python-original.svg").default,
        },
        {
          name: "Java",
          level: "Intermediate",
          icon: require("../assets/icons/java-original.svg").default,
        },
        {
          name: "JavaScript",
          level: "Intermediate",
          icon: require("../assets/icons/javascript-original.svg").default,
        },
        {
          name: "Typescript",
          level: "Intermediate",
          icon: require("../assets/icons/typescript-original.svg").default,
        },

        {
          name: "HTML",
          level: "Intermediate",
          icon: require("../assets/icons/html5-original.svg").default,
        },
        {
          name: "CSS",
          level: "Intermediate",
          icon: require("../assets/icons/css3-original.svg").default,
        },
        {
          name: "dart",
          level: "Intermediate",
          icon: require("../assets/icons/dart-original.svg").default,
        },
        {
          name: "R",
          level: "Intermediate",
          icon: require("../assets/icons/r-original.svg").default,
        },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "React",
          level: "Intermediate",
          icon: require("../assets/icons/react-original.svg").default,
        },
        {
          name: "Angular",
          level: "Intermediate",
          icon: require("../assets/icons/angular-original.svg").default,
        },
        {
          name: "Node.js",
          level: "Intermediate",
          icon: require("../assets/icons/nodejs-original.svg").default,
        },
        {
          name: "Express.js",
          level: "Intermediate",
          icon: require("../assets/icons/express-original.svg").default,
        },
        {
          name: "Nest.js",
          level: "Intermediate",
          icon: require("../assets/icons/nestjs-original.svg").default,
        },
        {
          name: "Spring",
          level: "Intermediate",
          icon: require("../assets/icons/spring-original.svg").default,
        },

        {
          name: "Flask",
          level: "Intermediate",
          icon: require("../assets/icons/flask-original.svg").default,
        },
        {
          name: "Flutter",
          level: "Intermediate",
          icon: require("../assets/icons/flutter-original.svg").default,
        },
        {
          name: "Tailwindcss",
          level: "Intermediate",
          icon: require("../assets/icons/tailwindcss-original.svg").default,
        },
        {
          name: "Bootstrap",
          level: "Intermediate",
          icon: require("../assets/icons/bootstrap-original.svg").default,
        },
        {
          name: "Prisma",
          level: "Intermediate",
          icon: require("../assets/icons/prisma-original.svg").default,
        }
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          level: "Intermediate",
          icon: require("../assets/icons/mysql-original.svg").default,
        },
        {
          name: "Oracle",
          level: "Intermediate",
          icon: require("../assets/icons/oracle-original.svg").default,
        },
        {
          name: "SQLite",
          level: "Intermediate",
          icon: require("../assets/icons/sqlite-original.svg").default,
        },
        {
          name: "MongoDB",
          level: "Intermediate",
          icon: require("../assets/icons/mongodb-original.svg").default,
        },

        {
          name: "Neo4j",
          level: "Intermediate",
          icon: require("../assets/icons/neo4j-original.svg").default,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        
        {
          name: "Docker",
          level: "Intermediate",
          icon: require("../assets/icons/docker-original.svg").default,
        },
        {
          name: "Kubernetes",
          level: "Intermediate",
          icon: require("../assets/icons/kubernetes-original.svg").default,
        },
        
        {
          name: "ArgoCD",
          level: "Intermediate",
          icon: require("../assets/icons/argocd-original.svg").default,
        },
        {
          name: "Prometheus",
          level: "Intermediate",
          icon: require("../assets/icons/prometheus-original.svg").default,
        },
        {
          name: "Grafana",
          level: "Intermediate",
          icon: require("../assets/icons/grafana-original.svg").default,
        },
        
        
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          level: "Intermediate",
          icon: require("../assets/icons/git-original.svg").default,
        },
        {
          name: "GitHub",
          level: "Intermediate",
          icon: require("../assets/icons/github-original.svg").default,

        },
        
        {
          name: "Anaconda",
          level: "Intermediate",
          icon: require("../assets/icons/anaconda-original.svg").default,
        },
        {
          name: "Jira",
          level: "Intermediate",
          icon: require("../assets/icons/jira-original.svg").default,
        },
        {
          name: "Postman",
          level: "Intermediate",
          icon: require("../assets/icons/postman-original.svg").default,
        },
        
      ],
    },
    {
      title: "IDEs",
      skills:[
        {
          name: "VS Code",
          level: "Intermediate",
          icon: require("../assets/icons/vscode-original.svg").default,
        },
        {
          name: "IntelliJ IDEA",
          level: "Intermediate",
          icon: require("../assets/icons/intellij-original.svg").default,
        },
        {
          name: "Eclipse",
          level: "Intermediate",
          icon: require("../assets/icons/eclipse-original.svg").default,
        },
        {
          name: "Android Studio",
          level: "Intermediate",
          icon: require("../assets/icons/androidstudio-original.svg").default,
        },
      ]

    },
    {
      title: "Streaming",
      skills: [
        {
          "name":"RabbitMQ",
          "level":"Intermediate",
          "icon":require("../assets/icons/rabbitmq-original.svg").default
        },
        {
          "name":"Kafka",
          "level":"Intermediate",
          "icon":require("../assets/icons/apachekafka-original.svg").default
        },
        
      ],
    },
  ];

  return (
    <div id="My Skills" className="skills">
      <h1>My Skills</h1>
      {mySkills.map((skill, index) => (
        <div key={index} className="skills-item">
          <h1 className="title">{skill.title}</h1>
          <ul className="grid grid-cols-5 max-[800px]:grid-cols-3">
            {skill.skills.map((skil1, index) => (
              <div className="" key={index}>
                {skil1.icon !== "" && <img src={skil1.icon} alt="" />}
                <p className={skill.title + " col-span-1 "} key={index}>
                  {skil1.name}
                </p>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Skills;

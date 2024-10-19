import React from "react";
import "../style/style.css";
import profileImage from "../assets/pi.png";
import cv from "../assets/documents/cv-aabouche-mohammed.pdf";
function Profile() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "cv-aabouche-mohammed.pdf";  
    link.click();  
    
 
  };
  return (
    <div id="About Me" className="profile grid grid-cols-12 gap-5">
      <div className="profile-image grid gap-5 col-span-4 max-[800px]:col-span-12 ">
        <img
          src={profileImage}
          alt="profile"
          className=" w-80 h-80 object-cover"

        />

        <button onClick={handleDownload} class="download-btn">Download C.V</button>
      </div>

      <div className="profile-info col-span-7 col-start-5 max-[800px]:col-start-1  max-[800px]:col-span-12 ">
        <h1 className="name">mohammed aabouche </h1>
        <h3 className="status">Software engineering student</h3>

        <p>
          &emsp;Computer engineering and digitalization student, passionate about
          development, deployment, and securing systems. With a strong technical
          curiosity and an analytical mindset, I specialize in solving complex
          problems and optimizing technological processes. Committed to
          continuous learning, I am driven by innovation and ready to take on
          new challenges to actively contribute to the advancement of the
          digital field.
        </p>

        <p>
          &emsp;Looking ahead, I am eager to contribute meaningfully to the
          ever-evolving landscape of technology. I aspire to leverage my
          expertise in DevOps and cybersecurity to innovate and drive impactful
          solutions that address real-world problems. Through internships,
          collaborative projects, and continuous self-improvement, I aim to
          leave a lasting mark on the tech industry, pushing the boundaries of
          what is possible and inspiring others to pursue excellence.
        </p>
      </div>
      
    </div>
  );
}

export default Profile;

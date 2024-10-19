import React, { useState } from "react";
import "../style/style.css"; 

const ImageGallery = ({ images }) => {
  const [i, setI] = useState(1);




  const showNextImage = () => {
    if (i < images.length)
    {
      document.getElementById("prev").classList.remove("end");    
      setI(i+1);
    }
    if (i+1 === images.length)
    {
      document.getElementById("next").classList.add("end");
        
    }
  };

  const showPrevImage = () => {
    if (i > 1) {
     setI(i-1);
     document.getElementById("next").classList.remove("end");
    }
    if (i-1 === 1)
    {
      document.getElementById("prev").classList.add("end");
     
    }
  };

  return (
    <div className="grid grid-cols-1 gap-0">
      <div className="wrapper-buttons-gallery grid grid-cols-3 gap-3">
        <button id="prev" className="prev end" onClick={showPrevImage}>
          &#10094;
        </button>
        <p className="no-page">{i}/{images?.length}</p>
        <button id="next" className="next" onClick={showNextImage}>
          &#10095;
        </button>
      </div>
      <div className="images-container">
      {images.slice(i-1, i).map((img, index) => (
        <img
          className="project-image"
          key={"img" + index}
          src={img}
          alt={`Project ${index}`}
     
        />
      ))}
      </div>
      
      
    </div>


  );
};

export default ImageGallery;

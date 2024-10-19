import React from "react";
import "../style/style.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
function Cursus() {
  const myLifeChapters = [
    {
      title: "Born in 2002",
      image: image1,
      className: "",
      text: 'On June 19, 2002, the story has begun: I was born in a small city called El Aioun (العيون) in the east of Morocco. Yes! You heard it right, in the east of Morocco, because most people think I am from Laayoune (العيون) in the south of Morocco. But no, I am from the east of Morocco. Each time I am asked about where am I  from and I respond El Aioun, they say, "Ohhh! You\'re from Laayoune, that\'s cool, desert and stuff." Then I clarify, "No, it is actually near Oujda." They interrupt me, "Are you stupid? You ruined the Moroccan map, Laayoune is in the south of Morocco!" To which I reply, "Oh, no, there are two cities called El Aioun." (If there\'s anyone confused here, it\'s going to be you). After all this story, it\'s good to know that I lived in Kenitra since I was 6 months old.',
    },
    {
      title: "career beginnings",
      image: image2,
      text: "It is September 2008 and I am 6 years old. It was my first time in primary school at Hamman El Fetouaki Public School. It was a good school with very competent, professional, and educating teachers. I spent 6 years there and learned a lot of things. It was the beginning of my academic journey.",
      className: "",
    },
    {
      title: "baccalaureate",
      image: image3,
      text: "After graduating from primary school and middle school, it was time for high school. I had to choose a major, so I opted for Mathematical Sciences, Option B. In this option, students study engineering sciences rather than biology and geology. I took the baccalauréat exam in 2020 during the COVID-19 pandemic. Because of the quarantine, I had to stay at home for four months, studying remotely. It was a special experience. I passed the exam and scored 15.6 out of 20. I was very happy with my score, and I was able to secure a seat in the preparatory classes : CPGE Mohammed VI at Kenitra.",
      className: "bac-img",
    },
    {
      title: "work smart AND hard",
      image: image4,
      text: "In 2020, I was admitted to the preparatory classes at the Mohammed VI High School in Kenitra. It was a tough two years with a lot of work and pressure. The goal of all students in these classes is to pass the national entrance exam to mainly the Moroccan engineering schools and, for some, the French engineering schools. We delved deeply into mathematics, physics, chemistry, and engineering sciences. Additionally, we studied informatics, French, philosophy, English, and Arabic. During this phase of my life, I learned the importance of logic and how to manage stress and pressure ; because to succeed, you need to find the right balance between working smart and working hard, and what works for one student doesn't necessarily work for another ,if one of element of this triad isn't there , beleve me you are going to suffer. In the end, I passed both the national exam CNC and the French exam CCP, and I ranked well in both: 506 out of more than 3000 in CNC, and 2727 out of nearly 7000 total candidates in CCP. So, I had the choice of selecting my preferred school, and I chose the Mohammadia School of Engineers.",
      className: "",
    },
    {
      title: "Bits and Boots",
      image: image5,
      text: "I am currently a second-year computer engineering student at the Mohammadia School of Engineers, where we have two kinds of training: the academic one to become an engineer and a military one to become a reserve officer. The first thing that comes to mind after knowing this is: why would I choose this kind of school? It seems like adding extra difficulties for nothing. Well, in fact, we learn a lot from this training , but for me, the top two things are: how to be a leader—an engineer is just like an officer, both need to lead their teams to success and complete assigned missions—and the power of patience. It is a very important quality; an engineer, just like an officer, must be able to work in all conditions and under all circumstances. let's go back to the academic trainning , I chose the field of informatics because I have been a huge fan of informatics, algorithms, and problem-solving since I was a kid. I am eager to learn and grow in this field. I am particularly interested in DevOps methodologies and cybersecurity practices, and I am keen to explore these areas further.",
      className: "",
    },
  ];

  return (
    <div id="My Story">
    <div  className="cursus max-[800px]:hidden">
      <h1>A brief story of Me</h1>
      {myLifeChapters.map((chapter, index) => (
        <div className="cursus-item  grid grid-cols-12 gap-10">
          {index % 2 === 0 ? (
            <React.Fragment key={index}>
              <div className="cursus-image col-span-5">
                <img
                  src={chapter.image}
                  alt="cursus"
                  className={"" + chapter.className}
                />
              </div>
              <div className="cursus-info col-span-6 col-start-7">
                <h1 className="title">{chapter.title}</h1>
                <p>{chapter.text}</p>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <div className="cursus-info col-span-6 ">
                <h1 className="title">{chapter.title}</h1>
                <p>{chapter.text}</p>
              </div>
              <div className="cursus-image col-span-5 col-start-8">
                <img
                  src={chapter.image}
                  alt="cursus"
                  className="w-80 h-80 object-cover"
                />
              </div>
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
    <div  className="cursus min-[800px]:hidden">
    <h1>A brief story of Me</h1>
    {myLifeChapters.map((chapter, index) => (
      <div className="cursus-item  grid  gap-10">
        
          <React.Fragment key={index}>
            
            <div className="cursus-info">
              <h1 className="title">{chapter.title}</h1>
              <p>{chapter.text}</p>
            </div>
            <div className="cursus-image ">
              <img
                src={chapter.image}
                alt="cursus"
                className={"" + chapter.className}
              />
            </div>
          </React.Fragment>
       
      </div>
    ))}
  </div>
  </div>
  );
}
export default Cursus;

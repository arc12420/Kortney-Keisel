import React from "react";
import "./About.css";
import kortneyChildPic from "../../Photos/KKChildPhoto.JPG";
import kortneyAboutPic from "../../Photos/FAM.jpg";

// ----------------------Variables----------------------------
const kortneyAbout = {
  paragraph1: `
  Kortney loves all things romance. Her devotion to romance was first apparent at three-years-old when 
  her family caught her kissing the walls (she attributes this embarrassing part of her life to her mother's 
  affinity for watching soap operas like Days of Our Lives). Luckily, Kortney has outgrown that phase and 
  now only kisses her husband. Most days, Kortney is your typical stay at home mom. She has five kids that 
  keep her busy cleaning, carpooling, and cooking.
`,
  paragraph2: `
  Writing books was never part of Kortney's plan. She graduated from the University of Utah with an English 
  degree and spent a few years before motherhood teaching 7th and 8th graders how to write a book report, 
  among other things. But after a reading slump, where no plots seemed to satisfy, Kortney pulled out her 
  laptop and started writing the "perfect" love story...or at least she tried. Her debut novel, The Promised 
  Prince, took four years to write, mostly because she never worked on it and didn't plan on doing anything 
  with it.
  `,
  paragraph3: `
  Kortney loves warm chocolate chip cookies, clever song lyrics, the perfect romance movie, analyzing and 
  talking about the perfect romance movie, playing card games, traveling with her family, and laughing with 
  her husband. 
  `,
}; 

// ------------------------Structure--------------------------
function About() {
  return (
    <body>
      <div className="aboutComponent">
        
        <div className="aboutText">
          <h5 className="aboutTitle" >About Kortney</h5>
          <div className="aboutImage1-P1">
            <img src={kortneyChildPic} className="kortneyChildPic" />
            <p className="aboutP1" >{kortneyAbout.paragraph1}</p>
          </div>
          <div className="aboutImage2-P2">
            <p className="aboutP2">{kortneyAbout.paragraph2}</p>
            <img src={kortneyAboutPic} className="kortneyAboutPic" />
          </div>
          <div className="P3">
            <p className="aboutP3">{kortneyAbout.paragraph3}</p>
          </div>
        </div>
      </div>
    </body>
  );
}
export default About;

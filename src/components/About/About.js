import React from "react";
import "./About.css";
import kortneyAboutPic from "./FAM.jpg";


// ----------------------Variables----------------------------
const kortneyAbout=`
Hey guys! I’m Kortney! Writing clean romance novels is my job...just kidding. Right now it’s just my jam. I hope to make it my “job” someday soon. My real gig is taking care of these five lovely humans and doing enough housework in between writing, that my husband doesn’t notice how much I’m slacking in that department. I’m self publishing my first two novels in the next few months. I’m sure it will be a wild ride with a lot of ups and downs. Thanks for joining in on my journey.
`;




// ------------------------Structure--------------------------
function About() {
  return (
    <body>
      <div className="aboutComponent">
        <img src={kortneyAboutPic} className="kortneyAboutPic" />
        <div className="aboutText"> 
          <p>{kortneyAbout}</p>
        </div>
      </div>
    </body>
  );
}
export default About;

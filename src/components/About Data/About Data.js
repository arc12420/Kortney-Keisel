import React from "react";
import { withRouter } from "react-router-dom";
import { RiEditFill } from "react-icons/ri";
import kortneyChildPic from "../../Photos/KKChildPhoto.JPG";
import kortneyAboutPic from "../../Photos/FAM.jpg";

function AboutData(props) {
  return (
    <div className="aboutComponent">
      <div className="aboutText">
        <div className="aboutEditBox">
          <div className="aboutEdit">
            {/* <RiEditFill /> */}
          </div>
        </div>
        <h5 className="aboutTitle">About Kortney</h5>
        <div className="aboutImage1-P1">
          {/* <img
          src={props.about.img1}
          className="kortneyChildPic"
          alt="Childhood"
        /> */}

          <img
            src={kortneyChildPic}
            className="kortneyChildPic"
            alt="Childhood"
          />

          <p className="aboutP1">{props.about.paragraph1}</p>
        </div>
        <div className="aboutImage2-P2">
          <p className="aboutP2">{props.about.paragraph2}</p>

          {/* <img
          src={props.about.img2}
          className="kortneyAboutPic"
          alt="Family"
        /> */}

          <img src={kortneyAboutPic} className="kortneyAboutPic" alt="Family" />
        </div>
        <div className="P3">
          <p className="aboutP3">{props.about.paragraph3}</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AboutData);

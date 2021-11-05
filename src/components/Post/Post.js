// **************************************Post.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";
import image1 from "../../Photos/Blog Images/img1.jpg";
import image2 from "../../Photos/Blog Images/img2.jpg";
import image3 from "../../Photos/Blog Images/img3.jpg";
import image4 from "../../Photos/Blog Images/img4.jpg";
import image5 from "../../Photos/Blog Images/img5.jpg";
import image6 from "../../Photos/Blog Images/img6.jpg";
import image7 from "../../Photos/Blog Images/img7.jpg";
import image8 from "../../Photos/Blog Images/img8.jpg";
import image9 from "../../Photos/Blog Images/img9.jpg";
import image10 from "../../Photos/Blog Images/img10.jpg";

// -------------------------------------FUNCTIONALITY--------------------------------------
// -----------------------------------STRUCTURE---------------------------------------------
function Post(props) {
  console.log(props);
  return (
    <div className="postComponent">
        <div className="titleContainer">
          <p className="postTitle">{props.posts.title}</p>
          <p className="sectionData">{props.posts.titlesection1}</p>
          <p className="sectionData">{props.posts.titlesection2}</p>
          {/* ----------------------SECTION 1----------------------- */}
          <div className="sectionData"> 
            <p className="sectionTitle">{props.posts.title1}</p>
            <p>{props.posts.section1}</p>
            <img src={image1}/>
          </div>
          {/* ----------------------SECTION 2----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title2}</p>
            <p>{props.posts.section2}</p>
            <img src={image2}/>
          </div>
          {/* ----------------------SECTION 3----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title3}</p>
            <p>{props.posts.section3}</p>
            <img src={image3}/>
          </div>
          {/* ----------------------SECTION 4----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title4}</p>
            <p>{props.posts.section4}</p>
            <img src={image4}/>
          </div>
          {/* ----------------------SECTION 5----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title5}</p>
            <p>{props.posts.section5}</p>
            <img src={image5}/>
          </div>
          {/* ----------------------SECTION 6----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title6}</p>
            <p>{props.posts.section6}</p>
            <img src={image6}/>
          </div>
          {/* ----------------------SECTION 7----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title7}</p>
            <p>{props.posts.section7}</p>
            <img src={image7}/>
          </div>
          {/* ----------------------SECTION 8----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title8}</p>
            <p>{props.posts.section8}</p>
            <img src={image8}/>
          </div>
          {/* ----------------------SECTION 9----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title9}</p>
            <p>{props.posts.section9}</p>
            <img src={image9}/>
          </div>
          {/* ----------------------SECTION 10----------------------- */}
          <div className="sectionData">
            <p className="sectionTitle">{props.posts.title10}</p>
            <p>{props.posts.section10}</p>
            <img src={image10}/>
          </div>
      </div>
    </div>
  );
}

export default withRouter(Post);

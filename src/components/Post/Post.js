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
import Sycamore from "../../Photos/Blog Images/320.jpg";

// -------------------------------------FUNCTIONALITY--------------------------------------
// -----------------------------------STRUCTURE---------------------------------------------
function Post(props) {
  console.log(props);
  return (
    <div className="postComponent">
        <div className="titleContainer">
          <p className="postTitle">{props.posts.title}</p>
          <div className="blogTitleInfo">
          <a href="https://www.320sycamoreblog.com" classname="blogLink">
          <span className="sectionData">When my sweet friend Melissa from the 320 Sycamore Blog asked me to participate in her favorite things blog tour, I was a little intimidated, but mostly honored. Everything Melissa posts is inspirational and darling—it’s like climbing into a Hallmark movie that was decorated well. I’ve never done anything like this before, but there is a first time for everything. All of my favorite things are pretty practical. I guess there wasn’t a lot of fluff in my life in 2021.</span>
          </a>
          <a href="https://www.320sycamoreblog.com">
            <img classname="sycamoreImage" src={Sycamore} alt="Sycamore 1"/>
            </a>  
          </div>
          <p className="sectionData">{props.posts.titlesection2}</p>
          {/* ----------------------SECTION 1----------------------- */}
          <div className="sectionData"> 
          <a href="https://www.amazon.com/gp/product/B081GJ4HLJ">
            <p className="sectionTitle">{props.posts.title1}</p>
            </a>
          <a href="https://www.amazon.com/gp/product/B081GJ4HLJ">
            <img src={image1} alt="Amazon 1"/>
            </a>            
            <p>{props.posts.section1}</p>
          </div>
          {/* ----------------------SECTION 2----------------------- */}
          <div className="sectionData">
          <a href="https://www.amazon.com/gp/product/B08RXVZFVB">
            <p className="sectionTitle">{props.posts.title2}</p>
            </a>
          <a href="https://www.amazon.com/gp/product/B08RXVZFVB">
            <img src={image2} alt="Amazon 2"/>
            </a>
            <p>{props.posts.section2}</p>
          </div>
          {/* ----------------------SECTION 3----------------------- */}
          <div className="sectionData">
          <a href="https://www.amazon.com/gp/product/B076MPR3Q3">
            <p className="sectionTitle">{props.posts.title3}</p>
            </a>
          <a href="https://www.amazon.com/gp/product/B076MPR3Q3">
            <img src={image3} alt="Amazon 3"/>
            </a>
            <p>{props.posts.section3}</p>
          </div>
          {/* ----------------------SECTION 4----------------------- */}
          <div className="sectionData">
          <a href="https://www.amazon.com/Its-10-Lvin-Cond-Size/dp/B008XKC5NY">
            <p className="sectionTitle">{props.posts.title4}</p>
            </a>
          <a href="https://www.amazon.com/Its-10-Lvin-Cond-Size/dp/B008XKC5NY">
            <img src={image4} alt="Amazon 4"/>
            </a>
            <p>{props.posts.section4}</p>
          </div>
          {/* ----------------------SECTION 5----------------------- */}
          <div className="sectionData">
          <a href="https://www.amazon.com/dp/B07NXN4F7X">
            <p className="sectionTitle">{props.posts.title5}</p>
            </a>
          <a href="https://www.amazon.com/dp/B07NXN4F7X">
            <img src={image5} alt="Amazon 5"/>
            </a>
            <p>{props.posts.section5}</p>
          </div>
          {/* ----------------------SECTION 6----------------------- */}
          <div className="sectionData">
            <a href="https://www.grammarly.com/">
            <p className="sectionTitle">{props.posts.title6}</p>
            </a>
            <a href="https://www.grammarly.com/">
            <img src={image6} alt="Grammarly"/>
            </a>
            <p>{props.posts.section6}</p>
          </div>
          {/* ----------------------SECTION 7----------------------- */}
          <div className="sectionData">
          <a href="https://www.amazon.com/Rubbermaid-Commercial-HYGEN-Quick-Connect-Frame/dp/B005KCOB4Y">
            <p className="sectionTitle">{props.posts.title7}</p>
            </a>
          <a href="https://www.amazon.com/Rubbermaid-Commercial-HYGEN-Quick-Connect-Frame/dp/B005KCOB4Y">
            <img src={image7} alt="Amazon 6"/>
            </a>
            <p>{props.posts.section7}</p>
          </div>
          {/* ----------------------SECTION 8----------------------- */}
          <div className="sectionData">
            <a href="https://www.optimumnutrition.com/en-us/Products/Protein/Shakes-%26-Powders/OPTIMUM-NUTRITION-GOLD-STANDARD-100%25-WHEY-PROTEIN/p/1095080?gclsrc=aw.ds&&gclid=CjwKCAiA1aiMBhAUEiwACw25MZd3grJIPl2mP7H9C-mgNvDeBONH7I3B7d9889Esz9BI_d4u-4MPRRoCW3YQAvD_BwE">
            <p className="sectionTitle">{props.posts.title8}</p>
            </a>
            <a href="https://www.optimumnutrition.com/en-us/Products/Protein/Shakes-%26-Powders/OPTIMUM-NUTRITION-GOLD-STANDARD-100%25-WHEY-PROTEIN/p/1095080?gclsrc=aw.ds&&gclid=CjwKCAiA1aiMBhAUEiwACw25MZd3grJIPl2mP7H9C-mgNvDeBONH7I3B7d9889Esz9BI_d4u-4MPRRoCW3YQAvD_BwE">
            <img src={image8} alt="Optimum Nutrion "/>
            </a>
            <p>{props.posts.section8}</p>
          </div>
          {/* ----------------------SECTION 9----------------------- */}
          <div className="sectionData">
          <a href="https://www.smallwoodhome.com/">
            <p className="sectionTitle">{props.posts.title9}</p>
            </a>
          <a href="https://www.smallwoodhome.com/">
            <img src={image9} alt="Smallwood Home "/>
            </a>
            <p>{props.posts.section9}</p>
          </div>
          {/* ----------------------SECTION 10----------------------- */}
          <div className="sectionData">
          <a href="https://www.amazon.com/dp/B08WYQVXLS">
            <p className="sectionTitle">{props.posts.title10}</p>
            </a>
          <a href="https://www.amazon.com/dp/B08WYQVXLS">
            <img src={image10} alt="Amazon 7"/>
            </a>
            <p>{props.posts.section10}</p>
          </div>
      </div>
    </div>
  );
}

export default withRouter(Post);

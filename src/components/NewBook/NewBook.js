// **************************************NewBook.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import { withRouter } from "react-router-dom";
// import { RiEditFill } from "react-icons/ri";
// import NewBookEdit from "./NewBookEdit/NewBookEdit";
// import FreeBook from "../Free Book/FreeBook";
import "../NewBook/NewBook.css";
import comingSoonImageForgottonQueen from "../../Photos/COMPARED.jpg";
// import comingSoonImageForgottonQueen from "../../Photos/THE FORGOTTEN QUEEN.jpg";
// import comingSoonImageStolenPrincess from "../../Photos/THE STOLEN PRINCESS.png"; 
// import comingSoonImageRejectedKing from "../../Photos/THE REJECTED KING.png"; 
// import comingSoonImagePromisedPrince from "../../Photos/THE PROMISED PRINCE.png"; 

// *!----------------------------------------Page Info ----------------------------------------------------

// **------------Title-----------------------
// let topSectionTitle = "Featured Book";
// let topSectionTitle = "Now Available!";
let topSectionTitle = "Coming Soon!";

// **--------------Image------------------
// let image = comingSoonImagePromisedPrince;
// let image = comingSoonImageRejectedKing;
// let image = comingSoonImageStolenPrincess;
let image = comingSoonImageForgottonQueen;

// **--------------ImageButton------------------
// let image = comingSoonImagePromisedPrince;
// let image = comingSoonImageRejectedKing;
// let image = comingSoonImageStolenPrincess;
// let image = comingSoonImageForgottonQueen;

// **-------------------TopSectionText--------------
let topSectionInfo = "forgottonQueen";
// let topSectionInfo = "None";

// **-------------------FreeBookOnTop--------------
// let freeBookTop = true;
let freeBookTop = false;



// -------------------------------------FUNCTIONALITY--------------------------------------
// takeToBook = () => {
//   this.props.history.push("/")
// };

const boldText ={
  fontWeight: "bold"
}

// -----------------------------------STRUCTURE---------------------------------------------
function Newbook(props) {
  return (
    <div className="newBookComponent">
      <div className="newBookEditBox">
        {/* <NewBookEdit/> */}
        {/* <div className="editNewBookButton"><RiEditFill/></div> */}
      </div>
      <p className="newBookTitleTempTwo">{topSectionTitle}</p>
      <section className="imageOneBoxContentTemp">
        <img src={image} className="imageOneTemp" alt="Book" 
        // onclick={this.takeToBook}
        />
                

{/* ----------------------------------COMING SOON SECTION---------------------------------------------------------------- */}
{/* ---------------------------THE FORGOTTON QUEEN INFO------------------------ */}
{topSectionInfo === "forgottonQueen" ? 
  (<div className="newBookTitle-InfoTemp">
          <hr />
          <p className="newBookReleaseDateTempTitle">COMPARED</p>
          <div className="releaseDateBox">
            <p>Available</p>
            <p className="newBookReleaseDate">January 4th 2022</p>
          </div>
          <hr />
          <div className="newBookDescriptionsContainer">
            <p className="newBookDescription"style={boldText}>
            Meg
            </p>
            <p className="newBookDescription">
            Confession: I’m attracted to my student’s dad. Let me give you Tyler Dixon’s resume: thoughtful, manly, father of the year, widower, ridiculously attractive (basically the opposite of a dad bod).
            </p>
            <p className="newBookDescription">
            This might sound like good news for someone like me—someone who dreams of getting married and becoming a mom—but it’s not. Dating a parent is grounds for immediate removal at my school…and that’s not even the worst part. Tyler Dixon is taking up space in my mind that should—no, does—belong to my on-again, off-again boyfriend, Zak. One of the last things my mother said to me before she died was that she wanted me to marry Zak, and I’m not about to go against her deathbed wish. I just need off-again Zak to be back on so that I get the happy ending my mother wanted for me. It’s a solid plan…as long as I stop getting distracted by Tyler Dixon.
            </p>
            <p className="newBookDescription"style={boldText}>
              Tyler
            </p>
            <p className="newBookDescription">
            Being a widower isn’t like the movies. There’s not a block of women knocking on my door, bringing me casseroles every day. No, real life is work, laundry, and groceries—all while being both the mom and the dad. I’m barely surviving. I don’t have time to date. Which is good since the only woman I’m interested in keeps pushing me away: Miss Johnson—as in, my son's teacher. Emphasis on the Miss. Getting Meg to agree to go out with me might take all year, but she’s worth the effort. It’s either this or the never-ending depths of loneliness—no big deal.
            </p>
          </div>
          <div className="buyButtonContainerTemp">
            <hr />
            <li className="buyLinkButtonBoxTemp">
              <a
                href={`https://www.amazon.com/gp/product/B09JZSK4J2/ref=dbs_a_def_rwt_bibl_vppi_i4`}
                >
                PRE-ORDER
              </a>
            </li>
          </div>
        </div>)

: freeBookTop === true ? (
  <div className="commentaryText-Button">
          <div className="commentaryText">
            <div className="commentaryTitle">Want to read the deleted scenes from The Promised Prince with commentary?</div>
            {/* <p>"Want to read deleted scenes from The Promised Prince with commentary?</p> */}
          </div>
          <div className="commentaryButtonBox">
            <li className="commentaryLI">
              <a href="https://www.subscribepage.com/f7q6g9">
                <span className="commentaryButton">Get access here!</span>
              </a>
            </li>
          </div>
        </div>
        ) : alert("warning")}

      </section>
      {/* <section className="imageOneBoxContent">          
          <img src={props.booksPicOne} className="imageOne" alt="Book" />
          <div className="newBookTitle-Info">
            <p className="newBookTitle">{props.newbook.title}</p>
            <p className="newBookReleaseDate">{props.newbook.releasedate}</p>
            <hr />
            <p className="newBookDescription">{props.newbook.description}</p>
          </div>
        </section> */}
    </div>
  );
}

export default withRouter(Newbook);

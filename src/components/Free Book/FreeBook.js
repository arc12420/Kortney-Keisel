// **************************************FreeBook.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import { withRouter } from "react-router-dom";
import "./FreeBook.css";
import freeBookCover from "../../Photos/THE REJECTED KING.png";

// -------------------------------------FUNCTIONALITY--------------------------------------
// *!----------------------------------------Page Info ----------------------------------------------------

// **------------FreeBookText-----------------------
// let freebookTextAdjust = "freebook"
let freebookTextAdjust = "commentary"
// let freebookTextAdjust = "None"


// -----------------------------------STRUCTURE---------------------------------------------
function FreeBook() {
  return (
    <div className="freeBookComponent">
      <section className="homeFreeBook">
        <div className="homeFreeBookImage">
          <img src={freeBookCover} className="freeBook" alt="Free Book" />
        </div>
        {freebookTextAdjust === "freebook" ?

// ------------------------------------FREEBOOK BOX-----------------------
        <div className="freeBookText-Button">
          <div className="freeBookText">
            <div className="freeBookTitle">Want a Free Book?</div>
            <p>
              Of course you do!
              <br />{" "}
            </p>
            <p>
              Who doesn't like falling <br /> in love for free?{" "}
            </p>
          </div>
          <div className="freeBookButtonBox">
            <li className="freeBookLI">
              <a href="https://www.subscribepage.com/f7q6g9">
                <span className="freeBookButton">Get yours here!</span>
              </a>
            </li>
          </div>
        </div> 
        : freebookTextAdjust === "commentary"? 

// ----------------------COMMENTARY BOX----------------------------------
      (
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
        </div> ) : null
        } 
      </section>
    </div>
  );
}

export default withRouter(FreeBook);

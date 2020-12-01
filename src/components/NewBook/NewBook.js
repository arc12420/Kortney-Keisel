import React from "react";
import { withRouter } from "react-router-dom";
import { RiEditFill } from "react-icons/ri";
// import NewBookEdit from "./NewBookEdit/NewBookEdit";
import "../NewBook/NewBook.css";

function Newbook(props) {
  return (
    <div className="newBookComponent">
        <div className="newBookEditBox">
          {/* <NewBookEdit/> */}
            {/* <div className="editNewBookButton"><RiEditFill/></div> */}
          </div>
            <p className="newBookTitleTempTwo">{props.newbook.title}</p>
        <section className="imageOneBoxContentTemp">          
          <img src={props.booksPicOne} className="imageOneTemp" alt="Book" />
          <div className="newBookTitle-InfoTemp">
            <hr />
            <p className="newBookReleaseDateTemp">Coming January 12th 2021</p>
            <div className="buyButtonContainerTemp">
            <li className="buyLinkButtonBoxTemp">
              <a href={props.newbook.urllink}>Pre-Order your digital copy</a>
            </li>
          </div>
          </div>
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
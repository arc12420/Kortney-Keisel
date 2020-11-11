import React from "react";
import { withRouter } from "react-router-dom";
import { RiEditFill } from "react-icons/ri";
import "../NewBook/NewBook.css";

function Newbook(props) {
  return (
    <div className="newBookComponent">
        <div className="newBookEditBox">
            <div className="editNewBookButton"><RiEditFill/></div>
          </div>
        <section className="imageOneBoxContent">          
          <img src={props.booksPicOne} className="imageOne" alt="Book" />
          <div className="newBookTitle-Info">
            <p className="newBookTitle">{props.newbook.title}</p>
            <p className="newBookReleaseDate">{props.newbook.releasedate}</p>
            <hr />
            <p className="newBookDescription">{props.newbook.description}</p>
          </div>
        </section>
    </div>
  );
}

export default withRouter(Newbook);
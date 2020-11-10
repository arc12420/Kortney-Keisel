import React from "react";
import { withRouter } from "react-router-dom";
import "../NewBook/NewBook.css";

function Newbook(props) {
  return (
    <div className="newBookComponent">
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
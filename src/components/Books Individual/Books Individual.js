import React from "react";
import { withRouter } from "react-router-dom";
// import BK1 from "../../Photos/promised-prince.jpg";
// import BK2 from "../../Photos/rejected-king.jpg";
// import "./Books Individual.css";

function BooksIndividual(props) {
  return (
    <div className="booksIndividualComponent">
      <div className="booksBook">
        <div className="booksImage">
          <img src={props.books.img} className="bookImg" alt="BookCover" />
        </div>
        <div className="booksTitleDiscButton">
          <div className="booksTitleDisc">
            <h5 className="title">{props.books.title}</h5>
            <p className="bkDiscription">{props.books.descriptionp1}</p>
            <p className="bkDiscription">{props.books.descriptionp2}</p>
          </div>
          <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={props.books.urllink}>Purchase</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(BooksIndividual);

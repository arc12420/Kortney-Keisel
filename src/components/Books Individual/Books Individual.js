import React from "react";
import { withRouter } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import BK1 from "../../Photos/THE PROMISED PRINCE.png";
import BK2 from "../../Photos/THE REJECTED KING.png";

function BooksIndividual(props) {
  return (
    <div className="booksIndividualComponent">
      <div className="booksBook">
        <div className="booksImage">
          <img
            src={
              props.books.title === "The Promised Prince"
                ? BK1
                : props.books.title === "The Rejected King"
                ? BK2
                : null
            }
            className="bookImg"
            alt="BookCover"
          />
        </div>
        <div className="booksTitleDiscButton">
          <div className="bookCompEditBook">
            <div className="editBookButton">
              <RiEditFill />
            </div>
            <div className="deleteBookButton">
              <MdDeleteForever />
            </div>
          </div>
          <div className="booksTitleDisc">
            <h5 className="title">{props.books.title}</h5>
            <p className="bkDiscription">{props.books.descriptionp1}</p>
            <p className="bkDiscription">{props.books.descriptionp2}</p>
            <p className="bkDiscription">{props.books.descriptionp3}</p>
            <p className="bkDiscription">{props.books.descriptionp4}</p>
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

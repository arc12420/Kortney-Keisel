import React from "react";
import { withRouter } from "react-router-dom";
import "./Books.css";
import FreeBook from "../Free Book/FreeBook";
import BK1 from "../../Photos/Red-Book.jpg";
import BK2 from "../../Photos/Blue-Book.jpg";

// --------------------------Book Information-----------------------

const bk1 = {
  title: "The Promised Prince",
  description: `
  A chance meeting with a handsome stranger has eighteen-year-old, Renna Degray, hopeful about love and her future. 
  Until she discovers who the mysterious man really is—the Prince of Albion—betrothed to Renna’s stepsister. Now Renna 
  must try to keep her feelings for the prince in check. But he’s not making it easy. The prince is charming and funny 
  and impossible for her to forget. Can Renna break down societal expectations and find her happily ever after?`,
  descriptionP2:`In this post-Desolation world, where the Council of Essentials controls everything and royalty is elected, not 
  appointed, Prince Ezra has no room for mistakes. He must marry the princess of New Hope, securing the marriage 
  alliance and his future as king. The safety of his kingdom depends on it. Duty and honor never bothered Prince 
  Ezra before, but love has a way of changing everything.`,
  link: "",
  coverPhoto: BK1,
};

const bk2 = {
  title: "Book 2",
  description: "Book 2 Description",
  link: "",
  coverPhoto: BK2,
};

// ---------------------------------Structure------------------

function Books() {
  return (
    <body>
      <div className="booksComponent">
        {/* -------------------------------------Book One------------------------------- */}
        <div className="booksBook">
          <div className="booksImage">
            <img src={bk1.coverPhoto} className="bFreeBook" />
          </div>
          <div className="booksTitleDiscButton">
            <div className="booksTitleDisc">
              <h5 className="title">{bk1.title}</h5>
              <p className="bkDiscription">{bk1.description}</p>
              <p className="bkDiscription">{bk1.descriptionP2}</p>
            </div>
            <div className="buyButtonContainer">
              <li className="buyLinkButtonBox">
                <a href={bk1.link}>
                  <span className="buyLinkButton">Purchase</span>
                </a>
              </li>
            </div>
          </div>
        </div>
        {/* --------------------------------------------Book Two------------------------------- */}
        <div className="booksBook">
          <div className="booksImage">
            <img src={bk2.coverPhoto} className="bFreeBook" />
          </div>
          <div className="booksTitleDiscButton">
            <div className="booksTitleDisc">
              <h5 className="title">{bk2.title}</h5>
              <p className="bkDiscription">{bk2.description}</p>
              <p className="bkDiscription">{bk2.descriptionP2}</p>
            </div>
            <div className="buyButtonContainer">
              <li className="buyLinkButtonBox">
                <a href={bk2.link}>
                  <span className="buyLinkButton">Purchase</span>
                </a>
              </li>
            </div>
          </div>
        </div>
        
      </div>
      <FreeBook />
    </body>
  );
}

export default withRouter(Books);

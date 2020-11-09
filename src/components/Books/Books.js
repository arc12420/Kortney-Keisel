import React from "react";
import { withRouter } from "react-router-dom";
import "./Books.css";
import FreeBook from "../Free Book/FreeBook";
import BK1 from "../../Photos/promised-prince.jpg";
import BK2 from "../../Photos/rejected-king.jpg";

// --------------------------Book Information-----------------------

const bk1 = {
  title: "The Promised Prince",
  description: `
  A chance meeting with a handsome stranger has eighteen-year-old, Renna Degray, hopeful about love and her future. 
  Until she discovers who the mysterious man really is—the Prince of Albion—betrothed to Renna’s stepsister. Now Renna 
  must try to keep her feelings for the prince in check. But he’s not making it easy. The prince is charming and funny 
  and impossible for her to forget. Can Renna break down societal expectations and find her happily ever after?
  `,
  descriptionP2:`
  In this post-Desolation world, where the Council of Essentials controls everything and royalty is elected, not 
  appointed, Prince Ezra has no room for mistakes. He must marry the princess of New Hope, securing the marriage 
  alliance and his future as king. The safety of his kingdom depends on it. Duty and honor never bothered Prince 
  Ezra before, but love has a way of changing everything.
  `,
  link: "",
  coverPhoto: BK1,
};

const bk2 = {
  title: "The Rejected King",
  description: `
  But Emree Dutson is a professional—hired as Promenade director to help raise King Davin's approval ratings and find
   him a wife. The job description doesn't include fantasizing about their accidental kiss or falling for him. There are
    rules, and King Davin would never break those rules for a working-class girl like her. Besides, Emree has a boyfriend—at 
    least she thinks she does.
  `,
  descriptionP2:`
  When you're the most unpopular king in the history of Enderlin, you fix your reputation by getting married. Davin has sixty 
  ruling-class women to choose from. He should be able to find a suitable wife and please the newswriters. But there's a 
  problem: the one girl Davin wants is the one he can't have. Miss Dutson is his employee, from the wrong social class, and 
  already spoken for. Davin can't afford to make any more mistakes, including risking his future and his crown for love.
  `,
  link: "",
  coverPhoto: BK2,
};

// ---------------------------------Structure------------------

function Books() {
  return (
    <div className = "body">
      <div className="booksComponent">
        {/* -------------------------------------Book One------------------------------- */}
        <div className="booksBook">
          <div className="booksImage">
            <img src={bk1.coverPhoto} className="bFreeBook" alt="Book 1" />
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
                  Purchase
                </a>
              </li>
            </div>
          </div>
        </div>
        {/* --------------------------------------------Book Two------------------------------- */}
        <div className="booksBook">
          <div className="booksImage">
            <img src={bk2.coverPhoto} className="bFreeBook" alt="Book 2" />
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
                    Purchase
                </a>
              </li>
            </div>
          </div>
        </div>
        
      </div>
      <FreeBook />
    </div>
  );
}

export default withRouter(Books);

import React from "react";
import { withRouter } from "react-router-dom";
import "./FreeBook.css";
import loveSavageDance from "./loveSavageDance.jpg";

function FreeBook() {
  return (
    <div className ="freeBookComponent">
      <section className="homeFreeBook">
        <div className="homeFreeBookImage">
          <img src={loveSavageDance} className="freeBook" alt="Free Book"/>
        </div>
        <div className="freeBookText-Button">
          <div className="freeBookText">
            <div className="freeBookTitle">Want a Free Book?</div>
            {/* <p>
              Yes, you want to fall in love
              <br /> for free.
            </p>
            <p>
              Click the box below! <br /> You'll be glad you did!
            </p> */}
            <p >Of course you do!<br/> </p> 
          <p>Who doesn't like falling  <br/> in love for free? </p>
          </div>
          <div className="freeBookButtonBox">
            <li>
              <a href="https://www.amazon.com/Love-Time-Corona/dp/B08KFM4HJM/ref=sr_1_1?dchild=1&keywords=sappy+love+book&qid=1602196274&s=books&sr=1-1">
                <span
                  // href="https://www.amazon.com/Love-Time-Corona/dp/B08KFM4HJM/ref=sr_1_1?dchild=1&keywords=sappy+love+book&qid=1602196274&s=books&sr=1-1"
                  className="freeBookButton"
                >
                  Get yours here!
                </span>
              </a>
            </li>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withRouter(FreeBook);

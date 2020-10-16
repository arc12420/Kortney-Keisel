import React from "react";
import { withRouter } from "react-router-dom";
import "./FreeBook.css";
import loveSavageDance from "./loveSavageDance.jpg";

function FreeBook() {
  return (
    <body className="freeBookComponent">
      <section className="homeFreeBook">
        <div className="homeFreeBookImage">
          <img src={loveSavageDance} className="freeBook" />
        </div>
        <div className="freeBookText-Button">
          <div className="freeBookText">
            Want a copy of <br />
            "love savage Dance" <br /> for free?
          </div>
          <div className="freeBookButtonBox">
            <li>
              <a href="https://www.amazon.com/Love-Time-Corona/dp/B08KFM4HJM/ref=sr_1_1?dchild=1&keywords=sappy+love+book&qid=1602196274&s=books&sr=1-1">
                <span 
                // href="https://www.amazon.com/Love-Time-Corona/dp/B08KFM4HJM/ref=sr_1_1?dchild=1&keywords=sappy+love+book&qid=1602196274&s=books&sr=1-1" 
                className="freeBookButton">Get yours here!
                </span>
              </a>
            </li>
          </div>
        </div>
      </section>
    </body>
  );
}

export default withRouter(FreeBook);

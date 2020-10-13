import React from "react";
import { withRouter } from "react-router-dom";
import "./Newsletter.css";

function Newsletter() {
  return (
    <body>
      <div className="newsletterComponent">
        <div className="titleAndContentNewsletter">
          <h6 className="newsletterTitle">Want to receive my newsletter?</h6>
          <p className="newsletterContent">Sign-up to receive updates on upcoming books!</p>
        </div>
        <div className="inputFields">
          <input className="newsletterInput" placeholder="Email" />
          <input className="newsletterInput" placeholder="First Name" />
          <input className="newsletterInput" placeholder="Last Name" />
        </div>
        <button className="newsletterButton">Sign-up!</button>
      </div>
    </body>
  );
}

export default withRouter(Newsletter);

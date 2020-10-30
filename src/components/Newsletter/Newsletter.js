import React from "react";
import { withRouter } from "react-router-dom";
import "./Newsletter.css";

function Newsletter() {
  return (
    <body>
      <div className="newsletterComponent">
        <div className="titleAndContentNewsletter">
          <h6 className="newsletterTitle">Want to receive my newsletter?
          </h6>
          <p className="newsletterContent">
          {/* Sign up for my (<u>unspammy</u>) mailing list to get fun freebies<br/> and to stay informed about my upcoming releases! */}
          Join my mailing list to stay informed on my upcoming <br/> releases and to have the opportunity to get fun freebies!
          </p>
        </div>
        <div className="inputFields">
          <input className="newsletterInput" placeholder="Email" />
          <input className="newsletterInput" placeholder="First Name" />
          <input className="newsletterInput" placeholder="Last Name" />
        </div>
        <div className= "NewsletterButtonBox">
          <div className="newsletterButton">Sign up!</div>
        </div>
      </div>
    </body>
  );
}

export default withRouter(Newsletter);

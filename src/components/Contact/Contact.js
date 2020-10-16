import React from "react";
import { withRouter } from "react-router-dom";
import "./Contact.css";

function contact() {
  return (
    <body>
      <div className="contactComponent">
        <div className="titleAndContentcontact">
          <h6 className="contactTitle">Have a question for Kortney? <br/> <hr className="line"/></h6>
        
          <p className="contactContent">Email her here!</p>
        </div>
        <div className="contactInputFields">
          <input className="contactInput" placeholder="Your Email" />
          <input className="contactInput" placeholder="First Name" />
          <input className="contactInput" placeholder="Last Name" />
          <textarea className="contactEmail" placeholder="Email Body" />
        </div>
        <div className="contactButtonBox">
          <div className="contactButton">Send</div>
        </div>
      </div>
    </body>
  );
}

export default withRouter(contact);

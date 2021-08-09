// **************************************NewBook.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { RiEditFill } from "react-icons/ri";
import "./Newsletter.css";
import IframeResizer from "iframe-resizer-react";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Newsletter extends Component {
  constructor() {
    super();
    this.state = {
      iFrameHeight: "0px",
    };
  }

  // -----------------------------------STRUCTURE---------------------------------------------

  render() {
    return (
      <div className="newsletterPage">
        <iframe
          className="newsletterIframe"
        //   src="https://www.subscribepage.com/f7q6g9"
          src="https://www.subscribepage.com/f7q6g9_copy"
        />
      </div>
    );
  }
}

export default withRouter(Newsletter);

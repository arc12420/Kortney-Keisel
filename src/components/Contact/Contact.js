import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      emailBody: "",
    };
  }

  // ----------------------------------------------Input Handlers---------------------------------------

  handleEmail = (value) => {
    this.setState({ email: value });
    console.log(this.state);
  };
  handleName = (value) => {
    this.setState({ name: value });
    console.log(this.state);
  };
  handleEmailBody = (value) => {
    this.setState({ emailBody: value });
    console.log(this.state);
  };

  // --------------------------------------------------------Function--------------------------------------

  resetFields = () => {
    this.setState({ 
      email: '' ,
    name: '' ,
  emailBody: '' })
  };

  contact = () => {
    const { email, name, emailBody } = this.state;
    axios
      .post("/api/contact", {
        email,
        name,
        emailBody,
      })
      .then((res) => {
        console.log(res.data);
        alert(`Email successfully sent! Kortney will respond soon!`);
        this.resetFields()        
      })
      .catch((err) => {
        console.log(err);
        alert("Email failed to send. Make sure all input fields have been filled.");
      });
  };

  // ----------------------------------------------------Structure-------------------------------------------------------

  render() {
    return (
      <body>
        <div className="contactComponent">
          <div className="titleAndContentContact">
            <h6 className="contactTitle">Have a question for Kortney?</h6>

            <p className="contactContent">Email her here!</p>
          </div>
          <div className="contactInputFields">
            <input
              onChange={(event) => this.handleEmail(event.target.value)}
              className="contactInput"
              placeholder="Your Email"
            />
            <input
              onChange={(event) => this.handleName(event.target.value)}
              className="contactInput"
              placeholder="Name"
            />
            <textarea
              onChange={(event) => this.handleEmailBody(event.target.value)}
              className="contactEmail"
              placeholder="Email Body"
            />
          </div>
          <div className="contactButtonBox">
            <div className="contactButton" onClick={this.contact}>
              Send
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default withRouter(Contact);

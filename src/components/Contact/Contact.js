// **************************************CONTACT.JS********************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Contact.css";


// -------------------------------------FUNCTIONALITY--------------------------------------
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      emailBody: "",
    };
  }

// -------------------------------------HANDELERS-------------------------------------------

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

// -------------------------------------FUNCTIONS-------------------------------------------

  requiredEmail = () => {
var rEmail = this.state.email.value;
if (rEmail !== "@")
{
alert("Please enter a valid email");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}

resetFields = () => {
    let inputs = document.querySelectorAll("input", "textarea");
    inputs.forEach((input) => (input.value = ""));
    this.setState({ email: "", name: "", emailBody: "" });
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
        this.resetFields();
        alert(`Email successfully sent! Kortney will respond soon!`);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Email failed to send. Make sure all input fields have been filled."
        );
      });
  };

  // -----------------------------------STRUCTURE------------------------------------------

  render() {
    return (
      <div className = "body">
        <div className="contactComponent">
          <div className="titleAndContentContact">
            <h6 className="contactTitle">Have a question for Kortney?</h6>
          </div>
          <div className="contactInputFields">
            <input
              onChange={(event) => this.handleEmail(event.target.value)}
              className="contactInput"
              placeholder="Your Email"
              value={this.state.email}
            />
            <input
              onChange={(event) => this.handleName(event.target.value)}
              className="contactInput"
              placeholder="Name"
              value={this.state.name}
            />
            <textarea
              onChange={(event) => this.handleEmailBody(event.target.value)}
              className="contactEmail"
              placeholder="Email Body"
              value={this.state.emailBody}
            />
          </div>
          <div className="contactButtonBox">
            <div className="contactButton" onClick={this.contact}>
              Send
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
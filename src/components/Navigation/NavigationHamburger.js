import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./NavigationHamburger.css";

class NavHam extends Component {
  constructor() {
    super();
    this.state = {
      textColor: "red",
    };
  }

  
  // --------------------------RENDERED INFO-------------------------
  render(props) {
      console.log(props)
    return (
      <nav className="navigationHamComponent">
        <div className="navHamButtons">
          <div
            className={
              this.props.location.pathname === "/" ? "selected" : "navHome"
            }
            onClick={() => {
              this.props.history.push("/") 
              this.props.handleCheckClick();
            }}
          >
            Home
          </div>
          <div
            className={
              this.props.location.pathname === "/Books"
                ? "selected"
                : "navBooks"
            }
            onClick={() =>{ 
              this.props.history.push("/Books"); 
              this.props.handleCheckClick();
            }}
          >
            BOOKS
          </div>
          <div
            className={
              this.props.location.pathname === "/Newsletter"
                ? "selected"
                : "navNewsletter"
            }
          >
            <li>
              <a href="https://www.subscribepage.com/f7q6g9">
                <span className="newsLetterButton">Newsletter</span>
              </a>
            </li>
          </div>
          <div
            className={
              this.props.location.pathname === "/About"
                ? "selected"
                : "navAbout"
            }
            onClick={() => {
              this.props.history.push("/About"); 
              this.props.handleCheckClick();
            }}
          >
            About
          </div>
          <div
            className={
              this.props.location.pathname === "/Contact"
                ? "selected"
                : "navContact"
            }
            onClick={() => {
              this.props.history.push("/Contact"); 
              this.props.handleCheckClick();
            }}
          >
            Contact
          </div>
          <div
            className={
              this.props.location.pathname === "/Blog"
                ? "selected"
                : "navBlog"
            }
            onClick={() => {
              this.props.history.push("/Blog"); 
              this.props.handleCheckClick();
            }}
          >
            Blog
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(NavHam)
);

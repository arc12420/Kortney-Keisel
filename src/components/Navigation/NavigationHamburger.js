import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./NavigationHamburger.css";
import axios from "axios";
import KLogo from "../../Logos/KKLogo-2.1-Clear.png";

class NavHam extends Component {
  constructor() {
    super();
    this.state = {
      textColor: "red",
    };
  }

  logout = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        this.props.logoutUser();
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  // --------------------------RENDERED INFO-------------------------
  render(props) {
    return (
      <nav className="navigationHamComponent">
        <div className="navHamButtons">
          <div
            className={
              this.props.location.pathname === "/" ? "selected" : "navHome"
            }
            onClick={() => this.props.history.push("/")}
          >
            Home
          </div>
          <div
            className={
              this.props.location.pathname === "/Books"
                ? "selectedHam"
                : "navHamBooks"
            }
            onClick={() => this.props.history.push("/Books")}
          >
            BOOKS
          </div>
          <div
            className={
              this.props.location.pathname === "/Newsletter"
                ? "selectedHam"
                : "navHamNewsletter"
            }
          >
            <li>
              <a href="https://www.subscribepage.com/f7q6g9">
                <span className="newsLetterButtonHam">Newsletter</span>
              </a>
            </li>
          </div>
          <div
            className={
              this.props.location.pathname === "/About"
                ? "selectedHam"
                : "navHamAbout"
            }
            onClick={() => this.props.history.push("/About")}
          >
            About
          </div>
          <div
            className={
              this.props.location.pathname === "/Contact"
                ? "selectedHam"
                : "navHamContact"
            }
            onClick={() => this.props.history.push("/Contact")}
          >
            Contact
          </div>
          <div
            className={
              this.props.location.pathname === "/Blog"
                ? "selectedHam"
                : "navHamBlog"
            }
            onClick={() => this.props.history.push("/Blog")}
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

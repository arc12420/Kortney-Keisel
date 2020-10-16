import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navigation.css";
import axios from "axios";
import KLogo from "../../Kortney-Logo-Clear-3.png";

class Nav extends Component {
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
  // ------------------TEST---------------

  // home = "/";
  // books = "/Books";
  // Newsletter = "/Newsletter";
  // about = "/About";
  // contact = "/Contact";
  // blog = "/Authentication";

  // this.props.location.pathname === "/" ? null : this.props.location
  //                 .pathname === "/Registration" ? null : (
  //               <Navigation />
  // )

  // navHome = document.body;

  // --------------------------RENDERED INFO-------------------------
  render(props) {
    console.log(this.props.location.pathname);
    return (
      <nav className="navigationComponent">
        <div className="hamburger">
        <li>
          <a
            href="https://www.instagram.com/authorkortneykeisel/"
            class="iconHamburger"
          >
            <GiHamburgerMenu />
          </a>
        </li>
        </div>
        <div className="navButtons">
          {/* <img src={KLogo} className="KLogoNav" alt="KLogo" /> */}
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
                ? "selected"
                : "navBooks"
            }
            onClick={() => this.props.history.push("/Books")}
          >
            BOOKS
          </div>
          <div
            className={
              this.props.location.pathname === "/Newsletter"
                ? "selected"
                : "navNewsletter"
            }
            onClick={() => this.props.history.push("/Newsletter")}
          >
            Newsletter
          </div>
          <div
            className={
              this.props.location.pathname === "/About"
                ? "selected"
                : "navAbout"
            }
            onClick={() => this.props.history.push("/About")}
          >
            About
          </div>
          <div
            className={
              this.props.location.pathname === "/Contact"
                ? "selected"
                : "navContact"
            }
            onClick={() => this.props.history.push("/Contact")}
          >
            Contact
          </div>
          <div
            className={
              this.props.location.pathname === "/Blog" ? "selected" : "navBlog"
            }
            onClick={() => this.props.history.push("/Blog")}
          >
            Blog
          </div>
        </div>
        <div className="KLogoBox">
          <img src={KLogo} className="KLogo" alt="Logo" />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Nav)
);

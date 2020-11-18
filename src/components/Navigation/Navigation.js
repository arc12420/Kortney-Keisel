import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./Navigation.css";
import axios from "axios";
import KLogo from "../../Logos/KKLogo-2.1-Clear.png";

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
  // --------------------------RENDERED INFO-------------------------
  render(props) {
    console.log(this.props);
    console.log(this.props.user);
    return (
      <nav className="navigationComponent">
        <div className="hiddenButtons">
          <div className="hamburger">
            <li>
              <a
                href="https://www.instagram.com/authorkortneykeisel/"
                className="iconHamburger"
              >
                <GiHamburgerMenu />
              </a>
            </li>
          </div>
          {this.props.isLoggedIn === true ? (
            <div className="logoutComp">
              <div className="logoutBox" onClick={() => this.logout()}>
                <div className="iconLogout">
                  <RiLogoutBoxRLine />
                </div>
                logout
              </div>
            </div>
          ) : null}
        </div>
        <div className="KLogoBox">
          <img src={KLogo} className="KLogo" alt="Logo" />
        </div>
        <div className="navButtons">
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
          >
            <li>
              <a href="https://www.subscribepage.com/f7q6g9">
                <span
                  className="newsLetterButton"
                >
                  Newsletter
                </span>
              </a>
            </li>            
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
        {/* <div className="KLogoBox">
          <img src={KLogo} className="KLogo" alt="Logo" />
        </div> */}
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Nav)
);

// **************************************Navigation.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import NavHam from "./NavigationHamburger";
import "./Navigation.css";
import axios from "axios";
import KLogo from "../../Logos/KKLogo-2.1-Clear.png";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      checkedN: true,
      showBlog: false
    };
  }

  // -------------------------------------FUNCTIONS-------------------------------------------
  logout = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        this.props.logoutUser();
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };



  // -------------------------------------HANDELERS-------------------------------------------
  handleCheck = (event) => {
    this.setState({ checkedN: event.target.checked });
  };

  handleCheckClick = (event) => {
    this.setState({ checkedN: true });
  };

  // -----------------------------------STRUCTURE---------------------------------------------
  render(props) {
    // console.log(this.props);
    // console.log(this.props.user);
    // console.log(this.props.location.pathname);
    // console.log(this.state.checkedN);
    return (
      <nav className="navigationComponent">
        <div className="KLogoBox">
          <img src={KLogo} className="KLogo" alt="Logo" />
        </div>
        {/* v------------------------------------------HAMBURGER/LOGOUT BUTTONS-------------------------------v */}
        <div className="hiddenButtons">
          <div className="menuWrap">
            <input
              type="checkbox"
              className="toggler"
              checked={this.state.checkedN}
              onChange={this.handleCheck}
            />
            {this.state.checkedN === true ? null : (
              <div className="navHamTopContainer">
                <NavHam
                  className="navHamCont"
                  handleCheckClick={this.handleCheckClick}
                />
                <div
                  className="greySpace"
                  onClick={() => {
                    this.handleCheckClick();
                  }}
                ></div>
              </div>
            )}
            <li className="iconHamburgerBox">
              <a href="" className="iconHamburger">
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
        {/* v-----------------------------------------NAVIGATION BUTTONS-------------------------------v */}
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
          {/* --------------------------------------------------BLOG PAGE------------------------ */}
          {this.state.showBlog === true ?
          <div
            className={
              this.props.location.pathname === "/Blog" ? "selected" : "navBlog"
            }
            onClick={() => this.props.history.push("/Blog")}
          >
            Blog
          </div>
          : null
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Nav)
);

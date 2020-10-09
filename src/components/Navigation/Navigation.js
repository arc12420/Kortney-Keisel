import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Navigation.css";
import axios from "axios";

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      textColor: "red"
    }
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

 home = "/";
 books= "/Books";
 Newsletter= "/Newsletter";
 about= "/About";
 contact= "/Contact";
 blog= "/Authentication";

// this.props.location.pathname === "/" ? null : this.props.location
//                 .pathname === "/Registration" ? null : (
//               <Navigation />
            // )


navHome = document.body;



// --------------------------RENDERED INFO-------------------------
  render(props) {
    console.log(this.props.location.pathname);
    return (
      <nav className="navigationComponent">
        <div
          className={this.props.location.pathname === "/" ? "selected" : "navHome"}
          onClick={() => this.props.history.push("/")}
          >
          {/* {console.log(document.getElementById("navHome"))}; */}
          {/* {this.props.location.pathname === "/" ? document.getElementById("navHome").style.color = "red" : null}           */}
          {/* {this.props.location.pathname === "/" ? this.navHome.style.backgroundColor = "red" : null} */}
          Home
        </div>
        <div
          className={this.props.location.pathname === "/Books" ? "selected" : "navBooks"}
          onClick={() => this.props.history.push("/Books")}>
          BOOKS
        </div>
        <div 
          className={this.props.location.pathname === "/Newsletter" ? "selected" : "navNewsletter"}        
          onClick={() => this.props.history.push("/Newsletter")}>
          Newsletter
        </div>
        <div
          className={this.props.location.pathname === "/About" ? "selected" : "navAbout"}
          onClick={() => this.props.history.push("/About")}>
          About
        </div>
        <div
          className={this.props.location.pathname === "/Contact" ? "selected" : "navContact"}
          onClick={() => this.props.history.push("/Contact")}>
          Contact
        </div>
        <div
          className={this.props.location.pathname === "/Blog" ? "selected" : "navBlog"}
          onClick={() => this.props.history.push("/Blog")}>
          Blog
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Nav)
);

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Navigation.css";
import axios from "axios";

class Nav extends Component {

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
  render() {
    return (
      <nav className="navigationComponent">
        <div
          className="navHome"
          onClick={() => this.props.history.push("/")}>
          Home
        </div>
        <div
          className="navBooks"
          onClick={() => this.props.history.push("/Books")}>
          BOOKS
        </div>
        <div className="navAboutTheAuthor"
          onClick={() => this.props.history.push("/Newsletter")}>
          Newsletter
        </div>
        <div className="navAboutTheAuthor"
          onClick={() => this.props.history.push("/About")}>
          About
        </div>
        <div className="navAboutTheAuthor"
          onClick={() => this.props.history.push("/Contact")}>
          Contact
        </div>
        <div className="navAboutTheAuthor"
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

// **************************************App.JS********************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { loginUser } from "../src/redux/reducer";
import { connect } from "react-redux";
import "./App.css";
import "./reset.css";
import "./index.css";
import "./Fonts/Kemuri-Regular.eot";

// -------------------------------------FUNCTIONALITY------------------------------------

class App extends Component {
  componentDidMount() {
    axios.get("/api/verify").then((res) => {
      if (res.data.userId) {
        this.props.loginUser(res.data);
      }
    });
  }

  // -----------------------------------STRUCTURE--------------------------------------------

  render() {
    // console.log(this.props);
    // console.log(this.props.location);
    // console.log(this.props.location.pathname);
    return (
      <div>
        <div className="app">
          <div className="projectHeader">
            <div className="navLeader">
                <Navigation />
            </div>
            {routes}
            <div className="footerLeader">
                <Footer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { loginUser })(withRouter(App));
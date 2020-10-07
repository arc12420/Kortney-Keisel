import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import "./App.css";
import "./reset.css";
import axios from "axios";
import { loginUser } from "../src/redux/reducer";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    axios.get("/api/verify").then((res) => {
      if (res.data.userId) {
        this.props.loginUser(res.data);
      }
    });
  }

  render() {
    console.log(this.props.location);
    return (
      <div>
        <div className="app">
          <header className="projectHeader">
            <div className="navLeader">
                <Navigation />
            </div>
            {routes}
          </header>
        </div>
      </div>
    );
  }
}

export default connect(null, { loginUser })(withRouter(App));

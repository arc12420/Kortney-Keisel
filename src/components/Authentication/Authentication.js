import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
import "./Authentication.css";
import axios from "axios";

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail = (value) => {
    this.setState({ email: value });
  };

  handlePassword = (value) => {
    this.setState({ password: value });
  };

  login = () => {
    // preventDefault();
    const { email, password } = this.state;
    axios
      .post("/api/user", { email, password })
      .then((res) => {
        console.log(res.data);
        this.props.loginUser(res.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
      });
  };

  
  render() {
    return (
      <div className="body" >
        <main className="authenticationComponent">
          <h6 className="welcome">Welcome Kortney!</h6>
          <div className="authenticationInputsAndButton">
            <div className="authenticationInputs">
              <input
                placeholder="Username"
                className="authenticationEmailInput"
                onChange={(event) => this.handleEmail(event.target.value)}
              />
              <form
                onSubmit={ this.login}>
              <input
                placeholder="Password"
                className="authenticationPasswordInput"
                type="password"
                onChange={(event) => this.handlePassword(event.target.value)}
              />
              </form>
            </div>
            <div className="authButtonBox">
              <div className="authButton" onClick={this.login}>
                {" "}
                Sign-in{" "}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Authentication);

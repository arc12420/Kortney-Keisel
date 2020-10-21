import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
import "./Authentication.css";
import axios from "axios";

function Authentication(props) {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const login = () => {
    axios
      .post("/api/user", { email, password })
      .then((res) => {
        console.log(res.data);
        props.loginUser(res.data);
        props.history.push("/Home");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
      });
  };
  return (
    <body>
      <main className="authenticationComponent">
        <h6 className="welcome">Welcome Kortney!</h6>
        <div className="authenticationInputsAndButton">
          <div className="authenticationInputs">
            <input
              placeholder="Username"
              className="authenticationEmailInput"
              onChange={(event) => handleEmail(event.target.value)}
            />
            <input
              placeholder="Password"
              className="authenticationPasswordInput"
              type="password"
              onChange={(event) => handlePassword(event.target.value)}
            />
          </div>
            <div className="authButtonBox">
              <div className="authButton"> Sign-in </div>
            </div>
        </div>
      </main>
    </body>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Authentication);

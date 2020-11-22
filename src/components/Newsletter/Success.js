import React from "react";
import { withRouter } from "react-router-dom";
import "./Success.css";

function Newsletter(props) {
  return (
    <div className="body">
      <div className="newsletterSuccessComponent">
          <div className="successBox">
            <div className="success">Success!</div>
          </div>
          <p>You have successfully subscribed to the newsletter of the Author Kortney Keisel!</p>
          <p>Make sure to check your email for your FREE book! <br/> It may be in your spam or promotions folders. </p>
        <div className="checkOutBooks">           
                <span                  
                  className="toBooksButton"
                  onClick={() => props.history.push("/Books")}
                >
                  Check out more of my books!
                </span>
          </div>
        </div>
    </div>
  );
}

export default withRouter(Newsletter);
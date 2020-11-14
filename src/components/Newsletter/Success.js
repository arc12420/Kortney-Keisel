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
          <p>You will now receive the newsletter of Author Kortney Keisel!</p>
        <div className="checkOutBooks">           
                <span                  
                  className="toBooksButton"
                  onClick={() => props.history.push("/Books")}
                >
                  Check out my books!
                </span>
          </div>
        </div>
    </div>
  );
}

export default withRouter(Newsletter);

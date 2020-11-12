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
                  // href="https://www.amazon.com/Love-Time-Corona/dp/B08KFM4HJM/ref=sr_1_1?dchild=1&keywords=sappy+love+book&qid=1602196274&s=books&sr=1-1"
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

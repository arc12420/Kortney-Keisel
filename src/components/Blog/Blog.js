import React from "react";
import { withRouter } from "react-router-dom";
import "./Blog.css";

function Blog() {
  return (
    <div className = "body">
      <div className="blogComponent">      
        <div className="postMain">
          <div className="postContent">
            Post Content
            {/* {props.posts.post} */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Blog);

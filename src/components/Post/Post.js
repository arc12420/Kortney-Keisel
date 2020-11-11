import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";

function Post(props) {
  return (
    <div className="postComponent">      
      <div className="updateAndPost">
        <div className="titleAndButtons">
          <div className="postTitle">{props.posts.title}</div>
          <div className="postButtons">
            <h5
              className="editAndX"
              onClick={() => props.history.push(`/Edit/${props.posts.id}`)}
            >
              {" "}
              EDIT{" "}
            </h5>
            <h5 onClick={() => props.dlt(props.posts.id)} className="editAndX">
              {" "}
              X{" "}
            </h5>
          </div>
        </div>
        <div className="postInfo">
          <img src={props.posts.img} className="uploadedImage" alt="Post Upload" />
          <div className="postContent">{props.posts.post}</div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Post);

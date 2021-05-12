// **************************************Post.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";
// import { RiEditFill } from "react-icons/ri";
// import { MdDeleteForever } from "react-icons/md";

// -------------------------------------FUNCTIONALITY--------------------------------------
// -----------------------------------STRUCTURE---------------------------------------------
function Post(props) {
  console.log(props);
  return (
    <div className="postComponent">
      <div className="updateAndPost">
        <div className="titleAndButtons">
          <div className="postTitle">{props.posts.title}</div>
          {/* {props.isLoggedIn === true ? ( */}
          <div className="postButtons">
            <h5
              className="editPost"
              onClick={() => props.history.push(`/Edit/${props.posts.id}`)}
            >
              {/* <RiEditFill /> */}
              {/* <p className="tooltipEdit" >Edit</p>             */}
            </h5>
            <h5
              className="deletePost"
              onClick={() => props.dlt(props.posts.id)}
            >
              {/* <MdDeleteForever /> */}
              {/* <p className="tooltipDelete" >Delete</p>       */}
            </h5>
          </div>
          {/* ) : null}           */}
        </div>
        <div className="postInfo">
          {props.posts.img === "" ? null : (
            <img
              src={props.posts.img}
              className="uploadedImage"
              alt="Post Upload"
            />
          )}
          <div className="postContentBox">
            <div className="postContentPost">{props.posts.post}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Post);

import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";
import "./Blog.css";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const post = await axios.get("/api/posts");
    this.setState({
      posts: post.data
    });
  }
  render() {
    console.log(this.state.posts)
    const arr = this.state.posts.map((element, index) => {
      return (
        <div className="pullPost">
          <Post className="postComp" posts={element} dlt={this.dlt} />
        </div>
      );
    });
    return (
      <div className="body">
        <div className="blogComponent">
              Kortneys Blog
          <div className="postMain">
            <div className="postContent">
              {arr}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;

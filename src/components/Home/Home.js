import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import FreeBook from "../Free Book/FreeBook";
import booksPicOne from "../../Photos/Blue-Book.jpg";
import NewBook from "../NewBook/NewBook";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newbook: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const newbook = await axios.get("/api/newbook");
    this.setState({
      newbook: newbook.data,
    });
  }

  render() {
    // console.log(this.state.newbook);
    const arr = this.state.newbook.map((element, index) => {
      // console.log(this.arr);
      return (
        <div className="pullNewbook">
          <NewBook className="newBookTopComp" newbook={element} booksPicOne={booksPicOne} />
        </div>
      );
    });
    return (
      <div className="body">
        <div className="homePage">
          <main>
            <div className="imageOneBox">
              <header className="homeTitle">Coming Soon!</header>
              {arr}
            </div>
            <FreeBook />
          </main>
          <hr />
        </div>
      </div>
    );
  }
}

export default Home;

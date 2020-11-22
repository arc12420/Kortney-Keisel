import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import FreeBook from "../Free Book/FreeBook";
import booksPicOne from "../../Photos/Blue-Book.jpg";
import NewBook from "../NewBook/NewBook";
// import NewBookEdit from "../NewBook/NewBookEdit/NewBookEdit";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newbook: [],
      title: "",
      img: "",
      releasedate: "",
      description: "",
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const newbook = await axios.get("/api/newbook");

    this.setState({
      newbook: newbook.data,
      title: newbook.data[0].title,
      img: newbook.data[0].img,
      releasedate: newbook.data[0].releasedate,
      description: newbook.data[0].description,
    });
  }

  // ---------------------------------------------------------edit post-----------------------
  handleTitle = (value) => {
    this.setState({ title: value });
  };
  handleReleaseDate = (value) => {
    this.setState({ releaseDate: value });
  };
  handleDescription = (value) => {
    this.setState({ description: value });
  };
  // --------------------------------------------------------------------------------------------------

  render() {
    // console.log(this.state.newbook);
    // console.log(this.state);
    console.log(this.props.history)
    const arr = this.state.newbook.map((element, index) => {
      // console.log(this.state.newbook.map(element));
      return (
        <div className="pullNewbook" key={element.id}>
          <NewBook className="newBookTopComp" newbook={element} booksPicOne={booksPicOne} />
          {/* <NewBookEdit className="newBookTopComp" 
          newbook={element} 
          handleTitle={this.handleTitle} 
          handleReleaseDate={this.handleReleaseDate} 
          handleDescription={this.handleDescription} 
          booksPicOne={booksPicOne}
          // historyP={this.props.history.push("/")} 
          /> */}
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

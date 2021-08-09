// **************************************Home.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import FreeBook from "../Free Book/FreeBook";
import booksPicOne from "../../Photos/THE PROMISED PRINCE.png";
// import booksPicOne from "../../Photos/Blue-Book.jpg";
import NewBook from "../NewBook/NewBook";
// import NewBookEdit from "../NewBook/NewBookEdit/NewBookEdit";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Home extends Component {
  constructor() {
    super();
    this.state = {
      newbook: [],
      title: "",
      img: "",
      releasedate: "",
      description: "",
      books: [],
    };
  }
  
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const newbook = await axios.get("/api/newbook");
    const book = await axios.get("/api/books");
    
    this.setState({
      newbook: newbook.data,
      title: newbook.data[0].title,
      img: newbook.data[0].img,
      releasedate: newbook.data[0].releasedate,
      description: newbook.data[0].description,
      books: book.data,
    });
  }
  
  // -------------------------------------HANDELERS-------------------------------------------
  // -------------------------------------EDIT NEWBOOK INFO-----------------------------------
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
  
  // -----------------------------------STRUCTURE---------------------------------------------
  render() {
    console.log(this.props.history)
    // const arr = this.state.newbook.map((element, index) => {
    const arr = this.state.books.map((element, index) => {
      return (
        <div className="pullNewbook" key={element.id}>
          <NewBook className="newBookTopComp" newbook={element} booksPicOne={booksPicOne} />
        </div>
      );
    });
    return (
      <div className="body">
        <div className="homePage">
          <main className="homePageMain">
            <div className="imageOneBox">
              {/* {arr} */}
              <NewBook/>
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

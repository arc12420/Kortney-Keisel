// **************************************BOOKS.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Books.css";
import BooksIndividual from "../Books Individual/Books Individual";
// import { MdAdd, MdFeaturedPlayList } from "react-icons/md";
import FreeBook from "../Free Book/FreeBook";
// import AWS from "../AWS/AWS";

// -------------------------Note When Changing----------------------------------------
// -FreeBook Section : You can manually change this.state to hide or unhide that section.
// -BookCompAddBook component: This is a part of the unfinished Admin features.

// -------------------------------------FUNCTIONALITY--------------------------------------
class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      hideFreeBook: true
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const book = await axios.get("/api/books");
    this.setState({
      books: book.data,
    });
  }

  
  // -----------------------------------STRUCTURE---------------------------------------------
  render() {
    const arr = this.state.books.map((element, index) => {
      return (
        <div className="pullBooks">
          <BooksIndividual className="booksIndividualTopComp" books={element} />
        </div>
      );
    });
    return (
      <div className="body">
        <div className="booksComponent">
          {/* <div className="bookCompAddBook">
            <div className="addBookButton">
              <MdAdd />
            </div>
            <AWS picture={this.picture}/>
          </div> */}
          {arr}
        </div>
        {this.state.hideFreeBook ? null :
        <FreeBook />
        }
      </div>
    );
  }
}

export default withRouter(Books);

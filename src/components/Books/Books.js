// **************************************BOOKS.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Books.css";
import BooksIndividual from "../Books Individual/Books Individual";
import { MdAdd } from "react-icons/md";
import FreeBook from "../Free Book/FreeBook";
// import AWS from "../AWS/AWS";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      // picture: ""
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
        <FreeBook />
      </div>
    );
  }
}

export default withRouter(Books);

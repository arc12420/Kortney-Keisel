// **************************************ABOUT.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Books.css";
import BooksIndividual from "../Books Individual/Books Individual";
import { MdAdd } from "react-icons/md";
import FreeBook from "../Free Book/FreeBook";

// -------------------------------------FUNCTIONALITY--------------------------------------
class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
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
        <div className="booksComponent">ADD</div>
        <FreeBook />
      </div>
    );
  }
}

export default withRouter(Books);

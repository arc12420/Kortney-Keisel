// **************************************BOOKS.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Books.css";
import BooksIndividual from "../Books Individual/Books Individual";
import FreeBook from "../Free Book/FreeBook";
import BK6 from "../../Photos/COMPLEX.jpg";
// import { MdAdd, MdFeaturedPlayList } from "react-icons/md";
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
          <div className=" complexSectionHC">   
          <div className="pullBooks">         
    <div className="booksIndividualComponent">        
      <div className="booksBook">        
      <h5 className="titleHid">COMPLEX</h5>
            <div className="booksImage">
          <img
            src={BK6}
            className="bookImg"
            alt="BookCover"
          />
          </div>          
        <div className="booksTitleDiscButton">
          <div className="booksTitleDisc">
            <h5 className="title">COMPLEX</h5>
            <p className="bkDescription">Tiny Little Lie #1: I want the new resort in Turks and Caicos to open on schedule.</p>
            <br/>
            <p className="bkDescription">Tiny Little Lie #2: I'm not falling for Luke McKenna.</p>
            <br/>
            <p className="bkDescription">Unfortunately, those tiny little lies snowballed into something bigger. Much bigger. Now I'm stuck.<br/>It sounds bad. But I'm not a bad person. I'm doing the right thing...I think. I'm telling myself I'm a superhero in heels, saving people I care about.<br/> But the grumpy onsite contractor isn't making things easy. The more I lie and try to stall the hotel opening, the harder he works to complete the project. </p>
            <br/>
             <p className="bkDescription">Did I mention he's handsome? <br/> And moody?<br/> And brooding?<br/>And my complete opposite in every way?<br/><br/> If the truth about what I've done comes out, Luke will never forgive me. Then I'll have to face another truth: my attraction to him might actually be something more—something worth fighting for.</p>
          </div>
          <div className="buyButtonContainer">
            <li className="buyLinkButtonBox" key='COMPLEX'>
              <a href={'https://www.amazon.com/dp/B09QLMK765'}>Purchase</a>
            </li>
          </div>
          </div>
            </div>
            </div>
            </div>
            </div>  
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

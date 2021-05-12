// **************************************ABOUT.JS*****************************************

import React, { Component } from "react";
import axios from "axios";
import AboutData from "../About Data/About Data";
import "./About.css";

// -------------------------------------FUNCTIONALITY--------------------------------------
class About extends Component {
  constructor() {
    super();
    this.state = {
      about: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const about = await axios.get("/api/about");
    this.setState({
      about: about.data,
    });
  }

  
  // -----------------------------------STRUCTURE---------------------------------------------
  render() {
    const arr = this.state.about.map((element, index) => {
      return (
        <div className="aboutComponentTop">
          {console.log('ABOUT HIT')}
          <AboutData className="about" about={element} />
        </div>
      );
    });
    return <div className="body">{arr}</div>;
  }
}
export default About;

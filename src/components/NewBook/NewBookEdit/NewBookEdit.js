import React, { Component } from "react";
import axios from "axios";
import { RiEditFill } from "react-icons/ri";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import NewBookEdit from "./NewBookEdit/NewBookEdit";

class NewBookEdit extends Component {
  constructor() {
    super();
    this.state = {
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

  updateNewBook = () => {
    axios
      .put(`/api/updateNewBook/0`, { ...this.state })
      .then((res) => {
        this.props.history.push("/");
      });
  };
  // --------------------------------------------------------------------------------------------------

  render(props) {
    console.log(this.props.history);
    return (
      <div className="newBookComponent">
        <div className="newBookEditBox">
          <div className="editNewBookButton">
            <RiEditFill />
          </div>
        </div>
        <section className="imageOneBoxContent">
          <div className="newBookTitle-Info">
            <input
              className="newBookTitle"
              onChange={(event) => this.handleTitle(event.target.value)}
              value={this.state.title}
            />
            <input
              className="newBookReleaseDate"
              onChange={(event) => this.handleReleaseDate(event.target.value)}
              value={this.state.releasedate}
            />
            <hr />
            <textarea
              className="newBookDescription"
              onChange={(event) => this.handleDescription(event.target.value)}
              value={this.state.description}
            />
            <div className="editNewBookButtonBox" onClick={this.updateNewBook} >
                <div className="editNewBookButton">
                    SAVE
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect (mapStateToProps)(withRouter(NewBookEdit));

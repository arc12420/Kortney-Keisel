// **************************************NewBook.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import { withRouter } from "react-router-dom";
import { RiEditFill } from "react-icons/ri";
// import NewBookEdit from "./NewBookEdit/NewBookEdit";
import "../NewBook/NewBook.css";
import comingSoonImage from "../../Photos/THE FORGOTTEN QUEEN.jpg";

// -------------------------------------FUNCTIONALITY--------------------------------------
// -----------------------------------STRUCTURE---------------------------------------------
function Newbook(props) {
  return (
    <div className="newBookComponent">
      <div className="newBookEditBox">
        {/* <NewBookEdit/> */}
        {/* <div className="editNewBookButton"><RiEditFill/></div> */}
      </div>
      {/* <p className="newBookTitleTempTwo">Now Available!</p> */}
      <p className="newBookTitleTempTwo">Coming Soon!</p>
      <section className="imageOneBoxContentTemp">
        <img src={comingSoonImage} className="imageOneTemp" alt="Book" />
        <div className="newBookTitle-InfoTemp">
          <hr />
          <p className="newBookReleaseDateTempTitle">The Forgotten Queen</p>
          <div className="releaseDateBox">
            <p>Available</p>
            <p className="newBookReleaseDate">September 27th 2021</p>
          </div>
          <hr />
          <div className="newBookDescriptionsContainer">
            <p className="newBookDescription">
              She's trying to remember. He's trying to pretend.
            </p>
            <p className="newBookDescription">
              Sydria Hasler is a blank slate. After a tragic accident, her
              images of the past have vanished. All she wants is to get her
              memory back and return home—wherever home is. But the more she
              rebuilds her past, the more she wants to fight for a future with
              King Marx. Too bad it's all a sham.
            </p>
            <p className="newBookDescription">
              King Marx McKane has never cared about anyone or anything,
              especially being king. When his father forces him to marry a
              mysterious woman, he starts taking things seriously. The only way
              out of his arranged marriage is to pretend that he's falling in
              love with his wife. This charade might end up being the most
              reckless thing Marx has ever done. Is he willing to sacrifice his
              life and his kingdom to set Sydria free?
            </p>
            <p className="newBookDescription">
              Can their fake relationship lead Sydria and Marx to their genuine
              selves, or will deception cost them their freedom?
            </p>
          </div>
          <div className="buyButtonContainerTemp">
            <hr />
            <li className="buyLinkButtonBoxTemp">
              <a
                href={`https://www.amazon.com/gp/product/B098ZN9DNS/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1`}
              >
                PRE-ORDER
              </a>
            </li>
          </div>
        </div>
      </section>
      {/* <section className="imageOneBoxContent">          
          <img src={props.booksPicOne} className="imageOne" alt="Book" />
          <div className="newBookTitle-Info">
            <p className="newBookTitle">{props.newbook.title}</p>
            <p className="newBookReleaseDate">{props.newbook.releasedate}</p>
            <hr />
            <p className="newBookDescription">{props.newbook.description}</p>
          </div>
        </section> */}
    </div>
  );
}

export default withRouter(Newbook);

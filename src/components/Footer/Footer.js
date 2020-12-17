// **************************************Footer.JS*****************************************

// -------------------------------------DEPENDENCIES---------------------------------------
import React from "react";
import "./Footer.css";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";

// -------------------------------------FUNCTIONALITY--------------------------------------
// -----------------------------------STRUCTURE---------------------------------------------
function Home(props) {
  return (
    <footer>
      <ul className="iconsBox">
        <li>
          <a
            href="https://www.facebook.com/groups/1095939214157711/"
            className="iconFacebook"
          >
            <SiFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/authorkortneykeisel/"
            className="iconInstagram"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/kortneykeisel/"
            className="iconPinterest"
          >
            <GrPinterest />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Home;

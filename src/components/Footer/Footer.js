import React, { useState, useEffect } from "react";
import "./Footer.css";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";

function Home(props) {
  return (
    <footer>
      <ul class="iconsBox">   
        <li>
          <a
            href="https://www.facebook.com/groups/1095939214157711/"
            class="iconFacebook"
          >
            <SiFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/authorkortneykeisel/"
            class="iconInstagram"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/kortneykeisel/"
            class="iconPinterest"
          >
            <GrPinterest />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Home;

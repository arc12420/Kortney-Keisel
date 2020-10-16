import React, { useState, useEffect } from "react";
import "./Footer.css";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

function Home(props) {
  return (
    <footer>
      <ul class="iconsBox">   
        <li>
          <a
            href="https://www.facebook.com/kortney.keisel"
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
      </ul>
    </footer>
  );
}

export default Home;

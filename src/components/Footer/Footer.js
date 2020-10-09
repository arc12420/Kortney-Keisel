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
            href="https://twitter.com/kortney_keisel/"
            class="iconTwitter"
          >
            <AiFillTwitterCircle />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/kortney.keisel"
            class="icon brands fa-facebook-f"
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

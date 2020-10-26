import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import FreeBook from "../Free Book/FreeBook";
import booksPicOne from "../../Photos/Blue-Book.jpg";

function Home(props) {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const post = await axios.get("/api/posts");
    const albums = await axios.get("/api/albums");
    setPosts(post.data);
    setAlbums(albums.data);
  }

  return (
    <body className="homePage">
      <main>
        <div className="imageOneBox">
        <header className="homeTitle">Coming Soon!</header>
        <section className="imageOneBoxContent">
          <img src={booksPicOne} className="imageOne" />
          <div className="homeBookTitle-Info">
            <p className="homeBookTitle">Love Savage Secret</p>
            <p>November 15th</p>
            <hr />
            <p>
              Love in the Time of Corona is an epic love story written in its
              entirety during the Coronavirus pandemic. Sloane Knox and Hayden
              Foster are trying to climb their respective ladders in life.
              Through pure coincidence they spend a single night together in
              Minneapolis, MN before their worlds get turned upside down. The
              stage has been set for the most incredibly timely love story ever
              told. Through a twist of monumental proportions, this boundary
              defying tale of romance is challenged at every turn. What will
              happen to the world? Will these star-crossed lovers survive
              seemingly insurmountable odds?
            </p>
          </div>
        </section>
        </div>
        <FreeBook />
      </main>
      <hr />
    </body>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import KLogo from "../../Kortney-Logo-Clear.png";

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
    <div className="homePage">
      <div className="KLogoBox">
        <img src={KLogo} className="KLogo" alt="Logo" />
      </div>
      <div className="space" />
      HOME PAGE
      <hr />
    </div>
  );
}

export default Home;

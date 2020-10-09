import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import KLogo from "../../Kortney-Logo-Clear.png";
import booksPicOne from "./booksPicOne.jpg";
import loveSavageDance from "./loveSavageDance.jpg";

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
      <div className="KLogoBox">
        <img src={KLogo} className="KLogo" alt="Logo" />
      </div>
      <main>
      <header className="homeTitle">Coming Soon!</header>
        <section className="imageOneBox" >
          <img src={booksPicOne} className="imageOne" />
          <div className="homeBookTitle-Info">
            <p className="homeBookTitle" >Love Savage Secret</p>
            <p>October 15th</p>  
            <hr/> 
            <p>Love in the Time of Corona is an epic love story
               written in its entirety during the Coronavirus pandemic.
                Sloane Knox and Hayden Foster are trying to climb their
                 respective ladders in life. Through pure coincidence they
                  spend a single night together in Minneapolis, MN before
                   their worlds get turned upside down. The stage has been
                    set for the most incredibly timely love story ever
                     told. Through a twist of monumental proportions, this
                      boundary defying tale of romance is challenged at
                       every turn. What will happen to the world? Will these 
                       star-crossed lovers survive seemingly insurmountable 
                       odds?
                       </p>         
          </div>
        </section>
        <section className="homeFreeBook">
          <div className="homeFreeBookImage">
          <img src={loveSavageDance} className="freeBook"/>
          </div>
          <div className="freeBookText-Button" >
            <div className="freeBookText" >
              Want a copy of <br/>"love savage Dance" <br/> for free?
            </div>
            <div className="freeBookButtonBox">
            <li><a href="https://www.amazon.com/Love-Time-Corona/dp/B08KFM4HJM/ref=sr_1_1?dchild=1&keywords=sappy+love+book&qid=1602196274&s=books&sr=1-1" >
              <span className="freeBookButton">Get yours here!</span></a></li>      
            </div>
          </div>
        </section>
      </main>
      <hr />
    </body>
  );
}

export default Home;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/About/About";
import Authentication from "./components/Authentication/Authentication";
import Home from "./components/Home/Home";
// import Photos from "./components/Photos/Photos";
import Books from "./components/Books/Books";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Success from "./components/Newsletter/Success";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Books" component={Books} />
    <Route path="/Newsletter" component={Newsletter} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Blog" component={Blog} />
    <Route path="/Admin" component={Authentication} />
    <Route path="/NewsletterSuccess" component={Success} />
  </Switch>
);

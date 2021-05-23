import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Faq from "./Faq";
import About from "./About";
import Home from "./Home";
import Header from "./Header";

function Body() {
  const bodyStyle = {
    maxWidth: "1200px",
    padding: "0 10%",
  };

  return (
    <div style={bodyStyle}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Body;

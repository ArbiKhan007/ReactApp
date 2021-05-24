import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StyleRoot } from "radium";

import Faq from "./Faq";
import About from "./About";
import Home from "./Home";
import Header from "./Header";

function Body() {
  const bodyStyle = {
    maxWidth: "1200px",
    padding: "0 10%",
    "@media (max-width: 500px)": {
      padding: "0",
    },
  };

  return (
    <StyleRoot>
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
    </StyleRoot>
  );
}

export default Body;

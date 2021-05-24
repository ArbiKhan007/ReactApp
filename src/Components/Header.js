import { React, useState } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { StyleRoot } from "radium";

function Header() {
  const [display, setDisplay] = useState(false);

  function setDisplayBlock() {
    setDisplay((prev) => !prev);
  }

  const logoStyle = {
    width: "10%",
    "@media (max-width: 500px)": {
      width: "30%",
      height: "30%",
      padding: "20px",
      display: "none",
    },
  };

  const headerStyle = {
    display: "flex",
    color: "#de1b0d",

    "@media (max-width: 500px)": {
      display: "block",
    },
  };

  const navbarStyle = {
    listStyle: "none",
    opacity: display ? 1 : 0,
    zIndex: display ? 1 : -1,
    transitionProperty: "all",
    transitionDuration: "0.7s",
    transitionTimingFunction: "ease-out",
    transform: display ? "translateX(30px)" : "translateX(-20px)",
  };

  const linkStyle = {
    textDecoration: "none",
    display: "block",
    backgroundColor: "#f2f4c3",
    padding: "8px",
    fontWeight: "500",
  };

  const listStyle = {
    float: "left",
    margin: "8px",

    "@media (max-width: 500px)": {
      float: "none",
    },
  };

  const dotIconStyle = {
    padding: "20px",
    color: "#000",
    cursor: "pointer",
    fontSize: "2rem",

    "@media (max-width: 500px)": {
      position: "absolute",
      top: 0,
      right: 0,
    },
  };

  const nameStyle = {
    fontSize: "2rem",

    "@media (max-width: 500px)": {
      fontSize: "2rem",
      padding: "0 4rem",
    },
  };

  return (
    <StyleRoot>
      <div>
        <header style={headerStyle}>
          <img className="App-logo" style={logoStyle} src={logo} alt="Hey" />
          <h1 style={nameStyle}>Harvey Specter</h1>
          <div style={dotIconStyle}>
            <FontAwesomeIcon onClick={setDisplayBlock} icon={faEllipsisV} />
          </div>

          <ul style={navbarStyle}>
            <li style={listStyle}>
              <Link style={linkStyle} to="/">
                Home
              </Link>
            </li>
            <li style={listStyle}>
              <Link style={linkStyle} to="/about">
                About
              </Link>
            </li>
            <li style={listStyle}>
              <Link style={linkStyle} to="/faq">
                FAQ's
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </StyleRoot>
  );
}

export default Header;

import { React, useState } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [display, setDisplay] = useState(false);

  function setDisplayBlock() {
    setDisplay((prev) => !prev);
  }

  const logoStyle = {
    width: "10%",
  };

  const headerStyle = {
    display: "flex",
    color: "#de1b0d",
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
  };

  return (
    <div>
      <header style={headerStyle}>
        <img className="App-logo" style={logoStyle} src={logo} alt="Hey" />
        <h1>John Smith</h1>
        <h1 style={{ paddingLeft: "20px", color: "#000", cursor: "pointer" }}>
          <FontAwesomeIcon onClick={setDisplayBlock} icon={faEllipsisV} />
        </h1>

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
  );
}

export default Header;

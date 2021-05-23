import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function FaqElement(props) {
  const [display, setDisplay] = useState(false);

  function handleClick(e) {
    setDisplay((prev) => !prev);
  }

  const faqList = {
    display: "flex",
    justifyContent: "space-between",
    height: display ? "16vh" : "8vh",
    backgroundColor: "#393e46",
    listStyle: "none",
    color: "#fff",
    textAlign: "left",
    padding: "8px",
    transitionDuration: "0.15s",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in",
    borderBottom: "2px solid #eeeeee",
  };

  return (
    <div style={faqList} onClick={handleClick} name={props.name}>
      <div>
        <p
          style={{
            margin: "0",
            padding: ".75rem",
            color: display ? "#aad8d3" : "#fff",
          }}
        >
          {props.ques}
        </p>
        <p
          style={{
            opacity: display ? 1 : 0,
            margin: "0",
            padding: ".75rem",
          }}
        >
          {props.ans}
        </p>
      </div>
      <FontAwesomeIcon
        style={{ padding: "1rem", cursor: "pointer", color: "#00adb5" }}
        icon={display ? faMinusSquare : faPlusSquare}
      />
    </div>
  );
}

export default FaqElement;

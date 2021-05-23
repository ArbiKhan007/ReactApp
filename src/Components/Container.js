import React from "react";

function Container(props) {
  const containerStyle = {
    margin: "0 2rem",
    backgroundColor: "#ebebeb",
    fontSize: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "left", padding: "1rem", margin: "0" }}>
        {props.title}
      </h2>
      {props.children}
    </div>
  );
}

export default Container;

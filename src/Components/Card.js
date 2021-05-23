import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Card(props) {
  const cardStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  return (
    <div style={cardStyle} data-tilt>
      <div
        style={{
          clipPath: "circle(35% at 50% 40%)",
          margin: "1rem",
          minWidth: "500px",
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={props.image}
          alt=""
        />
      </div>

      <div style={{ display: "block" }}>
        <div style={{ margin: "2rem 0" }}>
          <h3 style={{ margin: "0.5rem", fontWeight: "300" }}>{props.name}</h3>
          <h4 style={{ margin: "0", fontWeight: "300" }}>{props.work}</h4>
          <p style={{ padding: "1rem", margin: "0" }}>{props.desc}</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <FontAwesomeIcon className="icons" icon={faFacebookSquare} />

          <FontAwesomeIcon className="icons" icon={faTwitterSquare} />

          <FontAwesomeIcon className="icons" icon={faInstagramSquare} />
        </div>
      </div>
    </div>
  );
}

export default Card;

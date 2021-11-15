import React from "react";
import "./css/Card.css";

function Card({ image, title, body, url }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="icon" />
      </div>

      <div className="card-content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>

        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

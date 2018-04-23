import React from "react";
import "./FriendCard.css";

const Images = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.shuffleImages(props.id)} className="shuffle">
      𝘅
    </span>
  </div>
);

export default Images;
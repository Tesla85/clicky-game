import React from "react";
import "./Images.css";

const Images = props => (
  <div className="card">
    <div className="img-container">
      <ul>
        <li>
          <img alt={props.id} src={props.image} />
        </li>
      </ul>
    </div>
    <span onClick={() => props.shuffleImages(props.id)} className="shuffle">
      𝘅
    </span>
  </div>
);

export default Images;
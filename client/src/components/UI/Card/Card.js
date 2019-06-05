import React from "react";

const card = props => (
  <div>
    <div className="card" style={{ backgroundColor: "black" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
      </div>
    </div>
  </div>
);

export default card;

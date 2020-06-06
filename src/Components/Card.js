import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <img src={props.imgSource} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body">
        <p className="card-text">
          <a href={props.videoLink} target="_blank" rel="noopener noreferrer">
            {props.videoText}
          </a>
        </p>
      </div>
    </div>
  );
};

export default card;

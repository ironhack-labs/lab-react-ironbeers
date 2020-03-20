import React from "react";
import NewBeerImg from "../public/images/new-beer.png";

const NewBeer = function() {
  return (
    <>
      <div className="card" style={{ width: "24rem" }}>
        <img src={NewBeerImg} className="card-img-top" alt="NewBeerPicture" />
        <div className="card-body">
          <h2 className="card-title" style={{ color: "black" }}>
            New Beer
          </h2>
          <p className="card-text" style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex
            necessitatibus laudantium aliquam assumenda eaque nostrum enim
          </p>
        </div>
      </div>
    </>
  );
};

export default NewBeer;

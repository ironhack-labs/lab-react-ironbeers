import React from "react";
import RandomBeerImg from "../public/images/random-beer.png";

//Cambiamos el nombre del componente App por Home
const RandomBeer = function() {
  return (
    <div className="card" style={{ width: "24rem" }}>
      <img
        src={RandomBeerImg}
        className="card-img-top"
        alt="RandomBeerPicture"
      />
      <div className="card-body">
        <h1 className="card-title" style={{ color: "black" }}>
          Random Beer
        </h1>
        <p className="card-text" style={{ color: "grey" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex
          necessitatibus laudantium aliquam assumenda eaque nostrum enim
        </p>
      </div>
    </div>
  );
};

export default RandomBeer;

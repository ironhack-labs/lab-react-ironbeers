import React from "react";
import beersImage from "../assets/beers.png";
import randomImage from "../assets/random-beer.png";
import addImage from "../assets/beers.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="pageContainer">
        <img src={beersImage} alt="" />
        <h1>
          <Link to="/beers">All Beers</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cum
          minus voluptatem velit praesentium exercitationem fugit autem? Ipsum
          molestias quos placeat provident alias hic vel enim soluta dolore,
          veritatis nulla!
        </p>
      </div>
      <div className="pageContainer">
        <img src={randomImage} alt="" />
        <h1>
          <Link to="/random-beer">Random Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cum
          minus voluptatem velit praesentium exercitationem fugit autem? Ipsum
          molestias quos placeat provident alias hic vel enim soluta dolore,
          veritatis nulla!
        </p>
      </div>
      <div className="pageContainer">
        <img src={addImage} alt="" />
        <h1>
          <Link to="/new-beer">New Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cum
          minus voluptatem velit praesentium exercitationem fugit autem? Ipsum
          molestias quos placeat provident alias hic vel enim soluta dolore,
          veritatis nulla!
        </p>
      </div>
    </div>
  );
}

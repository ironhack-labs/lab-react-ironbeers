import React from "react";
import { useNavigate } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <article
        onClick={() => {
          navigate(`/beers`);
        }}
      >
        <img src={beersImg} alt="beers"></img>
        <div>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.{" "}
          </p>
        </div>
      </article>
      <article
        onClick={() => {
          navigate(`/random-beer`);
        }}
      >
        <img src={randomBeerImg} alt="beers"></img>
        <div>
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.{" "}
          </p>
        </div>
      </article>
      <article
        onClick={() => {
          navigate(`/new-beer`);
        }}
      >
        <img src={newBeerImg} alt="beers"></img>
        <div>
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.{" "}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Homepage;

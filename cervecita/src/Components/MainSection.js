import React from "react";
import { Link } from "react-router-dom";

const Section = props => {
  return (
    <div className="home-section">
      <img src={props.image} alt="All beers" />
      <h2>
        <Link to={props.direction}>{props.title}</Link>
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo non
        aspernatur debitis voluptatibus repellat, aut, fuga repudiandae, omnis
        recusandae nobis quidem placeat id numquam enim aperiam magni iste
        veniam ipsum?
      </p>
    </div>
  );
};

export default Section;

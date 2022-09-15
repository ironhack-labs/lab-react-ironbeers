import React from "react";
import { Link } from "react-router-dom";

const Beers = ({ beers }) => {
  if (!beers) {
    return <p>loading...</p>;
  }
  return (
    <>
      <header>
        <Link to="/">
          <img src={require("../assets/header_home.png")} alt="header"></img>
        </Link>
      </header>
      <div className="beers-container">
        {beers.map((element) => {
          return (
            <div className="beer-presentation" key={element._id}>
              <Link to={`/beers/${element._id}`}>
                <img src={element.image_url} alt="beer" width="100px" />
                <h1>{element.name}</h1>
                <h2>{element.tagline}</h2>
                <p>Created by: {element.contributed_by}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Beers;

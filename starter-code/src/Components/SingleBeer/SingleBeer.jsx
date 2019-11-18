import React from "react";

import Nav from "../Nav/Nav";

import "./SingleBeer.css";
export default function SingleBeer(props) {
  let thisBeer = () => {
    let beers = Object.values(props.allBeers);

    // console.log(beers);
    if (props.randomBeer) {
      //   console.log(props.randomBeer.name);
      return (
        <div className="container">
          <img src={props.randomBeer.image_url} alt="" />
          <h2>{props.randomBeer.name}</h2>
          <p>{props.randomBeer.tagline}</p>
          <p>{props.randomBeer.contributed_by}</p>
        </div>
      );
    } else {
      return beers.map(eachBeer => {
        if (eachBeer._id === props.match.params.id) {
          return (
            <div className="container">
              <img src={eachBeer.image_url} alt="" />
              <h2>{eachBeer.name}</h2>
              <quote>{eachBeer.tagline}</quote>
              <p>{eachBeer.contributed_by}</p>
            </div>
          );
        }
      });
    }
  };
  //   let beer = thisBeer();
  //   console.log(beer);
  return (
    <div>
      <Nav />
      <div>{thisBeer()}</div>
    </div>
  );
}

import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";

function Single(props) {
  // console.log(props.listOfBeers)
  let randomBeer = props.randomBeer;
  let theBeer;
  if (randomBeer) {
    theBeer = props.listOfBeers.find(beer => {
      return beer._id === randomBeer;
    });
  } else {
    theBeer = props.listOfBeers.find(beer => {
      return beer._id === props.match.params.id;
    });
  }

  return (
    <div>
      <HomeHeader />
      <div className="container d-flex flex-column">
        <div>
          <img src={theBeer.image_url} alt={theBeer.name} width="100px" />
        </div>
        <div>
          <h1>{theBeer.name}</h1>
          <h3 className="tagline">{theBeer.tagline}</h3>
          <p>{theBeer.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Single;

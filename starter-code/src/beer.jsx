import React from "react";

export default function Beer(props) {
  let theBeer = props.beers.find(each => {
    return each._id == props.match.params.id;
  });

  return (
    <div className="beerpage">
      <div>
        <div className="beerpage-beer">
          {theBeer && theBeer.image_url && (
            <img src={theBeer.image_url} alt="beer" />
          )}
        </div>
      </div>
      <div className="beername-div">
        <div className="beername-div-info">
          <h1>{theBeer.name}</h1> <br />
          <h2>{theBeer.tagline}</h2>
        </div>
        <div className="attenuation">
          <h1 className="grey">{theBeer.attenuation_level}</h1>
          <p className="bold">{theBeer.first_brewed}</p>
        </div>
      </div>
      <div className="beerpage-ps">
        <div>{theBeer.description}</div>
        <p className="grey">{theBeer.contributed_by}</p>
      </div>
    </div>
  );
}

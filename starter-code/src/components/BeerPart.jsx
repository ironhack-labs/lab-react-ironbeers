import React from "react";

//Here is your beer sir//

function BeerPart({ clbk }) {
  return (
    <div>
   
      <div className="beerPart">
      
        <img className="onebeer-image" src={clbk.image_url} alt="" />
        <h1>{clbk.name}</h1>
        <h1>{clbk.attenuation_level}</h1>
        <h3>{clbk.tagline}</h3>
        <h5>{clbk.first_brewed}</h5>
        <p>{clbk.description}</p>
        <h4>{clbk.contributed_by}</h4>
      </div>
    </div>
  );
}

export default BeerPart;

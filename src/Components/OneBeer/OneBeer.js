import React from 'react';

const OneBeer = ({beer}) => {

      console.log(beer)

      return<div>
            <h1>this is show one</h1>
        <img src={beer.image_url} alt={beer.name} />
          <h1>{beer.name}</h1>
          <h3>{beer.attenuation_level}</h3>
          <h2>{beer.tagline}</h2>
           <p>{beer.first_brewed}</p>
           <p>{beer.description}</p>
           <p>{beer.contributed_by}</p>
      </div>
}

export default OneBeer
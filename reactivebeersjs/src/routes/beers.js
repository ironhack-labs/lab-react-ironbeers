import React from 'react';
import { Link } from 'react-router-dom';

const beers = props => {
  return props.allbeers.map ((beer) => {
    // const id = beer._id;
      return (
      <div>
        <img width='100px' src={beer.image_url} alt=''/>
        <Link to={beer._id} activeStyle={{fontWeight: 'bold', color: 'red' }}>{beer.name}</Link>
        {/* <h3><a href= "/beer/">{beer.name}</a></h3> */}
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
      </div>
     );
  })   
}

export default beers;
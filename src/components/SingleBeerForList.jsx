import React from 'react';
import { Link } from 'react-router-dom';

const SingleBeerForList = (props) => {
  //   console.log(props);
  const beer = props.beer;
  // const creator = beer.contributed_by.split(' ').slice(0, 8).join('');
  //   console.log(creator);
  return (
    <div>
      <Link to={`/beers/${beer._id}`}>
        <img src={beer.image_url} alt={beer.name} />
      </Link>
      <div>
        <Link to={`/beers/${beer._id}`}>
          <h3>{beer.name}</h3>
        </Link>
        <p>
          <em>{beer.tagline}</em>
        </p>
        <p>
          <strong>Creator | {beer.contributed_by}</strong>
        </p>
      </div>
    </div>
  );
};

export default SingleBeerForList;

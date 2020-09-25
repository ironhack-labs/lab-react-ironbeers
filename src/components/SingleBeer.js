import React from 'react';
import { Link } from 'react-router-dom';

function SingleBeer(props) {
  console.log(props);
  return (
    <div>
      <h1>This is a beer {props.match.params.id}</h1>
      <Link to={`/`}>Back home</Link>
    </div>
  );
}

export default SingleBeer;

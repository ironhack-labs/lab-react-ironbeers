import React from 'react';
import { Link } from "react-router-dom";

const randomBeer = () => {
  return (
    <div>
      <Link to='/'>Back</Link>
        <h3>Random Beer</h3>
    </div>
  )
}

export default randomBeer;
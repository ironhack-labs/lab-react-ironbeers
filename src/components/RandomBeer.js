//jshint esversion:9

import {Link} from 'react-router-dom';

export const RandomBeer = (props) => {
  return (
    <div> 
        <nav>
            <Link to="/"> <h3>Home</h3> </Link>
        </nav>
        
        <h1>RandomBeer</h1>
    </div>
  )
}

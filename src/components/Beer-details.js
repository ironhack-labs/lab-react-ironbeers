import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const BeerDetails = ({ match }) => {
  const [beerItem, setBeerItemState] = useState({});
  console.log(match);
  useEffect(() => {
    const fetchOneBeer = async () => {
      const beerItem = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${match.params.beerId}`
      );
      setBeerItemState(beerItem.data);
    };
    fetchOneBeer();
  }, [match.params.beerId]);

  return (
    
    
    <div className="beer-info">
<header>
<ul>
<li><Link to='/'>Home</Link></li>
<Link to='/beers'>Beers</Link>

</ul>
</header>
      <img className="beer-image" src={beerItem.image_url} style={{width:"50px"}}  alt={beerItem.name}></img>
      <div className="beer-text">
        <h3>{beerItem.name}</h3>
        <h4 className="beer-tagline">Tagline: {beerItem.tagline}</h4>
        <h5>First brewed: {beerItem.first_brewed}</h5>
        <h5>Attenuation level: {beerItem.attenuation_level}</h5>
        <p>Description: {beerItem.description}</p>
        <h5>Contributed by: {beerItem.contributed_by}</h5>
      </div>
    </div>
  );
};

export default BeerDetails;

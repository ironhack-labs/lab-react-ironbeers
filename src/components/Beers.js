import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Beers = () => {
    const [beerState, setBeerState] = useState([]);
    const newBeerState = [...beerState];
  
    //load the api data
    useEffect(() => {
      const fetchBeers = async () => {
        const beersData = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setBeerState(beersData.data);
      };
      fetchBeers();
    }, []);


    return (
    <div>
<header>
<ul>
<Link to='/'>Home</Link>
</ul>
</header>
<div>

<h3>Welcome to beers</h3>
</div>
{newBeerState.map((beer) => {
        return (
          <div key={beer._id} className="beers">
            <Link to={`/beers/${beer._id}`} >
                <img src={beer.image_url} alt={beer.name} style={{width:"50px"}}></img>
                  <h3 className="bname">{beer.name}</h3>
                  <h4 className="btagline">{beer.tagline}</h4>
                  <h4 className="bcontributed">{beer.contributed_by}</h4>
            </Link>
          </div>
        );
      })}
</div>
  )
}

export default Beers;
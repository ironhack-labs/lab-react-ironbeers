import React, { useState, useEffect } from 'react';
import NaviBar from './Navbar'
import axios from 'axios';
import BeerCard from './BeerCard';


const AllBeers = () => {
    const initialState = {
        beers: [],
      };
      const [beers, setBeers] = useState(initialState);
    
      const getBeers = () => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((responseFromApi) => {
          setBeers({ beers: responseFromApi.data });
        });
      };
    
      useEffect(() => getBeers());
    
      const beersList = beers.beers.map((beer) => (
        <BeerCard
          key={beer._id}
          id={beer._id} //IT-4
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      ));
    
      return (
        <div>
          <NaviBar />
          <div className="beers-list---wrapper">{beersList}</div>
        </div>
      );
}

export default AllBeers
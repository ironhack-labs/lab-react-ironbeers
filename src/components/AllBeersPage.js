import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import Axios from 'axios';
import BeerCard from './BeerCard';

const AllBeersPage = () => {
  const initialState = {
    beers: [],
  };
  const [state, setState] = useState(initialState);

  const getBeers = () => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setState({ beers: res.data });
    });
  };

  useEffect(() => getBeers());

  const beersList = state.beers.map((beer) => (
    <BeerCard
      key={beer._id}
      image={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}
      contributor={beer.contributed_by}
    />
  ));

  return (
    <div>
      <NavigationBar />
      <div className="beers-list---wrapper">{beersList}</div>
    </div>
  );
};

export default AllBeersPage;

import React, { useEffect } from 'react';
import BeerCard from '../../components/BeerCard/BeerCard';
import axios from 'axios';

function RandomBeer() {
  const initialState = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
    getData: false,
  };
  const [state, setState] = React.useState(initialState);

  const getData = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        setState({
          ...res.data,
          getData: true,
        });
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {!state.getData ? <h1>...Loading</h1> : <BeerCard beer={state} />}
    </div>
  );
}

export default RandomBeer;

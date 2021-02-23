import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleBeer({ beersList }) {
  console.log(beersList);
  const initialState = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  const [state, setState] = React.useState(initialState);
  const { beerId } = useParams();

  useEffect(() => {
    if (beersList.data.length > 1) {
      const beersDetails = beersList.data.find((beer) => beer._id === beerId);
      if (beersDetails) {
        setState({
          image_url: beersDetails.image_url,
          name: beersDetails.name,
          tagline: beersDetails.tagline,
          first_brewed: beersDetails.first_brewed,
          attenuation_level: beersDetails.attenuation_level,
          description: beersDetails.description,
          contributed_by: beersDetails.contributed_by,
        });
      }
    } else {
      setState({
        image_url: beersList.data.image_url,
        name: beersList.data.name,
        tagline: beersList.data.tagline,
        first_brewed: beersList.data.first_brewed,
        attenuation_level: beersList.data.attenuation_level,
        description: beersList.data.description,
        contributed_by: beersList.data.contributed_by,
      });
    }
  }, [beersList.getData]); //No estoy seguro si esto es lo mejor
  return (
    <div>
      <div>
        <img alt={state.name} src={state.image_url} />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h1>{state.name}</h1>
        <p>{state.attenuation_level}</p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h2>{state.tagline}</h2>
        <p>{state.first_brewed}</p>
      </div>
      <p>{state.description}</p>
      <p>{state.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BeerDetails(props) {
  const { beerId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${beerId}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log(e));
  }, [beerId]);

  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.image_url} alt={details.name} />
      <p>{details.tagline}</p>
      <p>{details.first_brewed}</p>
      <p>{details.attenuation_level}</p>
      <p>{details.description}</p>
      <p>Created by: {details.contributed_by}</p>
    </div>
  );
}

export default BeerDetails;

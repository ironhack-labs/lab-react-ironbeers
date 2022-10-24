import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './NavBar'

function BeerDetails() {
  const { beerId } = useParams();

  const [details, setDetails] = useState({});


  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/'+ beerId)
      .then( response => {
        setDetails(response.data);
      })
      .catch(e => console.log("error getting beers from API", e));
  }, []);


  return (
    <div>
     <NavBar/>
      <img src={details.image_url} />
      <h3>Name: {details.name}</h3>
      <p>Tagline: {details.tagline}</p>
      <p>First Brewed: {details.first_brewed} </p>
      <p>Attenuation Level: {details.attenuation_level} </p>
      <p>Description:{details.description} </p>
      <p>Contribubted by: {details.contributed_by}</p>
    </div>
  );
}

export default BeerDetails;
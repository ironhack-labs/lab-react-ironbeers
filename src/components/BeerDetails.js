import Header from "../components/Header" ;
import { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetails() {
  const [beer, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/:beerId")
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  },[]);

  return (
    <div className="Beers">
             <Header />
             
    <div key={beer._id}>
      <img src={beer.image_url} alt={beer.name} style={{ height: '200px' }} />
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p><b>First brewed:</b> {beer.first_brewed}</p>
      <p><b>Attenuation level:</b> {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p><b>Contributed by:</b> {beer.contributed_by}</p>
    </div>
    </div>
  );
}
export default BeerDetails;
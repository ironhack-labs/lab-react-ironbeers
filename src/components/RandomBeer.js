import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';  


function RandomBeer() {

  const [random, setRandom] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log('Random Beer', response.data);
        setRandom(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-7">
        <div>
          <img
            src={random.image_url}
            alt={random.name}
          />
          <h1>{random.name} </h1>
          <div>Tagline: {random.tagline} </div>
          <div>First Brewed: {random.first_brewed} </div>
          <div>Tagline: {random.tagline} </div>
          <div>Attenuation Level: {random.attenuation_level} </div>
          <div>Description: {random.description} </div>
          <div>contributed By: {random.contributed_by} </div>
        </div>
    </div>
)}


export default RandomBeer;
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function RandomBeer() {
    const [beer, setBeer] = useState([]);

    const randomBeerApi= 'https://ih-beers-api2.herokuapp.com/beers/random';
  
    const getRandomBeers = async () => {
      try {
        let response = await axios.get(randomBeerApi);
        console.log(response.data);
        setBeer(response.data);
      }
      catch(err) {
        console.log(err);
    }
   }
  
   useEffect(() => {  
    getRandomBeers();
    }, []);

  return (

    <div>
    {beer && (
  <>     
 <img className='home-navbar' alt= 'beers' src={beer.image_url} />
 <p>Name: {beer.name}</p>
 <p> Tagline: {beer.tagline}</p>
 <p>First Brewed: {beer.first_brewed}</p>
 <p> Attenuation Level: {beer.attenuation_level}</p>
 <p> Description: {beer.description}</p>
 <p>Contributed By: {beer.contributed_by}</p>
    </> 
 )}
</div>

  )
}


export default RandomBeer;
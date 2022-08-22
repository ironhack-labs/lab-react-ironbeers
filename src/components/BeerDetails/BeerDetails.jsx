import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function BeerDetails() {
    const {beerId} = useParams();
    const [beers, setBeers] = useState([]);


    const beerApi= 'https://ih-beers-api2.herokuapp.com/beers';
  
    const getBeers = async () => {
      try {
        let response = await axios.get(beerApi);
        console.log(response.data);
        setBeers(response.data);
      }
      catch(err) {
        console.log(err);
    }
   }
  
   useEffect(() => {  
    getBeers();
    }, []);

    const foundBeer = beers.find((beer) => beer._id === beerId);
    console.log(foundBeer);

  return (
        <div>
            {foundBeer && (
          <>     
         <img className='home-navbar' alt= 'beers' src={foundBeer.image_url} />
         <p>Name: {foundBeer.name}</p>
         <p> Tagline: {foundBeer.tagline}</p>
         <p>First Brewed: {foundBeer.first_brewed}</p>
         <p> Attenuation Level: {foundBeer.attenuation_level}</p>
         <p> Description: {foundBeer.description}</p>
         <p>Contributed By: {foundBeer.contributed_by}</p>
            </> 
         )}
        </div>
   
  )
}

export default BeerDetails;
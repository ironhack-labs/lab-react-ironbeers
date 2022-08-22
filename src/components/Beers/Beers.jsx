import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Beers() {
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

  return (

    <div>
      {beers && beers.map((beer) => {
        return (
          <div key={beer._id} className='card'>
          <Link to={`/beers/${beer._id}`}>
         <img className='home-navbar' alt= 'beers' src={beer.image_url} />
         <p>{beer.name}</p>
         <p>{beer.tagline}</p>
         <p>{beer.contributed_by}</p>
         </Link>
         </div>
        )
      })}
  
    </div>
  )
}

export default Beers;
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SingleBeer() {
  const [beers, setBeers] = useState([]);
  const { id } = useParams();
  
  const getBeers = async () => {
    try {
      let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getBeers();
  }, []);

return (
  <div>  
  {beers.map((beers) => {
    return (
      <div>
      <Link to={`/beers/${id}`} key={beers._id}>
        <img src={beers.image_url} alt="" />
            <h2>{beers.name}</h2>
            <h4>{beers.tagline}</h4>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
      </Link> 
      </div>
    )
  })}
  </div>
)
}

export default SingleBeer
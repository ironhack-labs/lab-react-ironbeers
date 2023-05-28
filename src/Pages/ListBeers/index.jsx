import { useState, useEffect } from 'react';
import axios from 'axios';


    function ListBeers() {
        const [beers, setBeers] = useState([]);
       
        useEffect(() => {
          axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
              console.log('response.data', response.data);
              setBeers(response.data)
            });
        }, [] );


    return (
    <div>
    {beers.map((beers) => (
        <div key={beers._id}>
        <img src={beers.image_url}/>
      <h3>{beers.name}</h3>
      <p>{beers.tagline}</p>
      <p>Contributed by: {beers.contributed_by}</p>
      <a href={`/beers/${beers._id}`}>View Details</a>
      </div>
    ))}
    
</div>

  )
}

export default ListBeers
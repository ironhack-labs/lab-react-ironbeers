import  axios  from 'axios';
import { useEffect, useState } from 'react';
import { NavLink  } from 'react-router-dom';

function Beers() {
  
    const [beers, setbeers] = useState([])

    const baseUrl = 'https://ih-beers-api2.herokuapp.com/beers';
       
    useEffect(() => {
      axios
        .get(baseUrl)
        .then((response) => {
          setbeers(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
  

  return (
    <>
      {beers.map((beer) => {
        return (
          <>
            <img src={beer.image_url}/>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <h3>{beer.contributed_by}</h3>
            <NavLink to={beer._id}>More Details</NavLink>
          </>
        );
      })}
    </>
  );
}

export default Beers;

import  axios  from 'axios';
import { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';

function BeerDetails() {
  
    const {id} = useParams();

    const [details, setDetails] = useState(null)

    const baseUrl = 'https://ih-beers-api2.herokuapp.com/beers';
       
    useEffect(() => {
      axios
        .get(baseUrl + id)
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
  

  return (
    <>
      {beers.map((beer) => {
          console.log(response)
        return (
            <>
            <img src={details.image_url}/>
            <h2>{details.name}</h2>
            <h3>{details.tagline}</h3>
            <h3>{details.first_brewed}</h3>
            <h3>{details.attenuation_level}</h3>
            <h3>{details.description}</h3>
            <h3>{details.contributed_by}</h3>         
          </>
        );
      })}
    </>
  );
}

export default BeerDetails;

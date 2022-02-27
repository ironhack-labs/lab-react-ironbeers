import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function BeerDetails() {
  
  const {id} = useParams();

  const [details, setDetails] = useState(undefined);

  useEffect( () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then( response => {
        setDetails(response.data);
      })
      .catch()
  }, [id]);

  const renderDetails = (details) => {
    return (
      <>
      <img src={details.image_url} alt={details.name} />
        <h2>{details.name}</h2>
        <h3>€{details.tagline}</h3>
        <p>First Brewed:{details.first_brewed}</p>
        <p>{details.attenuation_level}</p>
        <p>{details.description}</p>
        <p>{details.contributed_by}</p>
        
      </>
    );
  }

  return (
    <section className="ApartmentDetails">
      { details ?
        renderDetails(details) :
        <p>loading....</p>
      }
    </section>
  )
}

export default BeerDetails;
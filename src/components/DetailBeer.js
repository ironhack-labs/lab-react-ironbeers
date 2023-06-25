import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function DetailBeer() {

  const { id } = useParams();
  const[detailsOfBeer, setDetailsOfBeer] = useState([]);

  useEffect(() => {
    const fetchDetailsOfBeer = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/beers/${id}`)
        .then(response => {
          setDetailsOfBeer(response.data)
        })
        .catch(e => console.log("failed to fetch the details of beer", e));
    }

    fetchDetailsOfBeer();
  }, [])


  return(
    <div>
      {detailsOfBeer.length === 0 
        ? <p>Loading...</p> 
        : <div> 
            <img src={detailsOfBeer.image_url} alt="img"/>
            <h1>{detailsOfBeer.name}</h1>
            <h2>{detailsOfBeer.tagline}</h2>
            <h2>{detailsOfBeer.first_brewed}</h2>
            <h3>{detailsOfBeer.attenuation_level}</h3>
            <p>{detailsOfBeer.description}</p>  
            <h6>{detailsOfBeer.contributed_by}</h6> 
          </div> 
      }

      <NavLink to="/beers" >Back</NavLink>
    </div>
  )
}

export default DetailBeer;
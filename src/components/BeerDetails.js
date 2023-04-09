import Navbar from '../components/Navbar'
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function BeerDetails() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/${id}`)
      .then((response) => {
        setBeer(response.data);
        console.log(response.data)
      })
      .catch((error) => console.log("Error from data API... ", error));
  }, [id]);
  return (
    <>
    <div>
      <Navbar />
      Beer Details
    </div>
    <h1>Details of Beers</h1>
    {beer ? 
      <div>
        <img src={beer.image_url} alt="beerImg" /> 
        <h1>{beer.name}</h1><br/>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}<br />
          <p>{beer.attenuation_level}</p><br />
          <p>{beer.paragraph}</p><br />
          <p>{beer.contributed_by}</p><br />
          <p>{beer.description}</p>
        </p>
      </div> 
      : "loading......" 
  }
    </>
  )
}
export default BeerDetails;
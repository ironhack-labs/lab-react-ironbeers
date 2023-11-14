import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function BeerDetailsPage() {

    const [deetBeers, setDeetBeers] = useState("");
  const { beerId } = useParams();


  useEffect(() => {
    console.log("UseEffect - Initial Stage");
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setDeetBeers(response.data);
        console.log("Beers: ", deetBeers);
      })
  }, [beerId]);
    return(
        <div>
        <h1>Beer Details</h1>
  
        {!deetBeers && <h3>Loading...</h3>}
  
        {deetBeers && (
          <>
            <img src={deetBeers.image_url} alt={deetBeers.name} />
            <p>{deetBeers.name}</p>
            <p>{deetBeers.tagline}</p>
            <p>{deetBeers.first_brewed}</p>
            <p>{deetBeers.attenuation_level}</p>
            <p>{deetBeers.description}</p>
            <p>{deetBeers.contributed_by}</p>
  
            <Link to="/beers"><button>All Beers</button></Link>
          </>
        )}
  
      </div>




    )
}

export default BeerDetailsPage;

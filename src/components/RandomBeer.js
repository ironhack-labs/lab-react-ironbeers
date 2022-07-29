import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

function RandomBeer() {

  const [details, setDetails] = useState([]);


  useEffect(() => {
    axios
    .get(process.env.REACT_APP_API_BASE_URL + "/beers/random" )
    .then((response) => {
      setDetails(response.data)
      // console.log(response)

    })
    .catch((e) => {
      // console.log(e);
    });
}, []);


  return (
    <div >
         <header>
      <Link  to="/">Home</Link> <br/>
      </header>
      <h1>One Beer</h1>
     
          <div key={details._id} className="BeersList">
            <img src={details.image_url} /> <br />
            <h1>{details.name}</h1>
            <p>{details.tagline}</p>
            <p>{details.first_brewed}</p>
            <p>{details.attenuation_level}</p>
            <p>{details.description}</p>
            <p>{details.contributed_by}</p>
          </div>
    </div>
  );
}

export default RandomBeer;
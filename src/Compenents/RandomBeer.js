import { useState,useEffect } from "react";
import axios from "axios";

const RandomBeer = () => {
const [randomBeer,setRandomBeer] = useState();
const [error, setError] = useState(null);

useEffect(()=> {
axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
.then(response => setRandomBeer(response.data))
.catch((err) => {
    console.error(err);
    setError("beer not found");
});

},[])


return (
    <div> 
        {error && <div>{error} </div>}
        <div> 
        {!randomBeer ? <p> Loading...</p> : (

            <>
          <div key={randomBeer._id} className="image-container">
            <img
              className="single-beer-img"
              src={randomBeer.image_url}
              alt="the-beer"
            />
          </div>

          <div className="main-info">
            <div className="featured">
              <h1> {randomBeer.name} </h1>
              <p> {randomBeer.tagline}</p>
            </div>
            <div className="date">
              <h4>{randomBeer.attenuation_level}</h4>
              <p>
                <b>{randomBeer.first_brewed}</b>
              </p>
            </div>
          </div>
          <div className="beer-description">
            <p> {randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
          </div>
        </>
        )} 
        
</div>
    </div>
)

}

export default RandomBeer;
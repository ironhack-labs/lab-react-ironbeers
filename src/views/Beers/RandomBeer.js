import { React, useState, useEffect } from "react";
import { randomBeer } from "../../services/BeersService";
import './Beer.css';


const RandomBeer = () => {
  const [ranBeer, setRanBeer] = useState(null)

  useEffect(()=> {
    randomBeer()
      .then(response => setRanBeer(response))
  }, [])
    // console.log("birrita aleatoria", ranBeer)
    
  return ( 
    <>
     { ranBeer ?
      <div>
        <div>
          <img className="detail-img" src={ranBeer.image_url} alt={ranBeer.name} />
        </div>
        <h2>{ranBeer.name}</h2>
        <h4>{ranBeer.tagline}</h4>
        <p>{ranBeer.first_brewed}</p>
        <p>{ranBeer.attenuation_level}</p>
        <p>{ranBeer.description}</p>
        <p>{ranBeer.contributed_by}</p>
      </div>
        : 
        <p>Loading...</p>
      }
    </>
   );
}
 
export default RandomBeer;
import axios                 from "axios"; 
import React, 
    { useState, useEffect }  from "react";    
const urlRandomBeer = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage({ setShowNav }) {
    const [randomBeer, setRandomBeer] = useState([]);
    setShowNav(true);
    useEffect(() => {                                
        axios
          .get(urlRandomBeer)
          .then((response) => {
            console.log('response data:', response.data);
            setRandomBeer(response.data)
          }); 
      }, []);
    console.log("Random beer: ", randomBeer)
    return (
        randomBeer &&  
        <div className="card">
            <img 
                className="card-img-top" 
                src={ randomBeer.image_url } 
                alt={ randomBeer.name }
            />
            <div className="card-body">
                <h5 className="card-title">{ randomBeer.name }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ randomBeer.tagline }</h6>
                <h6 className="card-subtitle mb-2 text-muted">{ randomBeer.first_brewed }</h6>
                <h6 className="card-subtitle mb-2 text-muted">{ randomBeer.attenuation_level }</h6>
                <p className="card-text">{ randomBeer.description }</p>
                <footer className="blockquote-footer">{ randomBeer.contributed_by }</footer>
            </div>
        </div>
    )  
}

export default RandomBeerPage;
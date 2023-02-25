import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const imgURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"


function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState([])

    const { random } = useParams()

    useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then (response => {
    console.log(response.data)
    setRandomBeer(response.data)
    })
    },[])
  
    
    return ( 
        <div>
        <header>
        <Link to="/"> <img src={imgURL} alt="header" style={{width: "100vw"}} /></Link>
       </header>
       <div key={randomBeer._id} className="single-beer">
          <img src={randomBeer.image_url} alt="" style={{height: "30vh"}} className="beer-picture"/>
          <div className="single-beer-description">
          <div className="beer-boxes">
          <div className="box-left">
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          </div>
          <div className="box-right">
          <p>{randomBeer.attenuation_level}</p>
          <h6>{randomBeer.first_brewed}</h6>
          </div>
          </div>
          <p>{randomBeer.description}</p>
          <h6>{randomBeer.contributed_by}</h6>
          </div>
      </div>
       </div>
     );
}

export default RandomBeerPage;
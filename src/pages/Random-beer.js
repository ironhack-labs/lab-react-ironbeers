import axios from "axios"
import { useState, useEffect } from "react";

function RandomBeer({beers}) {
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            setRandomBeer(response.data)
        })
    },[])

    // let randomBeer = beers[Math.floor(Math.random()*beers.length)]
    // console.log("THIS IS THE RANDOM BEER:", randomBeer)

    return ( 
    
        <div>
            <img style={{height:"200px"}} src={randomBeer.image_url} alt="alta birra"/>
                <h3>{randomBeer.name}</h3>
                <h3>{randomBeer.attenuation_level}</h3>
                <h4>{randomBeer.tagline}</h4>
                <h4>{randomBeer.first_brewed}</h4>
                <p>{randomBeer.description}</p>
                <h5>{randomBeer.contributed_by}</h5> 

        </div>
    );
}

export default RandomBeer;
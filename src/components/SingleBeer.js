import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SingleBeer(){
    const [randomBeer, setRandomBeer] = useState(undefined)

    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers/random"
    
    useEffect(() =>{
        axios.get(baseUrl)
            .then((e) => {
                console.log(e.data);
                setRandomBeer(e.data)
            })
            .catch((e) =>  console.log(e))
    })
    

    if(randomBeer === undefined){
        return <h1>Loading...</h1>
    } else {
    return(
    <>
        <div>  
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <div key={randomBeer._id}>
                <h1>{randomBeer.name} {randomBeer.attenuation_level}</h1>
                <h3>{randomBeer.tagline}{randomBeer.first_brewed} </h3>
                <p>{randomBeer.description}</p>
                <em>{randomBeer.contributed_by}</em>
            </div>
            <Link to="/">Back</Link>
        </div>
    </>
    )
    }
}

export default SingleBeer
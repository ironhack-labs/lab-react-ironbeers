import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function RandomBeer(){

    const [randomBeer, setRandomBeer] = useState({})
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/random`)
            .then((response) => {
                setRandomBeer(response.data)
            })
            .catch(e => console.log(e))
    },[])


    return (
            <>      
                    <div className="beerContainer" key={randomBeer._id}>
                    {randomBeer.image_url 
                        ? <div><img src={randomBeer.image_url} alt="beerImg" />
                        <h3>Beer Name: {randomBeer.name}</h3>
                    <h3> {randomBeer.tagline}</h3>
                    <h3> {randomBeer.first_brewed}</h3>
                    <h4> {randomBeer.attenuation_level}</h4>
                    <p> {randomBeer.description}</p>
                    <h3>Created by: {randomBeer.contributed_by}</h3>
                        
                    <Link to="/">Back</Link>
                    </div>
                        : <h3>Loading a Random Beer For You...</h3>}
                    </div>
            </>
        )
}

export default RandomBeer
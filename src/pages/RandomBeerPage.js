import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function RandomBeerPage() {

    const [beer, setBeer] = useState([])

    useEffect(() => 
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response => {
        console.log(response.data)
        setBeer(response.data)
    }
    ), [])



    return (
        <div>
        <Link to='/'>Header</Link>  
            
            <div>
                <img src={beer.image_url} alt="random beer"></img>
                <h2>{beer.name}</h2> <p>{beer.attenuation_level}</p>
                <h4>{beer.tagline}</h4> <p>{beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
            
        </div>

    )
}

export default RandomBeerPage;
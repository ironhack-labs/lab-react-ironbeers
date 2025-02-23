
import { useState, useEffect } from 'react'
import axios from 'axios'

function RandomBeersPage() {

    const [beer, setBeer] = useState(null)

    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((oneBeer) => {
            setBeer(oneBeer.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {beer && (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} height='205'/>
                        <div>
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                        </div>
                        <div>
                            <h2>{beer.attenuation_level}</h2>
                            <h4>{beer.first_brewed}</h4>
                        </div>
                        <p>{beer.description}</p>
                        <h6>{beer.contributed_by}</h6>
                    </div>
                )
            }
        </div>
    )
}

export default RandomBeersPage;

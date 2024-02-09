import { useState, useEffect } from "react"
import axios from 'axios'


function RandomBeersPage() {
    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((beerDetails)=>{
            console.log(beerDetails.data)
            setBeerDetails(beerDetails.data)
        })
    }, [])

    return(
        <div>
            {!beerDetails && <p>...loading</p>}
            {beerDetails && (
                <div className="beer-wrapper">
                            <div className="img-wrapper">
                        <img src={beerDetails.image_url} alt={beerDetails.name} height={200} />

                            </div>
                        <div className="beer-info">
                        <h2>{beerDetails.name}</h2>
                        <p>{beerDetails.tagline}</p>
                        <p>{beerDetails.first_brewed}</p>
                        <p>{beerDetails.attenuation_level}</p>
                        <p>{beerDetails.description}</p>
                        <p>{beerDetails.contributed_by}</p>

                        </div>
                        </div>
            )}
        </div>
    )
}

export default RandomBeersPage;

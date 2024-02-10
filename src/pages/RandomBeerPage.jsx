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
            {!beerDetails && <div className="loading"><p>...loading</p></div>}
            {beerDetails && (
                <div className="beer-details-wrapper">
                            <div className="img-details-wrapper">
                        <img src={beerDetails.image_url} alt={beerDetails.name} height={300} />

                            </div>
                        <div className="beer-details-info">
                        <h2 className="beer-name">{beerDetails.name}</h2>
                        <span className="top-right-info">
                        <p className="beer-level">{beerDetails.attenuation_level}</p>
                        <p className="beer-brewed">{beerDetails.first_brewed}</p>
                        </span>
                        <span className="beer-tagline">{beerDetails.tagline}</span>
                        <p className="beer-desc">{beerDetails.description}</p>
                        <p className="beer-contributed">{beerDetails.contributed_by}</p>

                        </div>
                        </div>
            )}
        </div>
    )
}

export default RandomBeersPage;

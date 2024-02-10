import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function BeerDetailsPage() {
    const {beerId} = useParams()
    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((beerDetails)=>{
            console.log(beerDetails.data)
            setBeerDetails(beerDetails.data)
        })
    }, [beerId])

    return(
        <div id="BeerDetailsPage">
            {!beerDetails && <div className="loading"><p>...loading</p></div>}
            {beerDetails && (
                <div className="beer-details-wrapper">
                            <div className="img-details-wrapper">
                        <img src={beerDetails.image_url} alt={beerDetails.name} height={300} />

                            </div>
                        <div className="beer-details-info">
                        <span className="beer-name">{beerDetails.name}</span>
                        <p className="beer-tagline">{beerDetails.tagline}</p>
                        <aside className="top-right-info">
                        <p className="beer-level">{beerDetails.attenuation_level}</p>
                        <p className="beer-brewed">{beerDetails.first_brewed}</p>
                        </aside>
                        <p className="beer-desc">{beerDetails.description}</p>
                        <p className="beer-contributed">{beerDetails.contributed_by}</p>

                        </div>
                        </div>
            )}
        </div>
    )
}

export default BeerDetailsPage;

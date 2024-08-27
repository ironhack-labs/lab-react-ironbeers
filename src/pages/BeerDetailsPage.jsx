import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BeerDetailsPage() {
    let { beerId } = useParams()
    const [ beer, setBeer ] = useState(null)

    async function getBeer() {
        try {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            if (response.ok) {
                const data = await response.json()
                setBeer(data)
            }
        } catch (err) {
            console.log('Error loading beer: ' + err)
        }
    }

    useEffect(()=>{getBeer()}, [beerId])

    return (
        <div>
            {beer ? (
                <div>
                    <img src={beer.image_url} alt={beer.name} width="500"/>
                    <h2>{beer.name} {beer.attenuation_level}</h2>
                    <p>{beer.tagline} {beer.first_brewed}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default BeerDetailsPage;

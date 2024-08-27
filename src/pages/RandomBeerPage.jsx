import { useState, useEffect } from "react";

function RandomBeersPage() {
    const [ randomBeer, setRandomBeer ] = useState(null)

    async function getRandomBeer() {
        try {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            if (response.ok) {
                const data = await response.json()
                setRandomBeer(data)
            }
        } catch (err) {
            console.log('Error loading beer: ' + err)
        }
    }

    useEffect(()=>{getRandomBeer()}, [])

    return (
        <div>
            {randomBeer ? (
                <div>
                    <img src={randomBeer.image_url} alt={randomBeer.name} width="500"/>
                    <h2>{randomBeer.name} {randomBeer.attenuation_level}</h2>
                    <p>{randomBeer.tagline} {randomBeer.first_brewed}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default RandomBeersPage;

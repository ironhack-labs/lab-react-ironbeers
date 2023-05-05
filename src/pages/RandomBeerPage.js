import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import axios from "axios"
import NavBar from "../components/NavBar"

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => {
            setRandomBeer(response.data)
        })
    }, [])

    if (!randomBeer) return <p>Page is loading...</p>

    return (
        <div>
            <NavBar />

            <div className="single-beer">
                <img src={randomBeer.image_url} alt="Beer" width={200}></img>
                <div className="single-beer-info">
                    <div className="single-beer-display-line">
                        <h1>{randomBeer.name}</h1>
                        <h1 className="grey-text">{randomBeer.attenuation_level}</h1>
                    </div>
                    <div className="single-beer-display-line">
                        <h3 className="grey-text">{randomBeer.tagline}</h3>
                        <h3>{randomBeer.first_brewed}</h3>
                    </div>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default RandomBeerPage
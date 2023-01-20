import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function RandomBeers() {
    const [randomBeer, setRandomBeer] = useState("")
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/random")
            .then((res) => setRandomBeer(res.data))
    }, [])

    const renderDetails = () => {
        return (
            <div>
                {randomBeer.image_url
                    ? <img src={randomBeer.image_url} alt={randomBeer.name} />
                    : <img src="https://via.placeholder.com/150"
                        alt={randomBeer.name} />}<br />
                {randomBeer.name}<br />
                {randomBeer.tagline} <br />
                {randomBeer.first_brewed} <br />
                {randomBeer.attenuation_level}
                {randomBeer.description}<br />
                {randomBeer.contributed_by}<br />
            </div>
        )
    }
    return (

        <>

            {randomBeer && renderDetails()}
            <Link to="/beers">Back</Link>

        </>
    )
}
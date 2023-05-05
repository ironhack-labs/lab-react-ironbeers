import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import axios from "axios"
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"

function SingleBeerPage() {
    const [singleBeer, setSingleBeer] = useState(null)

    const {beerId} = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            setSingleBeer(response.data)
        })
    }, [beerId])

    if (!singleBeer) return <p>Page is loading...</p>

    return (
        <div>
            <NavBar />
            <br /><br />
            <div className="single-beer">
                <img src={singleBeer.image_url} alt="Beer" width={200}></img>
                <div className="single-beer-info">
                    <div className="single-beer-display-line">
                        <h1>{singleBeer.name}</h1>
                        <h1 className="grey-text">{singleBeer.attenuation_level}</h1>
                    </div>
                    <div className="single-beer-display-line">
                        <h3 className="grey-text">{singleBeer.tagline}</h3>
                        <h3>{singleBeer.first_brewed}</h3>
                    </div>
                    <p className="text-justify">{singleBeer.description}</p>
                    <p>{singleBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBeerPage
import { useEffect, useState } from "react"
import axios from "axios"
import { Container } from "react-bootstrap"

function RandomBeerPage() {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeerDetails()
    }, [])

    const loadBeerDetails = () => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => setBeer(response.data))
            .catch(err => console.log(err))
    }

    return (

        <Container>

            {

                beer ? (
                    <>
                        <img
                            className="beersPictures mt-5 mb-5"
                            src={beer.image_url}
                            alt={beer.name}
                        />

                        <h1 className="mb-4">{beer.name}</h1>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.first_brewed}</p>
                        <h4>{beer.tagline}</h4>
                        <p>{beer.description}</p>
                        <p><strong>Created by:</strong> {beer.contributed_by}</p>
                    </>
                ) : (
                    <p>'Loading...'</p>
                )}

        </Container>

    )
}

export default RandomBeerPage

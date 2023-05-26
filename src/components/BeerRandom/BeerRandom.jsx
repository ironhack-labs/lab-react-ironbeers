import { useState, useEffect } from "react";
import { Card } from "react-bootstrap"
import axios from "axios";

const BeerRandom = () => {
    const [beerRandom, setBeerRandom] = useState(null)

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                setBeerRandom(response.data)
            }, [])
    })

    return (
        <Card style={{ width: '50rem' }}>
            <Card.Img style={{ width: "10%" }} variant="top" src={beerRandom?.image_url} />
            <Card.Body>
                <Card.Title>{beerRandom?.name}</Card.Title> <p>{beerRandom?.attenuation_level}</p>
                <Card.Subtitle className="mb-2 text-muted">{beerRandom?.tagline}</Card.Subtitle><p>{beerRandom?.first_brewed}</p>
                <Card.Text>
                    {beerRandom?.description}
                </Card.Text>
                <h6>{beerRandom?.contributed_by}</h6>
            </Card.Body>
        </Card>
    )
}

export default BeerRandom;
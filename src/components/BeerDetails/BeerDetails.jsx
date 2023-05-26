import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap"
import axios from "axios";

const BeerDetails = () => {
    const { beerId } = useParams()
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                setBeer(response.data)
            }, [beerId])
    })

    return (
        <Card style={{ width: '50rem' }}>
            <Card.Img style={{ width: "10%" }} variant="top" src={beer?.image_url} />
            <Card.Body>
                <Card.Title>{beer?.name}</Card.Title> <p>{beer?.attenuation_level}</p>
                <Card.Subtitle className="mb-2 text-muted">{beer?.tagline}</Card.Subtitle><p>{beer?.first_brewed}</p>
                <Card.Text>
                    {beer?.description}
                </Card.Text>
                <h6>{beer?.contributed_by}</h6>
            </Card.Body>
        </Card>
    )
}

export default BeerDetails;
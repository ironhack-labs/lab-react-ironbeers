import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage() {
    const [fetching, setFetching] = useState(true);
    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setRandomBeer(response.data);
            setFetching(false);
        });
    }, []);

    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={randomBeer.image_url} />
                <Card.Title>{randomBeer.name}</Card.Title>
                <Card.Text>
                    {randomBeer.tagline}
                </Card.Text>
                <Card.Text>
                    <strong>Created by: </strong>{randomBeer.name}
                </Card.Text>
                <Card.Text>
                    {randomBeer.tagline}
                </Card.Text>
                <Card.Text>
                    {randomBeer.first_brewed}
                </Card.Text>
                <Card.Text>
                    {randomBeer.attenuation_level}
                </Card.Text>
                <Card.Text>
                    {randomBeer.description}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default RandomBeerPage;

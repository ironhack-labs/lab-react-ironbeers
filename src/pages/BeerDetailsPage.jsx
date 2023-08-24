import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function BeerDetailsPage() {
    const [fetching, setFetching] = useState(true);
    const [beer, setBeer] = useState({});

    const { beerId } = useParams();
    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setBeer(response.data);
        }).catch(
            console.log('error')
        );
    }, []);
    return (
        <div className="col-md-5 mb-5" key={beer._id}>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={beer.image_url} />
                    <Card.Title>{beer.name}</Card.Title>
                    <Card.Text>
                        {beer.tagline}
                    </Card.Text>
                    <Card.Text>
                        <strong>Created by: </strong>{beer.name}
                    </Card.Text>
                    <Card.Text>
                        {beer.tagline}
                    </Card.Text>
                    <Card.Text>
                        {beer.first_brewed}
                    </Card.Text>
                    <Card.Text>
                        {beer.attenuation_level}
                    </Card.Text>
                    <Card.Text>
                        {beer.description}
                    </Card.Text>
                    <Card.Text>
                        {beer.contributed_by}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}


export default BeerDetailsPage;
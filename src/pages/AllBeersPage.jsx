import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
    const [fetching, setFetching] = useState(true);
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setBeers(response.data);
            setFetching(false);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {beers.map((beer) => (
                    <div className="col-md-2 mb-2" key={beer._id}>
                        <Card>
                            <Link to={`/beers/${beer._id}`}>
                                <Card.Img variant="top" src={beer.image_url} />
                            </Link>

                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                                <Card.Text>
                                    {beer.tagline}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Created by: </strong>{beer.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default AllBeersPage;

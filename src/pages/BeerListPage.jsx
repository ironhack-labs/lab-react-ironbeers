import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BeersAPI from '../services/beer.service';

const BeerList = () => {
    const [beers, setBeers] = useState(undefined);

    useEffect(() => {
        BeersAPI.getAllBeers().then((beers) => {
            setBeers(beers);
        });
    }, []);

    return (
        <>{
            beers?.map((beer) => {
                return (
                    <Card key={beer._id} style={{ width: "100%" }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/beerDetail/${beer._id}`}>
                            <Row style={{ alignItems: 'center' }}>
                                <Col xs='2' lg='2' className="p-4">
                                    <Card.Img
                                        variant='top'
                                        src={beer.image_url}
                                        alt={beer.name}
                                    />
                                </Col>
                                <Col xs='10' lg='10'>
                                    <Card.Body>
                                        <Card.Title>{beer.name}</Card.Title>
                                        <Card.Title>{beer.tagline}</Card.Title>
                                        <Card.Text>
                                            <b>Created by:</b> {beer.contributed_by}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Link>
                    </Card>
                )
            })
        }
        </>
    );
}

export default BeerList;
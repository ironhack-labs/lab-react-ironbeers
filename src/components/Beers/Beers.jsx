import Header from "../Header/Header"
import beersService from "../services/beers.services"
import { useState, useEffect } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import './Beers.css'





const Beers = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        loadBeers();
    }, []);

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <Header />
            <Container>
                <h1>Listado de cervezas</h1>
                <Row>
                    {beers.map((beer) => (
                        <Col md={3} key={beer._id}>
                            <Card className="space">
                                <Card.Img variant="top" src={beer.image_url} className="fit" />
                                <Card.Body>
                                    <Card.Title>{beer.name}</Card.Title>
                                    <Card.Text>{beer.tagline}</Card.Text>
                                    <Button variant="primary" href={`/beers/${beer._id}`}>
                                        Detalles
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Beers;



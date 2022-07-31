import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";

function RandomBeer() {
    const [random, setRandom] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL + "/random")
            .then(response => {
                setRandom(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const renderRandom = () => {
        return (
            <Card className="p-3">
                {random.image_url !== "" && random.image_url !== undefined
                    ? <Card.Img className='img-fluid mx-auto d-block' style={{ objectFit: 'contain', height: '300px' }} variant="top" src={random.image_url} alt="single beer" />
                    : <Card.Img className='img-fluid mx-auto d-block' style={{ objectFit: 'contain', height: '300px' }} variant="top" src="https://images.punkapi.com/v2/keg.png" alt="beer" />
                }
                <Card.Body className="p-3">
                    <Card.Title><h1><strong>{random.name}</strong></h1></Card.Title>
                    <Card.Text>{random.tagline}</Card.Text>
                    <Card.Text><strong>First Brewed: </strong> {random.first_brewed}</Card.Text>
                    <Card.Text><strong>Attenuation Level: </strong>{random.attenuation_level}</Card.Text>
                    <Card.Text><strong>Description: </strong>{random.description}</Card.Text>
                    <Card.Text><strong>Created by: </strong>{random.contributed_by}</Card.Text>
                </Card.Body>
            </Card>
        );
    }

    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    {random === []
                        ? <p>loading...</p>
                        : renderRandom()
                    }
                </Row>

            </Container>
        </>
    );
}

export default RandomBeer;
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function BeerDetails() {

    const { beerId } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL + "/" + beerId)
            .then(response => {
                setDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [beerId]);

    const renderDetails = () => {
        return (
            <Card className="p-3">
                {details.image_url !== "" && details.image_url !== undefined
                    ? <Card.Img className='img-fluid mx-auto d-block' style={{ objectFit: 'contain', height: '300px' }} variant="top" src={details.image_url} alt="single beer" />
                    : <Card.Img className='img-fluid mx-auto d-block' style={{ objectFit: 'contain', height: '300px' }} variant="top" src="https://images.punkapi.com/v2/keg.png" alt="beer" />
                }
                <Card.Body className="p-3">
                    <Card.Title><h1><strong>{details.name}</strong></h1></Card.Title>
                    <Card.Text>{details.tagline}</Card.Text>
                    <Card.Text><strong>First Brewed: </strong> {details.first_brewed}</Card.Text>
                    <Card.Text><strong>Attenuation Level: </strong>{details.attenuation_level}</Card.Text>
                    <Card.Text><strong>Description: </strong>{details.description}</Card.Text>
                    <Card.Text><strong>Created by: </strong>{details.contributed_by}</Card.Text>
                </Card.Body>
                <NavLink to="/beers">Back to Beers</NavLink>
            </Card>
        );
    }
    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    {details === []
                        ? <p>loading...</p>
                        : renderDetails()
                    }
                </Row>

            </Container>

        </>
    );
}

export default BeerDetails;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";

function RandomBeer() {

    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/beers/random')
            .then((response) => {
                setDetails(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])



    const renderDetails = () => {
        return (
            <>
                <Navbar />

                <Container >
                    <Row>
                        <Col>
                            <Image src={details.image_url} style={{ maxHeight: '30rem', marginTop: '5rem', marginBottom: '5rem' }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col><h2 style={{ fontSize: '3rem', margin: '0' }}>{details.name}</h2></Col>
                        <Col> <p style={{ fontSize: '3rem', color: 'grey', margin: '0' }}>{details.attenuation_level}</p></Col>
                    </Row>
                    <Row style={{ marginBottom: '2rem' }}>
                        <Col><h5 style={{ fontSize: '2rem', color: 'grey', margin: '0' }}>{details.tagline}</h5></Col>
                        <Col><p style={{ fontSize: '1.5rem', margin: '0' }}><strong>{details.first_brewed}</strong></p></Col>
                    </Row>
                    <Row>
                        <Col><p style={{ fontSize: '1.3rem' }}>{details.description}</p></Col>
                    </Row>
                    <Row>
                        <Col>   <p><strong>Created by:</strong> {details.contributed_by}</p></Col>
                    </Row>
                </Container>
            </>
        )
    }


    return (
        <>
            {details === null
                ? <Spinner animation="border" />
                : renderDetails()
            }
        </>
    );



}

export default RandomBeer; 
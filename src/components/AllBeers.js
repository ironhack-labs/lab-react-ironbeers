import { Col, Container, Form, Image, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

function AllBeers(props) {

    const [search, setSearch] = useState("");


    const handleSearch = (event) => {
        setSearch(event)

        props.search(() => {
            const filterResult = props.copy.filter(e => {
                return e.name.toLowerCase().includes(event.toLowerCase())
            })
            return filterResult;
        })
    }


    return (
        <>
            <Navbar />

            <Container>
                <Form style={{ margin: '3rem', textAlign: 'left' }}>
                    <Form.Group>
                        <Form.Label style={{ fontSize: '1.5rem' }}>Search</Form.Label>
                        <Form.Control value={search} type="text" onChange={(e) => handleSearch(e.target.value)}></Form.Control>
                    </Form.Group>
                </Form>
            </Container>


            {props.data.map(el => {
                return (
                    <Container key={el._id}>
                        <Row style={{ borderBottom: '1px solid' }}>
                            <Col md>
                                <Image src={el.image_url} style={{ maxHeight: '15rem', marginTop: '2.5rem', marginBottom: '2.5rem' }} />
                            </Col>

                            <Col md style={{ marginTop: '6rem', textAlign: 'left' }}>
                                <Link to={`/beers/${el._id}`}>
                                    <h2 style={{ marginBottom: '0.5rem' }}>{el.name}</h2>
                                </Link>
                                <h5 style={{ color: 'grey' }}>{el.tagline}</h5>
                                <p><strong>Created by:</strong> {el.contributed_by}</p>
                            </Col>
                        </Row>
                    </Container>
                )
            })}

        </>
    )
}

export default AllBeers; 
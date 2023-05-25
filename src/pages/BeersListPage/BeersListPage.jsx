import './../../components/App.css'
import { Container, Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Navbar from '../../components/NavBar/NavBar';

const BeerListPage = ({ renderBeers }) => {

    return (
        <>
            <Navbar />

            <Container>

                {
                    renderBeers.map(beer => {
                        return (
                            <Card key={beer._id} className="mb-3">
                                <Row>
                                    <Col md={{ span: 2 }}>
                                        <Link to={`/${beer._id}`}>
                                            <Card.Img src={beer.image_url} style={{ width: '140px', margin: '20px', height: '50vh' }} />
                                        </Link>
                                    </Col>
                                    <Col md={{ span: 7 }}>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '3em', marginBottom: '30px' }}>{beer.name}</Card.Title>
                                            <Card.Subtitle style={{ fontSize: '2em', marginBottom: '30px' }} className="text-muted">{beer.tagline}</Card.Subtitle>
                                            <Card.Text style={{ fontSize: '1.5em' }}> <strong> Created by: </strong>{beer.contributed_by} </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>


                            </Card>
                        )
                    })
                }
            </Container >
        </>
    )
}

export default BeerListPage
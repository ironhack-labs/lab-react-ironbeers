import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import BeersAxios from '../services/beerAxios';
import { useParams } from 'react-router-dom';

const SingleBeer = () => {
    const { beerid } = useParams();
    const beerAxios = new BeersAxios();
    const [beer, setBeers] = useState({})

    useEffect(() => {
        beerAxios
            .getOneBeerById(beerid)
            .then((beer) => {
                setBeers(beer)
                console.log(beer);
            })
            .catch(e => console.log(e))
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <h1>{beer.name}</h1>

                    <Card key={beer._id} style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src={beer.image_url} />
                        <Card.Body>
                            <Card.Title>{beer.name}</Card.Title>
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
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link className='link-react' to='/beers'>All Beers</Link>
                                </Nav.Link>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>


        </>
    )

}

export default SingleBeer;


import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Filter from './Filter';
import NavBar from './NavBar';


function BeersList() {

    const [beersList, setBeersList] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL)
            .then(response => {
                setBeersList(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL + `/search?q=${query}`)
            .then(response => {
                setBeersList(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [query]);

    const renderBeers = () => {
        const result = beersList.map(element => {
            return (
             
                <Col key={element._id} md={4}>
                    <Card  className='p-3'>
                        {element.image_url !== "" && element.image_url !== undefined
                            ? <Card.Img className='img-fluid mx-auto d-block' style={{ objectFit: 'contain', height: '200px' }} variant="top" src={element.image_url} alt="beers" />
                            : <Card.Img className='img-fluid mx-auto d-block' style={{ objectFit: 'contain', height: '200px' }}  variant="top" src="https://images.punkapi.com/v2/keg.png" alt="beer" />
                        }
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>{element.tagline}</Card.Text>
                            <Card.Text>Created by: {element.contributed_by}</Card.Text>
                            <NavLink to={`/beers/${element._id}`}>More Details</NavLink>

                        </Card.Body>

                    </Card>
                </Col>
               
            );
        });
        return result;
    }


    return (
        <>
            <NavBar />
            <Filter query={query} setQuery={setQuery}/>
            <div className='album py-5 bg-light'>
                <Container>
                    <Row>
                        {beersList === []
                            ? <Card.Text>loading...</Card.Text>
                            : renderBeers()
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default BeersList;
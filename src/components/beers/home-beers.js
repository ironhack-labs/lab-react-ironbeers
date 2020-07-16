import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { CardColumns } from 'react-bootstrap';


const HomePage = () => {
    return (

        <CardColumns>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/11/cf/34/ea/bottled-beer-range.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link>     <Link to='/beers'>All Beers</Link></Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/11/cf/34/ea/bottled-beer-range.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                    <Link to='/newbeer'>New Beer</Link>
                </Card.Body>
            </Card>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/11/cf/34/ea/bottled-beer-range.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                    <Link to='/randombeer'>Random Beer</Link>
                </Card.Body>
            </Card>
        </CardColumns>

    );
};

export default HomePage;
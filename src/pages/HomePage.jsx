import { Card } from 'react-bootstrap';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Card style={{ width: "100%" }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/beersList'>
                    <Card.Img
                        variant='top'
                        src={beersImage}
                        alt="All Beers"
                    />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate pretium laoreet. Curabitur sit amet est elit. Pellentesque neque nisi, pellentesque in metus commodo, tincidunt blandit leo. Quisque ac convallis ligula. Donec et suscipit felis. Donec facilisis tortor eu iaculis venenatis. Fusce luctus lacus a consectetur eleifend. Curabitur ac bibendum libero, id aliquet nisi. Nullam quis lacus vitae lacus luctus pharetra eget ac magna. Pellentesque diam urna, egestas sit amet dapibus eget, dignissim sit amet ante.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "100%" }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/randomBeer'>
                    <Card.Img
                        variant='top'
                        src={randomBeerImage}
                        alt="Random Beer"
                    />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate pretium laoreet. Curabitur sit amet est elit. Pellentesque neque nisi, pellentesque in metus commodo, tincidunt blandit leo. Quisque ac convallis ligula. Donec et suscipit felis. Donec facilisis tortor eu iaculis venenatis. Fusce luctus lacus a consectetur eleifend. Curabitur ac bibendum libero, id aliquet nisi. Nullam quis lacus vitae lacus luctus pharetra eget ac magna. Pellentesque diam urna, egestas sit amet dapibus eget, dignissim sit amet ante.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "100%" }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/newBeer'>
                    <Card.Img
                        variant='top'
                        src={newBeerImage}
                        alt="New Beer"
                    />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate pretium laoreet. Curabitur sit amet est elit. Pellentesque neque nisi, pellentesque in metus commodo, tincidunt blandit leo. Quisque ac convallis ligula. Donec et suscipit felis. Donec facilisis tortor eu iaculis venenatis. Fusce luctus lacus a consectetur eleifend. Curabitur ac bibendum libero, id aliquet nisi. Nullam quis lacus vitae lacus luctus pharetra eget ac magna. Pellentesque diam urna, egestas sit amet dapibus eget, dignissim sit amet ante.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </>
    )
}

export default Home;
import './../../App.css';

import {Link} from "react-router-dom"
import {Card, Button} from 'react-bootstrap'


function HomePage () {
    return(
        <>
            <Link to="/beers">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://github.com/ghersf91/lab-react-ironbeers/blob/master/src/assets/beers.png?raw=true" />
                    <Card.Body>
                        <Card.Title className="HomeText">Beers</Card.Title>
                        <Card.Text className="HomeText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel pellentesque quam.
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </Link>

            <Link to="/new-beer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://github.com/ghersf91/lab-react-ironbeers/blob/master/src/assets/new-beer.png?raw=true" />
                    <Card.Body>
                        <Card.Title>New Beers</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel pellentesque quam.
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </Link>

            <Link to="/random-beer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://github.com/ghersf91/lab-react-ironbeers/blob/master/src/assets/random-beer.png?raw=true" />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel pellentesque quam.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default HomePage
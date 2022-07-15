import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import randomBeer from './../../assets/random-beer.png'

const RandomBeers = () => {

    return (
        <div>           
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={randomBeer} />
                <Card.Body>
                    <Card.Title>Discover the Lupulous</Card.Title>                    
                    <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, dolorum laborum blanditiis quasi iste numquam ipsum odio. Est provident debitis inventore, ea voluptatibus illo quis!
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Link to="/randomBeer">
                        <Card.Link as="span">Go to Random Beer</Card.Link>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RandomBeers
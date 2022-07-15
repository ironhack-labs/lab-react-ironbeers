import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import newBeer from './../../assets/new-beer.png'

const NewBeers = () => {

    return (
        <div>            
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={newBeer} />
                <Card.Body>
                    <Card.Title>Brewe your dreams</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, dolorum laborum blanditiis quasi iste numquam ipsum odio. Est provident debitis inventore, ea voluptatibus illo quis!
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link to="/newBeer">
                        <Card.Link as="span">Go to a New Beer</Card.Link>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NewBeers
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import beers from './../../assets/beers.png'

const AllBeers = () => {

    return (

        <div>            
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={beers} />
                <Card.Body>
                    <Card.Title>Here are all of them!</Card.Title>
                    <Card.Text>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, dolorum laborum blanditiis quasi iste numquam ipsum odio. Est provident debitis inventore, ea voluptatibus illo quis!
                    </Card.Text>
                </Card.Body>                
                <Card.Body>
                    <Link to="/AllBeersView">
                    <Card.Link as="span">Go to All Beers</Card.Link>
                    </Link>                    
                </Card.Body>
            </Card>
        </div>

    )
}

export default AllBeers
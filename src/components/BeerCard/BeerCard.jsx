import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../components/App.css'

const BeerCard = ({ name, description, image_url }) => {
    return (
        <Link to={'/:id'}>
            <div className="soloBeer mb-4">
                <Card>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> {description} </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Link>
    )
}


export default BeerCard
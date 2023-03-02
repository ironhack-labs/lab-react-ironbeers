import { Card } from 'react-bootstrap'
import './HomeCard.css'

const HomeCard = ({ img, name }) => {
    return (
        <Card style={{ margin: 15 }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default HomeCard

import './HomeCard.css'
import { Card } from 'react-bootstrap'


const BeersCard = ({ img, title }) => {

    return (

        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Title className='mt-3'>{title}</Card.Title>
            <Card.Body className='mt3'>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default BeersCard
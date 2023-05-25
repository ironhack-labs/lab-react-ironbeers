import './HomeCard.css'
import { Card } from 'react-bootstrap'


const BeersCard = ({ img, title }) => {

    return (

        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Title className='mt-3'>{title}</Card.Title>
            <Card.Body className='mt3'>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum autem quia magnam illum reprehenderit sint ea, mollitia suscipit ut perferendis optio, maiores sunt sit sequi natus iste labore veritatis?
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default BeersCard
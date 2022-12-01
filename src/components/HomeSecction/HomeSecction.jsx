import './HomeSecction.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const HomeSecction = ({ title, image, text, link }) => {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Link to={link} >
                    <Card.Title as='div'>{title}</Card.Title>
                </Link>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card >
    );
}

export default HomeSecction;
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom/"

const IndexCard = ({ image, title, redirection }) => {

    const navigate = useNavigate()

    return (
        <Card className='mt-3' onClick={() => navigate(redirection)}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default IndexCard;
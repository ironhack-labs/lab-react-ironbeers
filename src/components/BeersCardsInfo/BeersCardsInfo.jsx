import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const BeersCardsInfo = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (

        <Link to={_id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Tagline: {tagline}
                    </Card.Text>
                    <Card.Text>
                        Contributed by: {contributed_by}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Link>
    );
}


export default BeersCardsInfo

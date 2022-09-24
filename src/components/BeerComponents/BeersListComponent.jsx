import { Card } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const BeersListComponent = ({ oneBeerCard }) => {

    return (

        <Card className="col-12">
            <Card.Img className="GalleryCardImg img-fluid" src={oneBeerCard.image_url} />
            <Card.Body>
                <Card.Title className="text-center"> {oneBeerCard.name} </Card.Title>
                <Card.Text className="text-center text-danger">
                    {oneBeerCard.tagline}
                    <br />
                    {oneBeerCard.contributed_by}
                </Card.Text>
                <Link
                    to={`/beers/${oneBeerCard._id}`}
                    className="linkbtn d-flex justify-content-center">
                    <button className="btn btn-warning">Details</button>
                </Link>
            </Card.Body>
        </Card>

    )

}

export default BeersListComponent;

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const OneBeerComponent = ({ beer }) => {

    return (
        <Card className="col-12">
            <Card.Img className="GalleryCardImg img-fluid" src={beer.image_url} />
            <Card.Body>
                <Card.Title className="text-center"> {beer.name} </Card.Title>
                <Card.Text className="text-center text-danger">
                    {beer.tagline}
                    <br />
                    {beer.contributed_by}
                </Card.Text>
                <Card.Text className="text-center">
                    {beer.first_brewed}
                    <br />
                    {beer.attenuation_level}
                    <br />
                    {beer.description}
                </Card.Text>
                <Link
                    to={`/beers`}
                    className=" linkbtn d-flex justify-content-center">
                    <button className="btn btn-warning">Go Back</button>
                </Link>
            </Card.Body>

        </Card>
    )
}

export default OneBeerComponent;
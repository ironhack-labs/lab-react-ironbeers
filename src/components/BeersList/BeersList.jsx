import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const BeersList = ({ beersData }) => {

    return (
        <>
            {beersData.map((oneBeer) => {
                return (
                    <div key={oneBeer._id}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={oneBeer.image_url} />
                            <Card.Body>
                                <Card.Title>{oneBeer.name}</Card.Title>
                                <Card.Text>{oneBeer.tagline}</Card.Text>
                                <Card.Text>{oneBeer.contributed_by}</Card.Text>

                                <Button variant="dark">
                                    <Link to={`/beers/${oneBeer._id}`}>Random beers</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </>
    );
};

export default BeersList;
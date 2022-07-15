import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const BeersList = ({ beersData }) => {
console.log(beersData)
    return (
        <>
            {beersData.map((beer) => {
                return (
                    <div key={beer._id}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={beer.image_url} />
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                                <Card.Text>{beer.tagline}</Card.Text>
                                {/* <Card.Text>{beer.first_brewed}</Card.Text> */}
                                {/* <Card.Text>{beer.attenuation_level}</Card.Text> */}
                                {/* <Card.Text>{beer.description}</Card.Text> */}
                                <Card.Text>{beer.contributed_by}</Card.Text>
                                <Button variant="dark">
                                    <Link to={`/beers/${beer._id}`}>More details</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </>
    )
}

export default BeersList
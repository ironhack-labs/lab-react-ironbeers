import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <section>
                <Card>
                    <Card.Img variant="top" src="./images/beers.png" />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique modi
                            nesciunt, quae suscipit excepturi molestiae libero voluptates. Velit
                            deserunt earum consequatur perferendis? Blanditiis qui a corrupti
                            accusamus delectus. Quaerat, commodi!
                        </Card.Text>
                        <Button variant="dark">
                            <Link to="/beers">beers</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card>
                    <Card.Img variant="top" src="./images/new-beer.png" />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique modi
                            nesciunt, quae suscipit excepturi molestiae libero voluptates. Velit
                            deserunt earum consequatur perferendis? Blanditiis qui a corrupti
                            accusamus delectus. Quaerat, commodi!
                        </Card.Text>
                        <Button variant="dark">
                            <Link to="/new-beer">New beers</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card>
                    <Card.Img variant="top" src="./images/new-beer.png" />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique modi
                            nesciunt, quae suscipit excepturi molestiae libero voluptates. Velit
                            deserunt earum consequatur perferendis? Blanditiis qui a corrupti
                            accusamus delectus. Quaerat, commodi!
                        </Card.Text>
                        <Button variant="dark">
                            <Link to="/random-beer">Random beers</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
};

export default Home;

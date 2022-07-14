import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import beersImage from './../../assets/beers.png'
import newBeersImage from './../../assets/new-beer.png'
import randomBeer from './../../assets/random-beer.png'

const Home = () => {
    return (
        <>
            <section>
                <Card>
                    <Card.Img variant="top" src={beersImage} style={{width: '100%'}} />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique modi
                            nesciunt, quae suscipit excepturi molestiae libero voluptates. Velit
                            deserunt earum consequatur perferendis? Blanditiis qui a corrupti
                            accusamus delectus. Quaerat, commodi!
                        </Card.Text>
                        <Button variant="info">
                            <Link to="/beers">beers</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card>
                    <Card.Img variant="top" src={randomBeer} style={{ width: '100%' }} />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique modi
                            nesciunt, quae suscipit excepturi molestiae libero voluptates. Velit
                            deserunt earum consequatur perferendis? Blanditiis qui a corrupti
                            accusamus delectus. Quaerat, commodi!
                        </Card.Text>
                        <Button variant="info">
                            <Link to="/new-beer">New beers</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card>
                    <Card.Img variant="top" src={newBeersImage} style={{ width: '100%' }} />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique modi
                            nesciunt, quae suscipit excepturi molestiae libero voluptates. Velit
                            deserunt earum consequatur perferendis? Blanditiis qui a corrupti
                            accusamus delectus. Quaerat, commodi!
                        </Card.Text>
                        <Button variant="info">
                            <Link to="/random-beer">Random beers</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default Home
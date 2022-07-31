import { Card, CardGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Home() {

    let navigate = useNavigate();

    return (
        <>
            <h1>IRONBEERS</h1>
            <CardGroup className='m-3'>
                <Card className='mx-3 border'>
                    <Card.Img variant="top" src="./beers.png" />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button  onClick={() => navigate("/beers", { replace: true })} variant="primary">All Beers</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">All Beers</small>
                    </Card.Footer>
                </Card>
                <Card className='mx-3 border'>
                    <Card.Img variant="top" src="./new-beer.png" />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                        <Button onClick={() => navigate("/random-beer", { replace: true })} variant="primary">Random Beer</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Random Beer</small>
                    </Card.Footer>
                </Card>
                <Card className='mx-3 border'>
                    <Card.Img variant="top" src="random-beer.png" />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        <Button onClick={() => navigate("/new-beer", { replace: true })} variant="primary">New Beer</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">New Beer</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>


    )
}
export default Home;
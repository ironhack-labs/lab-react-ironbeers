import { Link } from "react-router-dom";
import pic1 from '../../assets/beers.png'
import pic2 from '../../assets/new-beer.png'
import pic3 from '../../assets/random-beer.png'
import Card from 'react-bootstrap/Card';

const HomePage = () => {

    return (
        
            <div className="row">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                    <Card.Title>All Beers</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to="/beers" as="button" variant="dark">All Beers</Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={pic2} />
                <Card.Body>
                    <Card.Title>Random Beer</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to="/random" as="button" variant="dark">Random Beer</Link>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={pic3} />
                <Card.Body>
                    <Card.Title>Create a new beer</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to="/new" as="button" variant="dark">Create a new beer</Link>
                </Card.Body>
            </Card>
            </div>
       
    )
}

export default HomePage
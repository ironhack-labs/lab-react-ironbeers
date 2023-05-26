
import "./HomePage.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const HomePage = () => {


    return (
        <div className="homepage">
            <Link to={"/beer"}>
                <Card className="card" style={{ width: '68rem' }}>
                    <Card.Img variant="top" src="../../../beers.png" />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis voluptas quod, sunt fugiat sit modi dolorum! Quam quae iure, facere, excepturi possimus, ratione libero aliquid ex laudantium sequi aperiam?</p>
                    </Card.Body>
                </Card>
            </Link>

            <Link to={"/randomBeer"}>
                <Card className="card" style={{ width: '68rem' }}>
                    <Card.Img variant="top" src="../../../random-beer.png" />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis voluptas quod, sunt fugiat sit modi dolorum! Quam quae iure, facere, excepturi possimus, ratione libero aliquid ex laudantium sequi aperiam?</p>
                    </Card.Body>
                </Card>
            </Link>

            <Link to={"/newBeer"}>
                <Card className="card" style={{ width: '68rem' }}>
                    <Card.Img variant="top" src="../../../new-beer.png" />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis voluptas quod, sunt fugiat sit modi dolorum! Quam quae iure, facere, excepturi possimus, ratione libero aliquid ex laudantium sequi aperiam?</p>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}






export default HomePage
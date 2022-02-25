import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'
import Home from "../Navbar/Navbar";

function HomePage() {

    return (
        <>
            <Home/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="\assets\beers.png" />
                <Card.Body>
                    < Link to="/beers"><Card.Title> All Beers </Card.Title> </Link >
                    <Card.Text>
                        <p>Normalmente no rezo, pero si estás ahí­, por favor, sálvame Superman.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="\assets\new-beer.png" />
                <Card.Body>
                    <Link to="/random-beer"><Card.Title> Ramdom Beers </Card.Title> </Link >
                    <Card.Text>
                    <p>¡Bueno, cerebro, yo no te agrado y tu no me agradas!... ¡Sacame de esta y podré seguirte matando con cerveza! (Cerebro: ¡Trato hecho!)</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="\assets\random-beer.png" />
                <Card.Body>
                    <Link to="/new-beer"><Card.Title> New Beer </Card.Title> </Link >
                    <Card.Text>
                    <p>Sin tele y sin cerveza, Homer pierde la cabeza.</p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default HomePage;
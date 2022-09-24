import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomeCardsComponent = () => {
    return (
        <div>
            <Card className="col-12">
                <Link className="homeCardLink" to="/beers">
                    <Card.Img className="homeCardImg img-fluid" variant="top" src="https://images.unsplash.com/photo-1518542698889-ca82262f08d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                    <Card.Body>
                        <Card.Title className="text-center"> All Beers </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

            <Card className="col-12">
                <Link className="homeCardLink" to="/random">
                    <Card.Img className="homeCardImg img-fluid" variant="top" src="https://images.unsplash.com/photo-1522057306606-8d84daa75e87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
                    <Card.Body>
                        <Card.Title className="text-center"> Random Beer </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

            <Card className="col-12">
                <Link className="homeCardLink" to="/create">
                    <Card.Img className="homeCardImg img-fluid" variant="top" src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
                    <Card.Body>
                        <Card.Title className="text-center"> New Beer </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </div>
    );
}

export default HomeCardsComponent;
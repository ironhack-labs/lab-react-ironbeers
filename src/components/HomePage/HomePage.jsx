import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const HomePage = () => {
    return (
        <div>

            <Card style={{ width: '100%' }}>
                <Card.Img  variant="top" src="../../assets/beers.png" />
                <Card.Body>
                    <Card.Title>All Beers</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt qui dolorum repellat odit praesentium, 
                        quibusdam numquam dolor accusamus aut voluptas in, labore neque consequuntur ullam! Corporis modi neque in.
                    </Card.Text>
                    <Link to={"/beers"}>
                        <Button variant="primary">Ver Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="../../assets/random-beer.png" />
                <Card.Body>
                    <Card.Title>Random Beer</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt qui dolorum repellat odit praesentium,
                        quibusdam numquam dolor accusamus aut voluptas in, labore neque consequuntur ullam! Corporis modi neque in.
                    </Card.Text>

                    <Link to={"/random-beer"}>
                        <Button variant="primary">Ver Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="../../assets/new-beer.png" />
                <Card.Body>
                    <Card.Title>New Beer</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt qui dolorum repellat odit praesentium,
                        quibusdam numquam dolor accusamus aut voluptas in, labore neque consequuntur ullam! Corporis modi neque in.
                    </Card.Text>

                    

                    <Link to={"/new-beer"}>
                        <Button variant="primary">Ver Detalles</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomePage
// import Beer from "../Beers/Beers"
// import NewBeer from "../NewBeer/NewBeer"
// import RandomBeer from "../RandomBeer/RamdomeBeer"
// import Header from "../../components/Header/Header"
import { Link } from "react-router-dom"
import beersImage from "../../assets/beers.png"
import newBeerImage from "../../assets/new-beer.png"
import randomBeerImage from "../../assets/random-beer.png"
import { Card, Button, Container } from "react-bootstrap"


const HomePage = () => {

    return (

        <div>

            <Card className="beers mb-5">
                <Card.Img variant="top" src={beersImage} />
                <Card.Body>
                    <Link to={"/beers"}>
                        <Button variant="dark">All beers</Button>
                    </Link>
                    <Container>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aliquam doloremque illum voluptas minima libero voluptate dolore tempora autem. Necessitatibus, non? Possimus iure ipsum ad, dolorem sapiente labore laboriosam quas?
                        </Card.Text>
                    </Container>

                </Card.Body>
            </Card>
            <Card className="new-beer mb-5">
                <Card.Img variant="top" src={newBeerImage} />
                <Card.Body>
                    <Link to={"/new-beer"}>
                        <Button variant="dark">New beer</Button>
                    </Link>
                    <Container>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aliquam doloremque illum voluptas minima libero voluptate dolore tempora autem. Necessitatibus, non? Possimus iure ipsum ad, dolorem sapiente labore laboriosam quas?
                        </Card.Text>
                    </Container>
                </Card.Body>
            </Card>

            <Card className="random-beer mb-5">
                <Card.Img variant="top" src={randomBeerImage} />
                <Card.Body>
                    <Link to={"/random-beer"}>
                        <Button variant="dark">Random beer</Button>
                    </Link>
                    <Container>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aliquam doloremque illum voluptas minima libero voluptate dolore tempora autem. Necessitatibus, non? Possimus iure ipsum ad, dolorem sapiente labore laboriosam quas?
                        </Card.Text>
                    </Container>
                </Card.Body>
            </Card>

        </div>

    )
}

export default HomePage
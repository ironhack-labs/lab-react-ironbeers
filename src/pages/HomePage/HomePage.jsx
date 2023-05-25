import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import allBeers from "../../assets/beers.png"
import newBeer from "../../assets/new-beer.png"
import randomBeer from "../../assets/random-beer.png"

function HomePage () {
    return (

        <div>
            <Card className="mb-3 mt-10 homePageCard">
                <Card.Img variant="top" src={allBeers} />
                <Card.Body>
                    <Card.Title>
                        <Link to="/all-beers" className="h1-link">
                            <h1>All Beers</h1>
                        </Link>
                    </Card.Title>

                    <Card.Text>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam neque illum dolore! Iusto minus quis repudiandae quam eligendi inventore error, voluptatem dicta vitae eos quas delectus, odio soluta provident.</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-3 mt-10 homePageCard">
                <Card.Img variant="top" src={newBeer} />
                <Card.Body>
                    <Card.Title>
                        <Link to="/new-beer" className="h1-link">
                            <h1>New Beer</h1>
                        </Link>
                    </Card.Title>
                    
                    <Card.Text>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam neque illum dolore! Iusto minus quis repudiandae quam eligendi inventore error, voluptatem dicta vitae eos quas delectus, odio soluta provident.</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-3 mt-10 homePageCard">
                <Card.Img variant="top" src={randomBeer} />
                <Card.Body>
                    <Card.Title>
                        <Link to="/random-beer" className="h1-link">
                            <h1>Random Beer</h1>
                        </Link>
                    </Card.Title>
                    
                    <Card.Text>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam neque illum dolore! Iusto minus quis repudiandae quam eligendi inventore error, voluptatem dicta vitae eos quas delectus, odio soluta provident.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomePage
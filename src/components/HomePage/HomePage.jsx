import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>

            <Link to={'/beers'}>
                <Card className="HomePageCard">
                    <Card.Img variant="top" src='../../../images/beers.png' />
                    <Card.Body>
                        <div className="d-grid gap-2">
                            <Button variant="dark">All Beers</Button>
                        </div>
                    </Card.Body>
                </Card >
            </Link>
            <Link to={'/new-beer'}>
                <Card className="HomePageCard">
                    <Card.Img variant="top" src='../../../images/new-beer.png' />
                    <Card.Body>
                        <div className="d-grid gap-2">
                            <Button variant="dark">New Beer</Button>
                        </div>
                    </Card.Body>
                </Card >
            </Link>
            <Link to={'/random-beer'}>
                <Card className="HomePageCard">
                    <Card.Img variant="top" src='../../../images/random-beer.png' />
                    <Card.Body>
                        <div className="d-grid gap-2">
                            <Button variant="dark">Random Beer</Button>
                        </div>
                    </Card.Body>
                </Card >
            </Link>
        </>

    )
}

export default HomePage
import { Link } from 'react-router-dom'
import { Card, Button, Container } from "react-bootstrap"
import beers from './../../assets/beers.png'

const AllBeersCard = () => {

    return (

        <Card className="mb-3 mt-10 homePageCard">
            <Card.Img variant="top" src={beers} />
            <Card.Body>
                <Card.Title>
                    <Link to="/beers" className="h1-link">
                        <h1>All beers</h1>
                    </Link>
                </Card.Title>
                <Card.Text>
                    Beer is one of the oldest types of alcoholic drinks in the world, and the most widely consumed.
                    It is the third most popular drink overall after potable water and tea.
                    It is produced by the brewing and fermentation of starches, mainly derived from cereal grains—most commonly from malted barley, though wheat, maize, rice, and oats are also used.
                </Card.Text>
                {/*  <div className="d-grid">
                    <Link to={'/beers'} className="btn btn-dark btn-sm">See all beers</Link >
                </div> */}
            </Card.Body>
        </Card>
    )
}

export default AllBeersCard
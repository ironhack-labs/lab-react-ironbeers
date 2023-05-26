import { Link } from "react-router-dom"
import beer from '../../assets/beers.png'
import newbeer from '../../assets/new-beer.png'
import randombeer from '../../assets/random-beer.png'
import { Card } from "react-bootstrap"
const HomePage = ({ _id }) => {


    return (
        <>
            <h1>hola</h1>

            <Card className="mb-3 BeerCard">
                <Card.Img variant="top" src={beer} />
                <Card.Body>
                    <Card.Title>Beer</Card.Title>
                    <div className="d-grid">
                        <Link to={`/beers`} className="btn btn-dark btn-sm">
                            Details</Link>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique natus mollitia voluptate aut laborum sequi consectetur?
                        Corporis tempora, eveniet fugit, quisquam quibusdam, ad deserunt natus consequatur eaque distinctio facere?
                    </div>
                </Card.Body>
            </Card>

            <Card className="mb-3 BeerCard">
                <Card.Img variant="top" src={newbeer} />
                <Card.Body>
                    <Card.Title>RandomBeer</Card.Title>
                    <div className="d-grid">
                        <Link to={`/randombeer`} className="btn btn-dark btn-sm">
                            Get Random Beer</Link>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique natus mollitia voluptate aut laborum sequi consectetur?
                        Corporis tempora, eveniet fugit, quisquam quibusdam, ad deserunt natus consequatur eaque distinctio facere?
                    </div>
                </Card.Body>
            </Card>

            <Card className="mb-3 BeerCard">
                <Card.Img variant="top" src={randombeer} />
                <Card.Body>
                    <Card.Title>New Beer</Card.Title>
                    <div className="d-grid">
                        <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm">
                            Details</Link>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique natus mollitia voluptate aut laborum sequi consectetur?
                        Corporis tempora, eveniet fugit, quisquam quibusdam, ad deserunt natus consequatur eaque distinctio facere?
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}
export default HomePage
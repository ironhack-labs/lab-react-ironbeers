import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beers from "./../../assets/beers.png"
import newBeer from "./../../assets/new-beer.png"
import randomBeer from "./../../assets/random-beer.png"
import './../../components/App.css'

const HomePage = () => {

    return (

        <Container className="mt-3">
            <Col md={{ span: 6 }}>
                <Link to="/beers">
                    <img src={beers} alt="prueba" />
                </Link>
                <h1>All Beers</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia pellentesque dolor mollis eleifend. Praesent feugiat orci ligula. Nam ultricies, arcu gravida tempus volutpat, odio odio hendrerit magna, id congue sapien risus a lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed lorem mi. Pellentesque vel erat in lectus blandit efficitur. Duis diam leo, volutpat nec magna quis, pellentesque ultricies leo. </p>


                <Link to="/new">
                    <img src={newBeer} alt="prueba" />

                </Link>
                <h1>New Beer</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia pellentesque dolor mollis eleifend. Praesent feugiat orci ligula. Nam ultricies, arcu gravida tempus volutpat, odio odio hendrerit magna, id congue sapien risus a lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed lorem mi. Pellentesque vel erat in lectus blandit efficitur. Duis diam leo, volutpat nec magna quis, pellentesque ultricies leo. </p>

                <Link to="/random">
                    <img src={randomBeer} alt="prueba" />

                </Link>
                <h1>Random Beer</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia pellentesque dolor mollis eleifend. Praesent feugiat orci ligula. Nam ultricies, arcu gravida tempus volutpat, odio odio hendrerit magna, id congue sapien risus a lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed lorem mi. Pellentesque vel erat in lectus blandit efficitur. Duis diam leo, volutpat nec magna quis, pellentesque ultricies leo. </p>


            </Col>


        </Container>
    )
}

export default HomePage
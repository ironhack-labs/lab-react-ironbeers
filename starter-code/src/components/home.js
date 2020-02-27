
import React, { Component } from 'react'
import BeersServices from '../services/beers.services'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'



class CoastersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.services = new BeersServices()
    }

    // componentDidMount = () => this.getAllCoasters()

    // getAllCoasters = () => {
    //     this.services.getAllCoasters()
    //         .then(allCoasters => this.setState({ coasters: allCoasters }))
    //         .catch(err => console.log(err))
    // }

    // closeModal = () => this.setState({ showmodal: false })
    // openModal = () => this.setState({ showmodal: true })

    render() {

        return (
            <Container className="mt-5">
                <Card>
                    <Link to="/beers"><Card.Img variant="top" src="../images/beers.png" alt="beers" /></Link>
                    <Card.Body>
                        <Card.Title>All beers</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/random-beer"><Card.Img variant="top" src="../images/random-beer.png" alt="beers" /></Link>
                    <Card.Body>
                        <Card.Title>Random beer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Link to="/new-beer"><Card.Img variant="top" src="../images/new-beer.png" alt="beers" /></Link>
                    <Card.Body>
                        <Card.Title>New beer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default CoastersList
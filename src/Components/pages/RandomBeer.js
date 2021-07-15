import { Card, ListGroupItem, ListGroup, Container, Row } from "react-bootstrap"
import React, { Component } from 'react';
import BeerService from "../../services/services";


class RandomBeer extends Component {

    constructor() {

        super()
        this.state = {

            randomBirra: undefined
        }
        this.BeerService = new BeerService()


    }

    getRandomBeer = () => {

        // const { beer_id } = this.props.match.params
        // //aquí es donde relacionamos el id de cada cerveza con la vista y con la que selecciona de la api, 
        // // recogiendo el id que mandamos por la URL como param en el objeto global props/match


        this.BeerService
            .getRandomBeer()
            .then(response => this.setState({ randomBirra: response.data }))
            //accedemos a sus propiedades a través del response, en esta caso birra
            .catch(err => console.log(err));
        console.log(this.state.randomBirra)


    }


    componentDidMount = () => {
        this.getRandomBeer()
    }


    render() {
        return (
            !this.state.birra
                ?
                <h3>MARCHANDO UNA SUGERENCIA...</h3>
                :
                (<>
                    <Container>
                        <Row>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.state.randomBirra.image_url} />
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{this.state.randomBirra.name}</Card.Title>
                                    <Card.Text>
                                        {this.state.randomBirra.description}

                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>{this.state.randomBirra.tagline}</ListGroupItem>
                                            <ListGroupItem>{this.state.randomBirra.attenuation_level}</ListGroupItem>
                                            <ListGroupItem>{this.state.randomBirra.contributed_by}</ListGroupItem>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </>)
        )
    }
}

export default RandomBeer
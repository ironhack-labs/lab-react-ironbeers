import React, { Component } from 'react';
import { Row, Card, Button, Container } from 'react-bootstrap';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

import BeerService from '../../services/services';

class AllBeers extends Component {

    constructor() {

        super()
        this.state = {

            birras: undefined
        }
        this.BeerService = new BeerService
    }

    getBeers = () => {
        this.BeerService
            .getBeers()
            .then(response => this.setState({ birras: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.getBeers()
    }

    render() {

        return (

            !this.state.birras
                ?
                <h3>MARCHANDO UNAS BIRRITAS...</h3>
                :
                (<>
                    <Container>

                        <Row>

                            {this.state.birras.map(elm =>


                                <Card style={{ width: '18rem' }}>
                                    <Card.Img  variant="top" src={elm.image_url} />
                                    <Card.Body>
                                        <Card.Title>{elm.name}</Card.Title>
                                        <Card.Text>
                                            {elm.description}
                                        </Card.Text>
                                        <Button variant="primary"><Link to={`/beers/${elm._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                                    </Card.Body>
                                </Card>



                            )}

                        </Row>

                    </Container>

                    <br></br>
                    <hr></hr>
                </>)

        )
    }

}

export default AllBeers
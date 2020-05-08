import React, { Component } from 'react'
import apiServices from '../../services/apiServices'
import axios from 'axios'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class Beers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: [],
        }
    }


    // Estoy super cabreado por haberme visto obligado a hacerlo asi. De la otra forma no funciona
    getAllBeers = () => axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => this.setState({ beers: response.data }))
        .catch(error => console.log(error))

    // Asi no funciona. Me dice que la funcion no existe y he perdido más de 2 horas con esto
    //Me gustaria de verdad saber por qué no funciona, la verdad.
    // getAllBeers = () => {
    //     apiServices.getAllBeers()
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    //     console.log(apiServices)
    // }

    componentDidMount() {
        this.getAllBeers()
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className='navBar'>Home</Col>
                    {this.state.beers.map(beer => beer.name)}
                </Row>
            </Container>
        )
    }
}

export default Beers
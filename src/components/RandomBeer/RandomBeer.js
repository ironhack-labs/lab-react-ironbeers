import React, {Component} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BeersService from '../../service/BeersService'

class BeerRamdom extends Component {
    constructor (){
        super ()
        this.state = {
            beerRdm: {}
        }
        this.beerService = new BeersService()
    }

    componentDidMount = () => {
        this.beerService
            .getRandomBeer()
            .then(res => this.setState({beerRdm: res.data}))
            .catch(err => console.log(err))
    }

    render () {
        return (
            !this.state.beerRdm ? <h3>CARGANDO</h3> : 
            <Container>
                <img alt='BeerImg' src={this.state.beerRdm.image_url}></img>
                <Row>
                    <Col sm={10}>
                        <h3>{this.state.beerRdm.name}</h3>
                        <p>{this.state.beerRdm.tagline}</p> 
                    </Col>
                    <Col sm={2}>
                        <p>{this.state.beerRdm.attenuation_level}</p>
                        <p>{this.state.beerRdm.first_brewed}</p> 
                    </Col>   
                </Row>
                <Row>
                    <p>{this.state.beerRdm.description}</p>
                    <p><b>Contributed by: </b>{this.state.beerRdm.contributed_by}</p>
                </Row>
                
            </Container>
        )
    }
}

export default BeerRamdom
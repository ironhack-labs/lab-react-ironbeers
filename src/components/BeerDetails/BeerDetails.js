import React, {Component} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BeersService from '../../service/BeersService'

class BeerDetails extends Component {
    constructor (){
        super ()
        this.state = {
            beerDetails: {}
        }
        this.beerService = new BeersService()
    }

    componentDidMount = () => {
        const id = this.props.match.params._id

        this.beerService
            .getOneBeer(id)
            .then(res => this.setState({beerDetails: res.data}))
            .catch(err => console.log(err))
    }

    render () {
        return (
            !this.state.beerDetails ? <h3>CARGANDO</h3> : 
            <Container>
                <img alt='BeerImg' src={this.state.beerDetails.image_url}></img>
                <Row>
                    <Col sm={10}>
                        <h3>{this.state.beerDetails.name}</h3>
                        <p>{this.state.beerDetails.tagline}</p> 
                    </Col>
                    <Col sm={2}>
                        <p>{this.state.beerDetails.attenuation_level}</p>
                        <p>{this.state.beerDetails.first_brewed}</p> 
                    </Col>   
                </Row>
                <Row>
                    <p>{this.state.beerDetails.description}</p>
                    <p><b>Contributed by: </b>{this.state.beerDetails.contributed_by}</p>
                </Row>
                
            </Container>
        )
    }
}

export default BeerDetails
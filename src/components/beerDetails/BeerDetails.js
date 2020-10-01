import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BeerService from '../../service/beers.service'
import Header from '../header/Header'

class BeerDetails extends Component() {
    
    constructor() {
        super()
        this.state = {
            details: {}
        }
        this.BeerService = new BeerService()
    }
    
    componentDidMount= () => {
        this.BeerService
            // .getOneBeer(this.props.match.params._id)
            .console.log(this.props)
            .then(response => this.setState({ details: response.data }))
            .catch(err => console.log('Error!', err))
    }

    render() {

        return (
            <>

            <Header />

            <Container>
                
                <h1>{this.state.details.name}</h1>
                
                <hr />
                
                <Row>
                    
                    <Col md={{ span: 4, offset: 1 }}>
                        
                        <h3>{this.state.details.tagline}</h3>

                        <h4>{this.state.details.attenuation_level}</h4>

                        <h4>Description</h4>
                        
                        <p>{this.state.details.description}</p>
                        
                        <hr />

                          
                    </Col>
                    
                    <Col md={6}>
                        
                        <img style={{ width: '100%' }} alt={this.state.details.name} src={this.state.details.image_url} />
                        
                    </Col>
                    
                </Row>
                
¡            </Container>
            
            </>

        )
    }
}

export default BeerDetails
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Image, Container, Col, Row} from 'react-bootstrap'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export class RandomBeer extends Component {
    constructor(props){
        super(props)
        this.state={
            beerCode:'',
            beerData:{}
        }
    }
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response =>{
            this.setState({beerData:response.data, beerCode:response.data._id})
            console.log(response)
        })
        .catch(e => {
            console.log('Oops!An error ocurred', e)
        })
    }
    render() {
            return (
                <div >
                    <header className='bg-primary'>
                        <Link to={"/"}>
                            <FontAwesomeIcon className='text-white' icon={faHome}/> 
                        </Link>   
                    </header>
                    <Container className='content' key={this.state.beerCode}>
                        <Col>
                            <Row>
                                <Image variant="top" src={this.state.beerData.image_url} style={{ width: '40%' }} className='center' />
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className='center'>{this.state.beerData.name}</h1>
                                </Col>
                                <Col>
                                    <h3 className='text-secondary'>{this.state.beerData.attenuation_level}</h3>
                                </Col> 
                            </Row>
                            <Row >
                                <Col>
                                    <h4 className='text-secondary'>{this.state.beerData.tagline}</h4>
                                </Col>
                                <Col>
                                    <b>{this.state.beerData.first_brewed}</b>
                                </Col>
                            </Row>
                            <Row className='card-text'> 
                                <p>{this.state.beerData.description}</p>
                            </Row>
                            <Row className='card-text text-secondary '> 
                                <p><b>{this.state.beerData.contributed_by}</b></p>
                            </Row>
                        </Col>
                    </Container>
                </div>
            )
        }
}

export default RandomBeer
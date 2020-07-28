import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Image, Container, Col, Row} from 'react-bootstrap'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ListBeers extends Component {
    constructor(props){
        super(props)
        this.state={
            beers:[]
        }
    }
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')
        .then(response => {
            this.setState({
                beers:response.data
            })
            console.log(this.state.beers)
        })
    }


    render() {
        const listado = this.state.beers.map(beer => (
            <Container key={beer._id} className='beer-card content'>
                <Row>
                    <Col>
                        <Image variant="top" src={beer.image_url} style={{ width: '3rem' }} className='center' />
                    </Col>
                    <Col className='card-text'>
                        <div>
                            <Link to={"/beers/"+beer._id}>
                                <h5>{beer.name}</h5>
                            </Link> 
                        </div> 
                        <h6 className='text-secondary'>{beer.tagline}</h6>
                        <p><b>Created by:</b>{beer.contributed_by}</p>
                    </Col>
                </Row>
            </Container>
        ))
        return (
            <div>
                <header className='bg-primary'>
                    <Link to={"/"}>
                        <FontAwesomeIcon className='text-white' icon={faHome}/> 
                    </Link>   
                </header>
                <div>
                {listado}
                </div>
            </div>
        )
    }
}

export default ListBeers
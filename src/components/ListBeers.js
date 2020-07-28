import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Image, Container, Col, Row, InputGroup, FormControl} from 'react-bootstrap'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ListBeers extends Component {
    constructor(props){
        super(props)
        this.state={
            beers:[],
            name:''
        }
    }
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')
        .then(response => {
            this.setState({
                beers:response.data,
                name:''
            })
            console.log(this.state.beers)
        })
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        if (e.target.value.length > 0) {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
        .then(response => {
            this.setState({
                beers:response.data
            })
            console.log(this.state.beers)
        })}
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
                <div className='content'>
                <InputGroup className="content">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Type your beer"
                    aria-label="Beer"
                    aria-describedby="basic-addon1"
                    name="name" onChange={this.handleChange} value={this.state.name}/>
                </InputGroup>
                {listado}
                </div>
            </div>
        )
    }
}

export default ListBeers
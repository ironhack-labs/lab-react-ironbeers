import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap'

export default class Beer extends Component {

    state = {
        beers: [],
        query: ''
    }

    componentDidMount = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then(allBeers => {
            this.setState({
                beers: allBeers.data
            })
            console.log(allBeers.data)
        })
    }

    handleChange = (event) => {
        let query = event.target.value;
        this.setState({
            [event.target.name]: query
        })
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then(response => {
            console.log('Response:')
            console.log(response.data)
            this.setState({
                beers: response.data
            })
        })
    }
   
    render() {
        console.log(this.state.beers)
        if (!this.state.beers) return <></>;
        return (
            <div className='container'>
                <Header />
                <Form>
                    <Form.Group controlId="formBasicQuery">
                        <Form.Label>Query</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Search Beer"
                        name="query"
                        value={this.state.query}
                        onChange={this.handleChange}
                        required
                         />
                    </Form.Group>
                </Form>
                <ul className='list-group container'>
                    {this.state.beers.map(beer => {
                        return(
                            <Link to={`/beers/${beer._id}`}>
                            <li className='list-group-item d-flex justify-content-center align-items-center row'>
                            <div className='beerLogo col-4'>
                            <img src={beer.image_url} alt="" className='col-sm'/>
                            </div>
                            <div className='beerInfo col-8 d-flex flex-column justify-content-start align-items-start'>
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                            <span>Created By: {beer.contributed_by}</span>
                            </div>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

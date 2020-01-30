import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

export default class BeerDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            foundBeer: []
        }
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get("https://ih-beers-api2.herokuapp.com/beers/"+id)
        .then(response => {
            this.setState({foundBeer: response.data});
        })    
    }

    render() {
        return (
            <div>
        <img className="image" src={this.state.foundBeer.image_url} alt="beers"></img>
        <h3>{this.state.foundBeer.name}</h3>
        <p>{this.state.foundBeer.tagline}</p>
        <p>{this.state.foundBeer.first_brewed}</p>
        <p>{this.state.foundBeer.attenuation_level}</p>
        <p>{this.state.foundBeer.description}</p>
        <p>{this.state.foundBeer.contributed_by}</p>
        <Link to='/beers'>Back</Link>
    </div>
        )
    }
}

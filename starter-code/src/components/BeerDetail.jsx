import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';

class BeerDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
    }
    
    componentDidMount(){
        let id = this.props.match.params.id;
        let url = `https://ih-beers-api.herokuapp.com/beers/${id}`
        axios.get(url)
        .then((response)=> {
            console.log(response)
            this.setState({beer: response.data})
        })
    }

    render() {
        return (
            <div className = "beer-detail">
                <Nav />
                <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                <h1>{this.state.beer.name}</h1>
                <p>Tagline : {this.state.beer.tagline}</p>
                <p>First brewed: {this.state.beer.first_brewed}</p>
                <p>Description: {this.state.beer.description}</p>
                <p>Created by : {this.state.beer.contributed_by}</p>
            </div>
        )
    }
}

export default BeerDetail

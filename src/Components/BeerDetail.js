import React, { Component } from 'react'
import axios from 'axios';


export default class BeerDetail extends Component {
    
    state = {
        beer: []
    }

    componentDidMount() {
        const id = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        // if (this.state.beer.length === 0) return <h3>Loading...</h3>

        return (
            <div> 
                <h1>Beer Detail</h1>
                    <div key = {this.state.beer._id}>     
                        <img style={{width: '50px'}} src={this.state.beer.image_url} alt="Image"/>   
                        <h2>{this.state.beer.name}</h2>
                        <p>{this.state.beer.description}</p>
                        <p>{this.state.beer.contributed_by}</p>
                    </div>
            </div>
        )
    }
}

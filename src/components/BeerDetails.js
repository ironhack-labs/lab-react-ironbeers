import React, { Component } from 'react';
import axios from 'axios';



export default class BeerDetails extends Component {
    state = {
        beer: []
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(response => {               
                // const beer = response.data.find(beer => beer._id === this.props.match.params.beerId)
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const beer = this.state.beer;

        return (
            <div>   
            
                <div className="beer-details">
                    <img src={beer.image_url} alt="" style={{height:'150px'}}/>
                    <h1>Name: {beer.name}</h1>
                    <h2>Tag: {beer.tagline}</h2>
                    <h2>Attenuation Level: {beer.attenuation_level}</h2>
                    <h2>First brewed in {beer.first_brewed}</h2>
                    <strong>Description:</strong>
                    <p>{beer.description} </p>
                    <p><strong>Created by </strong> {beer.contributed_by}</p>
                </div>               
            </div>
        )
    }
}
 

       
 

 

 


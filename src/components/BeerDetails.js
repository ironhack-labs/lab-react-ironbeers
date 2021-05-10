import React, { Component } from 'react';
import axios from 'axios';

export default class BeerDetails extends Component {

    state = {
        beer: {}
      }
    
    
      componentDidMount() {
        const beerId = this.props.match.params.id;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then(response => {
            this.setState({
              beer: response.data
            })
          })
          .catch(err => console.log(err))
      }

    render() {
        const beer = this.state.beer
        return (
            <div key={beer._id}>
                <img src={beer.image_url} style={{width:"100px", height:"200px"}}/>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
            </div>
        )
    }
}

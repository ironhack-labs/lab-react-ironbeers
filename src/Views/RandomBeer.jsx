import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

class RandomBeer extends Component {

    state = {
        randomBeer: null,
    }


    componentDidMount(){
       axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random') 
            .then((response) => {
                this.setState({randomBeer: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        if(this.state.randomBeer === null) {
            return <div>Brewing ...</div>
        }

        return (

            <div>
                <Header>Go back Home</Header>
                <p>{this.state.randomBeer.name}</p>
                <p><img src={this.state.randomBeer.image_url} alt='onebeer'/></p>
                <p>{this.state.randomBeer.tagline}</p>                
                <p>{this.state.randomBeer.contributed_by}</p> 
            </div>

        )
    }
}

export default RandomBeer
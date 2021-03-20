import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

class OneBeer extends Component {


state = {
    beer: null,
}


componentDidMount() {
    const id = this.props.match.params.beerId;

    axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
            this.setState({beer: response.data})
            
        })
        .catch((error) => {
            console.log(error);
        })


}       


    render() {

        if(this.state.beer === null) {
            return <div>Brewing ...</div>
        }


        return (
            <div>
                <Header>Go back Home</Header>
                <h1>You want me?</h1>
                <h2>
                {this.state.beer.name} 
                </h2>
                <p><img src={this.state.beer.image_url} alt='onebeer'/></p>
                <p>{this.state.beer.tagline}</p>                
                <p>{this.state.beer.contributed_by}</p>                
            </div>
        )
    }
}

export default OneBeer;

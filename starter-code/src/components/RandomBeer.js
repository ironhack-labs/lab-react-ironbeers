import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

export class RandomBeer extends Component {
    constructor(props){
        super(props);
        this.state={}
                }
                
getSimpleBeer = () => {

    const {params} = this.props.match; 
    console.log('esto son params', params)
    axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(responseFromApi => {
                const data=responseFromApi.data
            this.setState(data)
        })
}
componentDidMount() {
    this.getSimpleBeer();
}

render() {
    return (
        
        <div className="beer-image">
            <NavBar/>
            <img src={this.state.image_url} alt="" />
           <h1>{this.state.name}</h1>
           <h3>{this.state.tagline}</h3>
           <h3>{this.state.first_brewed}</h3>
           <h4>{this.state.attenuation_level}</h4>
           <h4>{this.state.description}</h4>
           <h4>{this.state.contributed_by}</h4>
        </div>
    )
}
}

export default RandomBeer

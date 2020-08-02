import React, { Component } from 'react'
import axios from "axios"
import Header from "../Header/Header"


export class ListOne extends Component {
    constructor(props) {
        super (props)
        this.state = {
            beer: {},
            beerId: props.match.params.id
        }
    }
   
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id)
            .then((response) => {
                console.log(response.data)
                console.log(this.props.match.params.id)
                this.setState({ beer: response.data });
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            
            <div>
            <Header></Header>
                 <img className="beerImg" src={this.state.beer.image_url} alt="Beer img"></img>
                 <h3>{this.state.beer.name}</h3>
                 <h4>{this.state.beer.tagline}</h4>
                 <h5>{this.state.beer.first_brewed} {this.state.beer.attenuation_level}</h5>
                 <p>{this.state.beer.description}</p>
                 <h5>{this.state.beer.contributed_by}</h5>
                
            </div>
        )
    }
}

export default ListOne




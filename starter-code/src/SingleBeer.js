import React, { Component } from 'react'
import axios from "axios"

export default class SingleBeer extends Component {

state ={
    beer: []
}


    getSingleBeer(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`).then(response =>{
            const beer = response.data
            this.setState({
                beer: beer
            })
            console.log("AXIOS", this.props.beer);
           
        }).catch(err =>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.getSingleBeer()
        console.log("DIDMONT", this.props.beer)
    }


    render() {
        
        const beer = this.state.beer
        console.log("RENDER", beer)
        return (
          <div>
            <img
              style={{ height: "40vh" }}
              src={beer.image_url}
              alt="beerpic"
            />
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>

            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        );
    }
}

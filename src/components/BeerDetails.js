import React, { Component } from 'react'
import axios from 'axios'

class BeerDetails extends Component
{


    state = {
        beer : null
    }

    componentDidMount (){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id ).then((singleBeer) => {
            console.log(singleBeer.data)
            this.setState({
                beer : singleBeer.data
            })
        })
    }

    render (){

        return (
            <div>
                {this.state.beer 
                ? <div>
                    <img src={this.state.beer.image_url} />
                    <h5>{this.state.beer.name} </h5>
                    <p>{this.state.beer.tagline}</p>
                    <div>First brewed : {this.state.beer.first_brewed}</div>
                    <div>Attenuation level : {this.state.beer.attenuation_level}</div>
                    <p>Description : {this.state.beer.description}</p>
                    <div>Contributed by : {this.state.beer.contributed_by}</div>

                   </div> 
                
                : "loading"}
            </div>
        )
    }
}

export default BeerDetails
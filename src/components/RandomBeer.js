import React, { Component } from 'react'
import axios from 'axios'

import Header from "./Header"

export default class RandomBeer extends Component {

    state = {
        beer: {},
      }
    
    
    componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((res) => {
        // console.log(res.data)
        this.setState({
            beer: res.data
        })
        })
    }
       


    render() {

        let imgStyle = {
            height: "150px"
        }
    
        let beerCard = {
            display: "flex",
            border: "2px solid black",
            margin: "10px 0px",
            padding: "10px",
            width: "350px",
        }
   
    
        return (
            <>
                <Header />
                <h1>All Beers</h1>

                <div>
                    <div style={beerCard}>
                        <div>
                            <img src={this.state.beer.image_url} alt="img" style={imgStyle}/>
                            <h2>{this.state.beer.name}</h2>
                            <p>{this.state.beer.tagline}</p>
                            <p><strong>First brewed: </strong>{this.state.beer.first_brewed}</p>
                            <p><strong>Attenuation level: </strong>{this.state.beer.attenuation_level}</p>
                            <p>{this.state.beer.description}</p>
                            <p><strong>Created by:</strong> {this.state.beer.contributed_by}</p>                       
                        </div>
                    </div>                    
                </div>                    
            </>
        )

    }

}

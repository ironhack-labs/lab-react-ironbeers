import React, { Component } from 'react'
import axios from 'axios';
import IdBeer from './IdBeer.js'

class RandomBeer extends Component{
    state={
        simpleBeer:{}
    }
    componentDidMount(){        
        axios.get(`https://api.punkapi.com/v2/beers/random`)
        .then(response =>{
            this.setState({
                simpleBeer:response.data[0]
            })
        })

    }
    render(){
        return(
             <IdBeer {...this.state.simpleBeer}></IdBeer>
        )
    }
}

export default RandomBeer

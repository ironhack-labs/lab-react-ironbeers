import React, { Component } from 'react'
import axios from 'axios';
import CardBeer from './CardBeer.js'

class Beers extends Component{
    state={
        beerList:[]
    }
    componentDidMount(){
        axios.get("https://api.punkapi.com/v2/beers")
        .then(response =>{
            this.setState({
                beerList:response.data
            })
        })

    }
    render(){
        return(
            <div className="beer-list">
                {this.state.beerList.map((ele,index)=>{
                    return <CardBeer key={index} {...ele}></CardBeer>
                })}
                
            </div>
        )
    }
}

export default Beers

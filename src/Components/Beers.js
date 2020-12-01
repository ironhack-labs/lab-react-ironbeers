import React, { Component } from 'react'
import axios from 'axios';
import CardBeer from './CardBeer.js'

class Beers extends Component{
    state={
        beerList:[]
    }
    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response =>{
            this.setState({
                beerList:response.data
            })
        })
    }
    render(){
        return(
            <div className="beer-list">
                {this.state.beerList.map((ele)=>{
                    return <CardBeer key={ele._id} {...ele}></CardBeer>
                })}

            </div>
        )
    }
}

export default Beers
import React, { Component } from 'react'
import axios from 'axios'

export default class RandomBeer extends Component {
    state = {
        beers : [],
        randomNum: 0
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            const randomNumber = Math.floor(Math.random()*response.data.length)
            this.setState(
                {
                    beers : response.data,
                    randomNum : randomNumber
                })
        })
        .catch(err => {
            console.log(err)
        })
    }



    render() {
        const beer = this.state.beers[this.state.randomNum];
        return (
            <div>
                {
                    
                    this.state.beers.length > 0 ? (<div style={{display:"flex", marginBottom:"30px", padding:"20px", gap:"20px"}} >
                                <img style={{width:"100px"}} src={beer.image_url} alt=""/>
                                <div>
                                    <h2>{beer.name}</h2>
                                    <p>{beer.tagline}</p>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                        </div>) : (<></>)
                    
                }
            </div>
        )
    }
}

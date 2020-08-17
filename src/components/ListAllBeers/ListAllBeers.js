import React, { Component } from 'react'
import Header from "../Header/Header"
import axios from "axios"
import "./ListAllBeers.css"
import {Link} from "react-router-dom"

export class ListAllBeers extends Component {
        constructor(props) {    
            super(props)
            this.state = {
                beers : []
            }
            
        }
        componentDidMount() {
            axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                console.log(response.data)
                this.setState({beers: response.data})
            })
        }
    
    render() {
        const beerList = this.state.beers.map((beer) => {
            return <div key={beer._id}>
                    <img className="beerImg" src={beer.image_url} alt="Beer img"></img>
                    <h3><Link to={"/" + beer._id}>{beer.name}</Link></h3>
                    <h4>{beer.tagline}</h4>
                    <h5>{beer.contributed_by}</h5>
                    <hr></hr>
                 </div>
                 
        }) 

        return (
            <div>
            <Header></Header>
            {beerList}
                
            </div>
        )
    }
}

export default ListAllBeers

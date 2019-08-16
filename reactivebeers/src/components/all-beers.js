import React, { Component } from 'react'
import Services from '../services/beer.services'
import Card from  './beer-card'
import { Link } from 'react-router-dom'

class AllBeers extends Component {
    constructor() {
        super()
        this.state ={beers: []}
        this.services = new Services 
    }

    componentDidMount() {
        this.services.getBeers()
            .then(response =>{
                this.setState({ beers: response.data.slice(0,20) })})
            .catch(err => console.log(err))
    }

    //this.setState({ beers: response.data })
    //coaster => <CoasterCard key={coaster._id} {...coaster} />)
    render(){

        return(
            <div className="container">
            <Link to="/"><img className = "homeButton" src ="../img/home-button.png" alt = ""/></Link>
            <h1>List of the first 20 beers</h1>
             {this.state.beers.map(elm => <Link to={`/${elm._id}`}><Card {...elm}/></Link>)}
            </div>
        )
    }
}

export default AllBeers
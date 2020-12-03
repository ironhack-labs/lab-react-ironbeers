import React, { Component } from 'react'
import BeerService from "./../service/beers.service"
import Navbar from './navbar/Navbar'
import BeerCard from './BeerCard'




// import MainBeerItem from "./BeerListItem"


class BeerList extends Component {
    constructor (){
        super ()
        this.state = {
            beers: []
            
        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.BeerService
            .getAllBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }
   
    render() {
        
           
        return (
            <>
                <Navbar />
                <h1>Beers List</h1>
                {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    
                
            
            </>
        )
    }
}

export default BeerList



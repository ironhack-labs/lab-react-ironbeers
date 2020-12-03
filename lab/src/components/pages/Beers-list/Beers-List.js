import React, { Component } from 'react'
import Header from "../Header"
import BeersService from '../../../service/beers.service'
import BeerForm from "./../Beer-form/New-beer"
import { Link } from 'react-router-dom'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beersService = new BeersService()
    }

    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        this.beersService
            .getBeers()
            .then(res => this.setState({ beers: res.data }) )
            .catch(err => console.log(err))
    }

    render() {
        return (

            <>
                <Header />
                
                <div className="beer-list">

                {this.state.beers.map((elm, idx) => {

                    return (                        
                        <div className="card" key={elm._id}>
                            <img className="card-img-top" src={elm.image_url} alt=""/>
                            <div className="card-body">
                                <Link className="card-title" to={`/beers/${elm._id}`}>{elm.name}</Link>
                                <h4 className="card-text mt-3">{elm.tagline}</h4>  
                                <p className="card-text mt-3">Created by: {elm.contributed_by}</p>  
                            </div>
                        </div> 
                    )           
                })}                    
                        
                 </div> 
            </>                  

        )
    }
}

export default BeersList
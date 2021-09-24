import React from 'react'
import { Link } from 'react-router-dom'
import BeersService from '../../../services/beers.service'
import { Component } from 'react'
import BeerItem from '../BeerItem'
import NavHouse from '../NavHouse'


export default class CoastersList extends Component {
    constructor() {
        super();

        this.state = {
            beer: null
        }
        this.BeersService = new BeersService();
    }


 componentDidMount() {
     this.refreshBeers();
 }

 refreshBeers = () => {
     this.BeersService.getBeers()
     
     
         .then(res => {
             this.setState({
                 ...this.state,
                 beer: res.data
             })
         })
         .catch(err => console.error(err))
 }
 
    displayBeers = () => {
        const ListOfBeers = this.state.beer
        return (
                ListOfBeers.map(beer => {
                    return (
                        <BeerItem key={beer._id} {...beer} />
                    )
                }) 
                            
        )
    }

    render() {
        return (
            <div>
            <NavHouse/>
            {this.state.beer ?

            
                this.displayBeers()
            
                :
                <h2> Loading </h2>
            }
            </div>
        )
    }
}
import React, { Component } from 'react'
import NavBar from './NavBar'
import Service from '../service/service.js'
import BeerCard from './BeerCard.js';

export default class BeerList extends Component {

    constructor(){
        super()
        this.state = {
          beers : []
        }
        this.service = new Service()
        this.buildBeers()
    }

    buildBeers = () => {
        this.service.getBeers()
        .then(response=>{
            this.setState({
                beers : response.slice(0,20)
            })
        })
    }

    
    render() {
        return (
        <div>
            <NavBar />
            <h2>Lista de Cervezas</h2>
            {
                this.state.beers.map((elm,ind)=><BeerCard key={ind} {...elm} />)
            }
        </div>
        )
    }
}


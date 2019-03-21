import React, { Component } from 'react'

import Service from '../service/service.js'
import BeerCard from './BeerCard.js';

export default class BeerList extends Component {

    constructor(){
        super()
        this.state = {
          beers : [],
          searchstring : ""
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

    handleChange = (e) => {
        this.setState({searchstring: e.target.value},()=>{
            if(this.state.searchstring) this.handleQuery(this.state.searchstring) // if necesario para evitar error al hacer query con string vacía
        })
    }

    handleQuery = (query) => {
        this.service.getQueryBeers(query)
        .then(response => {
            this.setState({beers : response})
        })
    }

    
    render() {
        return (
        <div>
            <h2>Lista de Cervezas</h2>
            <div>
                <form>
                <input type="text" name="text" value={this.state.searchstring} onChange={(e) => this.handleChange(e)} />
                </form>
            </div>

            {
                this.state.beers.map((elm,ind)=><BeerCard key={ind} {...elm} />)
            }
        </div>
        )
    }
}


import React, { Component } from 'react'
import { Switch, Route, Link, Redirect, Router } from 'react-router-dom';
import axios from 'axios'
import Beer from './Beer'

class AllBeers extends Component
{
    state = {
        allBeers : [],
        searchTerm : ""
    }
    
    searchHandler = (search) => {
        this.setState({
            searchTerm : search
        })
    }


    componentDidMount () {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
            this.setState({
                allBeers : beers.data
            })
        })
    }




    render ()
    {

    return(
        <div>
            {this.state.allBeers.length > 0 
            ? this.state.allBeers.map((singleBeer) =>  <Link to={"/" + singleBeer._id} key={singleBeer._id}> <Beer singleBeer={singleBeer} /> </Link> ) 
            : "Loading"}
        </div>
    )

    }
}

export default AllBeers



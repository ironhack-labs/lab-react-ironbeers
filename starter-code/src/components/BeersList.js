import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class BeersList extends Component {
    
    state = {
        beersList: []
    }
    
    
    componentDidMount() {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            console.log(response);
            this.setState({
                beersList: response.data
            })

    })
.catch(err => {
    console.log(err);
})
    }
        
    render() {
        return (
            <div>
                {
                    this.state.beersList.map(beer => {
                        return (
                            <div key={beer._id}>
                            <div style={{height: '100px'}}>
                               <img src={beer.image_url} alt="" style={{height: '100%'}}/>
                            </div>
                            <Link to={`/beers/${beer._id}`}>
                            <h2>{beer.name}</h2>
                            </Link>
                            <h4>{beer.tagline}</h4>
                            <h3>{beer.contributed_by}</h3>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


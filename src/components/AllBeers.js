import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


class AllBeers extends Component {
    render() {

        const { beers } = this.props

        return (
            <div>
                <Header />
                
                {
                    beers.map((beer, i) => {
                        return (
                            <>
                                <div key={i}>
                                <img src={beer.image_url} alt=''/>
                                <p> <Link to={`/beers/${beer._id}`}>{beer.name}</Link></p>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                                </div>
                            </>
                        )               
                        
                    })
                }
                
            </div>
        )
    }
}

export default AllBeers
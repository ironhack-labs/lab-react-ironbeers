import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Beers extends Component {
    render() {
        const {beers} = this.props
        return (
            <div>
                
                <h3>
                    {
                        beers.map((beer, i) =>{
                            return <p key={i}>
                                <Link to={`/allbeers/${beer._id}`}> {beer.name} </Link></p>
                        })
                    
                    }
                </h3>
            </div>
        )
    }
}

export default Beers
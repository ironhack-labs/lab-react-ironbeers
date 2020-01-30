import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class main extends Component {
    render() {
        return (
            <div>
                <img src='./images/beers.png' alt="why No pic here ?"></img><br />
                <h3><Link to={'./beers'} className=''>All Beers</Link></h3><br />
                <p>check out all beers here</p>

                <img src='./images/random-beer.png' alt="why No pic here ?"></img><br />
                <h3><Link to={'/randombeer'} className=''>Random Beer</Link></h3><br />
                <p>get some random beer here</p>

                <img src='./images/new-beer.png' alt="why No pic here ?"></img><br />
                <h3><Link to={'/newbeer'} className=''>New Beer</Link></h3><br />
                <p>create a new beer here ?</p>
            </div>
        )
    }
}

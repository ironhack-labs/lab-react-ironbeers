import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Home extends Component {
    state = {random:''}
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response=>{
            let rbeer = response.data
            console.log(rbeer._id)
            this.setState({
                random:rbeer._id
            })
        })
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div className='home-container'>
                <Link className='link-home' to='/all'>
                    <div className='home-part'>
                        <img src="images/beers.png" alt=""/>
                        <h3>All Beers</h3>
                        <p>View our whole selection of available beers.</p>
                    </div>
                </Link>                
                <Link className='link-home' to={`/beer/${this.state.random}`}>
                    <div className='home-part'>
                        <img src="images/random-beer.png" alt=""/>
                        <h3>Random Beer</h3>
                        <p>Up for a surpise? <br/>Let us choose a random beer for you!</p>
                    </div>
                </Link>
                <Link className='link-home' to='/new'>
                    <div className='home-part'>
                        <img src="images/new-beer.png" alt=""/>
                        <h3>New Beer</h3>
                        <p>Know a beer that we don't? Add your own!</p>
                    </div>
                </Link>
            </div>
        )
    }
}

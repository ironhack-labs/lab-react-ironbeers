import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={'/all_beers.jpg'} alt="All beers" />
                    <div className="card-body">
                        <Link to='/beers'><h3 className="card-title">All Beers</h3></Link>
                        <p className="card-text text-secondary">Do you like handcrafted beer? Look for your next-to-try beer on this catalogue!</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={'/random_beer.png'} alt="Random beer" />
                    <div className="card-body">
                        <Link to='/random-beer'><h3 className="card-title">Random Beers</h3></Link>
                        <p className="card-text text-secondary">If you want us to give an idea of a random handcrafted beer, click here!</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={'/new_beer.jpg'} alt="New beer" />
                    <div className="card-body">
                        <Link to='/new-beer'><h3 className="card-title">New Beer</h3></Link>
                        <p className="card-text text-secondary">Do you think the best handcrafted beer is not in our catalogue? Share it with the community!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home


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
                        <p className="card-text text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptates quis placeat totam dolore perferendis cumque repellendus molestiae! Consequatur officia sunt in quisquam adipisci?</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={'/random_beer.png'} alt="Random beer" />
                    <div className="card-body">
                        <Link to='/random-beer'><h3 className="card-title">Random Beers</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex doloremque sapiente culpa ducimus eius itaque! Sit eum possimus fugit! Inventore, dignissimos ducimus. Ex.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={'/new_beer.jpg'} alt="New beer" />
                    <div className="card-body">
                        <Link to='/new-beer'><h3 className="card-title">New Beer</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi harum atque alias eos dolore. Totam architecto qui dolorum quae similique in, corrupti labore?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home


import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {

    render() {
        return (
            <div>
                 <div className="card">
                    <img className="card-img-top imagen" src={'/beers.jpeg'} alt="All beers" />
                    <div className="card-body">
                        <Link to='/beers'><h3 className="card-title">All Beers</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptates quis placeat totam dolore perferendis cumque repellendus molestiae! Consequatur officia sunt in quisquam adipisci?</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top imagen" src={'/randomBeer.jpeg'} alt="Ramdom beers" />
                    <div className="card-body">
                        <Link to='/random'><h3 className="card-title">Ramdom Beer</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptates quis placeat totam dolore perferendis cumque repellendus molestiae! Consequatur officia sunt in quisquam adipisci?</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top imagen" src={'/newBeer.jpeg'} alt="New beer" />
                    <div className="card-body">
                        <Link to='/new'><h3 className="card-title">New Beer</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptates quis placeat totam dolore perferendis cumque repellendus molestiae! Consequatur officia sunt in quisquam adipisci?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

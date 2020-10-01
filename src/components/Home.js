import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import allBeersImg from '../images/500_F_163328662_e1TGnUONPP3FVDX3Q9rDwptw7t1VdyM7.jpg'

class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {

        return (
            <div className="container-flex">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="Card">
                            <img src={allBeersImg} className="card-img-top" alt="All Beers"/>
                            <div className="card-body">
                                <Link to="/beers"><h3 className="card-title">All Beers</h3></Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie nunc lectus, in congue arcu fermentum tincidunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
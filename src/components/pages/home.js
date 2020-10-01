import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <>
                <Link className="list-group-item list-group-item-action cardHome"  to='/allBeers'>
                    <div className="card " >
                        <img src="https://www.brandonsbbq.com/wp-content/uploads/2014/06/ALL-BOTTLED-BEERS.jpg" className="card-img-top imgBeer" alt="all bears" />
                        <div className="card-body">
                            <h5 className="card-title">All Beers</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Link>

                <Link className="list-group-item list-group-item-action cardHome" to='/randomBeer'>
                    <div className="card " >
                        <img src="https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/morningadvertiser.co.uk/drinks/beer/craft-beer-pricing-out-poorer-consumers-claims-community-pub-owner/2750307-1-eng-GB/craft-beer-pricing-out-poorer-consumers-claims-community-pub-owner_wrbm_large.jpg" className="card-img-top imgBeer" alt="Ramdom bears" />
                        <div className="card-body">
                            <h5 className="card-title">Ramdom Beers</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Link>

                <Link className="list-group-item list-group-item-action cardHome" to='/newBeer'>
                    <div className="card " >
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/03/17/craft-beer.jpg" className="card-img-top imgBeer" alt="New bears" />
                        <div className="card-body">
                            <h5 className="card-title">New Beers</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default Home
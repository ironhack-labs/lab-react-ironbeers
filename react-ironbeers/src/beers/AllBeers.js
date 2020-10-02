import React, { Component } from 'react'
import NavBar from '../header/NavBar'
import beerService from '../beers/service/beers.service'
import BeerSingleCard from './BeerSingleCard'
import 'bootstrap/dist/css/bootstrap.css';

class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            allBeers: []
        }
        this.beerService = new beerService()
    }

    componentDidMount = () => this.loadBeer()

    loadBeer = () => {
        this.beerService
            .getAllBeers()
            .then(data => this.setState({ allBeers: data.data }))
            .catch(err => console.log('err: ', err))
    }


    render() {

        return (
            <React.Fragment>
                <NavBar />
                <div className="contaier-flex">
                    <div className="row">
                        <div className="col-sm-2">
                            {this.state.allBeers.map(elm => <BeerSingleCard key={elm._id} {...elm} />)}

                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default AllBeers
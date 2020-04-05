import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class allBeers extends Component {
    constructor(props) {
        super(props);
        this.state = { beerList : [] }
    }

    getAllBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(responseFromApi => {
            this.setState({beerList :responseFromApi.data})
        })
    }

    componentDidMount() {
        this.getAllBeers();
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.beerList.map(eachBeer => {
                        return (
                        <div>
                            <img style={{height:'150px'}} src={eachBeer.image_url} alt=''/> 
                                <Link to={`/allBeers/${eachBeer._id}`} ><h3> {eachBeer.name}</h3></Link> 
                                <span> {eachBeer.tagline}</span>
                                <span>{eachBeer.contributed_by}</span>
                        </div>
                        )})}
              </div>
            </div>
        )
    }
}

export default allBeers;
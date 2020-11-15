import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

class Beers extends Component {

    state = {
        allBeers: []
    }

    componentDidMount = async () => {
        const ApiBeers = await axios.get("https://api.punkapi.com/v2/beers")
        console.log(ApiBeers.data)
        this.setState({ allBeers: ApiBeers.data})
    }

    render() {
        return (
            <div>
                <Header />
                <div className="eachBeer">
                    {this.state.allBeers.map((eachBeer, index) =>{
                        return(
                            <div key={index}>
                                <img src={eachBeer.image_url} alt={eachBeer.name}  style={{width: 50}}/>
                                <div>
                                    <h4><Link to={{pathname:`/beers/${eachBeer.id}`, state:{beersFromUrl: this.state.allBeers}}}>{eachBeer.name}</Link></h4>
                                    <h5>{eachBeer.tagline}</h5>
                                    <h6>Created by: {eachBeer.contributed_by}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Beers;

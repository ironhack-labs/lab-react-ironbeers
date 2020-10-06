import React from 'react'
import Axios from 'axios'
import {
    Link
} from "react-router-dom";

export default class Beersdetail extends React.Component {

    state = {
        beer: []
    }

    componentDidMount() {
        const beerId = this.props.match['params'].beerId

        Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                this.setState({
                    beer: response.data
                })
            })

        
    }

    render() {
        return (
            <div>
                <div className="home-beers">
                    <Link to="/beers" style={{ textAlign: 'center' }}>
                        <img className="home-icon-img" src="../igloo-solid.svg" alt="Home" />
                    </Link>
                </div>
                <div className="card" style={{ Width: '18rem' }}>
                    <img src={this.state.beer.image_url} className="card-img-top" alt={this.state.beer.name} />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-9">
                                <h5 className="card-title">{this.state.beer.name}</h5>
                            </div>
                            <div className=" level col-3 text-right">
                                <p>{this.state.beer.attenuation_level}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <h6>{this.state.beer.tagline}</h6>
                            </div>
                            <div className="col-4 text-right font-weight-bold">
                                <p>{this.state.beer.first_brewed}</p>
                            </div>
                        </div>
                        <p className="card-text">{this.state.beer.description}</p>
                        <p className="card-text contributed">{this.state.beer.contributed_by}</p>

                    </div>
                </div>
            </div>
        )
    }
}

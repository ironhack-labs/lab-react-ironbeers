import React, { Component } from "react"
import { Link } from 'react-router-dom';
import houseLogo from "../../assets/pngfind.com-white-house-logo-png-5898244.png"
import axios from "axios"
import "./BeerList.css"
import cargando from "../../assets/loading.gif"

class BeerList extends Component {
    constructor (props) {
        super(props)

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((beersArr) => {
            this.setState (
                {beers: beersArr.data}
            )
        })
    }

    render() {
        
        if(this.state.beers.length === 0) {
            return (
                <div>
                    <img className="cargando" src={cargando}/>
                </div>
            )
        }

        const createdBy = (author) => {
            let authorArr = author.split("<")
            return authorArr[0]
        }

        return (
            <div className="BeerList">
                <Link to="/" className="blue-header">
                    <img src={houseLogo}/>
                </Link>
                {this.state.beers.map ((beer) => {
                    return (
                        <Link to={`/${beer._id}`} key={beer._id}>
                            <div className="BeerList">
                                <div className="beerGrandparent">
                                    <div className="beerContainer">
                                        <div className="beerItem">
                                            <img src={beer.image_url} />
                                            <div className="beerInfo">
                                                <h1>{beer.name}</h1>
                                                <h3>{beer.tagline}</h3>
                                                <p>Created by: {createdBy(beer.contributed_by)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default BeerList
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./SingleBeer.css"
import houseLogo from "../../assets/pngfind.com-white-house-logo-png-5898244.png"
import axios from "axios"

class SingleBeer extends Component {
    state = {
        beer: null
    }

    componentWillUnmount() {
        this.setState({
            beer: null
        })
    }


    render () {
    const createdBy = (author) => {
        let authorArr = author.split("<")
        return authorArr[0]
    }

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    .then((beer) => {
        this.setState({
            beer: beer.data
        })
    })
    .catch((e) => {
        console.error(e)
    })

    return (
        <div>
            <div className="blue-header">
                <Link to="/"><img src={houseLogo}/></Link>
            </div>
            {this.state.beer ? 
            <div className="BeerList" key={this.state.beer._id}>
                <div className="beerGrandparent">
                    <div className="beerContainer">
                        <div className="beerItem-single">
                            <img src={this.state.beer.image_url} />
                            <div className="beerInfo-single">
                                <div className="attenuation">
                                    <h1>{this.state.beer.name}</h1>
                                    <h1 className="grey attenuation-level">{this.state.beer.attenuation_level}</h1>
                                </div>
                                <div className="brewed">
                                    <h3 className="grey">{this.state.beer.tagline}</h3>
                                    <h5>{this.state.beer.first_brewed}</h5>
                                </div>
                                <p>
                                    {this.state.beer.description}
                                </p>
                                {<p className="grey">Created by: {createdBy(this.state.beer.contributed_by)}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
            <p>Cargando...</p>
            }
            
        </div>
        )
    }
}

export default SingleBeer
import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

class BeerList extends React.Component {
    state = {
        beers: []
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(beers => {
            console.log("Estas son las cervezas:")
            this.setState({beers: beers.data})
        })
    }

    render(){
        return(
            <div className="BeerList">
                {this.state.beers.map((beer) => {
                    return (
                        <Link className="BeerList-item" to={"/beers/" + beer._id} key={beer._id}>
                            <div className="BeerList-item-img">
                                <img src={beer.image_url} />
                            </div>
                            <div className="BeerList-item-text">
                                <p>{beer.name}</p>
                                <p>{beer.tagline}</p>
                                <span>Creade by: {beer.contributed_by}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default BeerList;
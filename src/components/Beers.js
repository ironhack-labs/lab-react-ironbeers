import React, {Component} from "react"
import axios from "axios"
import Header from "./Header"
import { Link } from "react-router-dom"

class Beers extends Component {
    state= {
        beers: []
    }

    async getBeersList() {
        const getBeers = await axios.get("https://api.punkapi.com/v2/beers")
        this.setState({
            beers: getBeers.data
        })
        console.log(this.state.beers)
    }

    componentDidMount() {
        this.getBeersList()
    }

    render() {
        return (
            <div className= "page">
                <Header />
                <div className= "beer-list">
                {this.state.beers.map((beer) => {
                   return (<div className= "beer-container" key={beer.id}>
                       <Link to={`beers/${beer.id}`}>
                        <img className= "beer-image" src={beer.image_url} alt=""/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                       
                        <p><span>Created by</span> {beer.contributed_by}</p>
                       </Link>

                    </div>)
                })}

                </div>
                <div>
                <Link className = "button-link" to={`/random-beer`}>Get a random beer</Link>
                <Link className = "button-link" to = {`/new-beer`}>Insert your beer</Link>

                </div>
            </div>
        )
    }
}

export default Beers

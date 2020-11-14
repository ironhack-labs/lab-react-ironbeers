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
            <div>
                <Header />
                {this.state.beers.map((beer) => {
                   return (<div key={beer.id}>
                       <Link to={{pathname:`beers/${beer.id}`, state: {beers: this.state.beers}}}>
                        <img src={beer.image_url} alt=""/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                       
                        <p><span>Created by</span> {beer.contributed_by}</p>
                       </Link>

                    </div>)
                })}
            </div>
        )
    }
}

export default Beers

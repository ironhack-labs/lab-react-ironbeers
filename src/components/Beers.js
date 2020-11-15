import React, {Component} from "react"
import axios from "axios"
import Header from "./Header"
import { Link } from "react-router-dom"
import NewBeer from "./NewBeer"

class Beers extends Component {
    state= {
        beers: []
    }

    componentDidMount() {
        this.getBeersList()
    }
    async getBeersList() {
        const getBeers = await axios.get("https://api.punkapi.com/v2/beers")
        this.setState({
            beers: getBeers.data
        })
        console.log(this.state.beers)
    }

    handleAddBeer =(beer) => {
        const beersCopy = [...this.state.beers]
        beersCopy.push(beer)
        this.setState({
            beers: beersCopy
        })
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
                {console.log(this.state.beers)}
                {this.state.beers ? <NewBeer addBeer = {this.handleAddBeer}  /> : this.getBeersList}
       
                {/* <Link className = "button-link" to = {`/new-beer`}>Insert your beer</Link> */}

                </div>
            </div>
        )
    }
}

export default Beers

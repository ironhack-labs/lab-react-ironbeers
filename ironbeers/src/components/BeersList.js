import React, {Component} from 'react'
import Navbar from "./NavBar"
import beersService from "../service/beersService"
import { Link } from 'react-router-dom'


class BeersList extends Component {

    constructor () {
        super()

        this.state = {
            beers: []
        }

        this.service = new beersService()
    }
    
    componentDidMount() {
        this.service.getAllBeers()
        .then(beers => {
            this.setState({
                beers: beers
            })
        })
    }   

        render () {
        return (
            <section>
                <nav>
                    <Navbar />
                </nav>
                <article>
                    {
                        this.state.beers.map((beer,idx) => {
                            return <article className="beer" key={idx}><img src={beer.image_url} alt={beer.name} /><div className="beer-info"><Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link><p>{beer.tagline}</p><p><strong>Created by:</strong>{beer.contributed_by}</p></div></article>
                        })
                    }
                </article>                           
            </section>
        )
    }
}

export default BeersList;

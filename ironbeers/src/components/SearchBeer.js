import React, {Component} from 'react'
import Navbar from "./NavBar"
import beersService from "../service/beersService"
import { Link } from 'react-router-dom'

class SearchBeer extends Component {

    constructor () {
        super()

        this.state = {
            searchValue: "",
            beers: []
        }

        this.service = new beersService()
    }

    search = (e) => {

            this.setState({
                searchValue: e.target.value
            })    

            if(e.target.value){
                this.service.searchBeer(e.target.value)
                .then(beers => {
                    this.setState({beers: beers})
                })    
            }
    }

    render () {
        
        return (
            <section>
                <nav>
                    <Navbar />
                </nav>
                <form>
                    <input type="search" value={this.state.searchValue} onChange={this.search}></input><br /><br />            
                </form>
                <article>
                    {this.state.beers &&
                        this.state.beers.map((beer,idx) => {
                            return <article className="beer" key={idx}><img src={beer.image_url} alt={beer.name} /><div className="beer-info"><Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link><p>{beer.tagline}</p><p><strong>Created by:</strong>{beer.contributed_by}</p></div></article>
                        })
                    }
                </article>                           
            </section>
        )
    }
}

export default SearchBeer

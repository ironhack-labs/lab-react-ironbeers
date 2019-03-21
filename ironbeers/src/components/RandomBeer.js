import React, {Component} from 'react'
import Navbar from "./NavBar"
import beersService from "../service/beersService"

class RandomBeer extends Component {

    constructor (props) {
        super(props)

        this.state = {
            beer: {}
        }

        this.service = new beersService()
    }

    componentDidMount() {
        this.service.getRandomBeer()
        .then(beer => {
            console.log(beer)
            this.setState({
                beer: beer[0]
            })
        })
    }   

    render () {
        return (
            <main>
                <nav>
                    <Navbar />
                </nav>
                <section className="single-beer">
                    <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                    <h2>{this.state.beer.name}</h2>
                    <p>{this.state.beer.tagline}</p>
                    <p><strong>First brewed:</strong> {this.state.beer.first_brewed}</p>
                    <p><strong>Attenuation level:</strong> {this.state.beer.attenuation_level}</p>
                    <p>{this.state.beer.description}</p>
                    <p><strong>Contributed by: </strong>{this.state.beer.contributed_by}</p>
                </section>
            </main>
        )
    }
}

export default RandomBeer

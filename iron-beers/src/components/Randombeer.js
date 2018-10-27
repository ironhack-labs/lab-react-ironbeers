import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Randombeer extends Component {
    constructor(props) {
        super(props)
        this.state = { randomBeer: '' }
    }

    getRandomBeer() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/random")
            .then(response => {
                console.log(response.data[0])
                this.setState({ randomBeer: response.data[0] })
            }
            )
    }

    componentDidMount() {
        this.getRandomBeer();

    }

    render() {
        return (
            <div>
                <header className="header-component">
                    <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymKW7blR5IoWJz4L9BuXeng1G3jPF3F-M1eQ7mQURgnsHm42d" alt="home-img"></img></Link>
                </header>
                <div className="beer-detail">

                    <span><img src={this.state.randomBeer.image_url} alt="img-beer" /></span>
                    <h1>{this.state.randomBeer.name}</h1>
                    <div>{this.state.randomBeer.tagline}</div>
                    <div>{this.state.randomBeer.first_brewed}</div>
                    <div>{this.state.randomBeer.attenuation_level}</div>
                    <div>{this.state.randomBeer.description}</div>
                    <div>{this.state.randomBeer.contributed_by}</div>
                    <Link to="/beers">Back to All beers</Link><br />
                    <Link to="/">Back to Home</Link>
                </div>
            </div>

        )
    }

}

export default Randombeer;
import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'


class SingleBeer extends Component {
    state = {
        oneBeer: null
    }
    componentDidMount() {
        if (this.props.location.pathname !== '/random-beer') {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then((beer) => {
                this.setState({ oneBeer: beer.data })
            })
            .catch((err) => console.log(err))
        }
        else {
            axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
                .then((random) => {
                    this.setState({ oneBeer: random.data })
                })
                .catch((err) => console.log(err))
        }


    }
    render() {

        if (!this.state.oneBeer) { return <div>Loading...</div> }
        return (
            <div>
                <img src={this.state.oneBeer.image_url} style={{ width: 60, margin: 20 }} alt="" />
                <h1>{this.state.oneBeer.name}</h1>
                <h2 style={{ color: "lightgrey" }}>{this.state.oneBeer.tagline}</h2>
                <p style={{ width: 600, margin: "30px auto", fontSize: "1.5em" }}>{this.state.oneBeer.description} </p>


            </div>
        )
    }

}

export default withRouter(SingleBeer)

import axios from "axios";
import React, { Component } from "react";
import Header from "../home-page/Header";

class BeerDetail extends Component {

    state = {
        beer: null
    }

    getBeer() {
        const beerId = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                this.setState({ beer: response.data })
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getBeer()
    }

    render() {
        const { beer } = this.state
        if (!beer) return <></>
        return (
            <div>
                <Header />
                <img src={beer.image_url} alt={beer.name}></img>
            </div>
        )
    }
}

export default BeerDetail
import React, { Component } from 'react'
import '../App.css';
import TopBar from './TopBar'
import axios from 'axios'
class Random extends Component {
    state = {
        beers: []
    }

    setBeers = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log(response.data.length)

                let random = Math.floor(Math.random() * response.data.length - 1);

                this.setState({
                    beers: response.data[random],

                });
            })


    }

    componentDidMount() {
        this.setBeers()
    }
    render() {
        const beer = this.state.beers
        return (
            <div className="main-content">
                <TopBar />

                <img className="imgid" src={beer.image_url} />

                <div className="beer-list-id">
                    <p className="line-items">
                        <span className="name-id">{beer.name}</span>
                        <span className="name-id">{beer.first_brewed}</span>


                    </p>
                    <p className="line-items">
                        <span className="tag-id">{beer.tagline}  </span>
                        <span className=""> {beer.attenuation_level
                        }</span>

                    </p>
                    <span className="desc-id">{beer.description}</span>
                    <span className="tag-id">{beer.contributed_by}</span>

                </div>

            </div>
        )
    }
}
export default Random
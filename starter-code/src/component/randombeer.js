import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
            .then(listBeers => {
                const beer = listBeers.data
                this.setState({ beers: beer.sort(() => Math.random() - 0.5) })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.beers.slice(0, 1).map((element, index) => {
                        return <div key={index}>
                            <Link to={`/beers/${element._id}`}>
                            <img src={element.images_url} alt={element.contributed_by} ></img>
                            <p>{element.name}</p>
                            <p>{element.tagline}</p>
                            <p>{element.first_brewed}</p>
                            <p>{element.attenuation_level}</p>
                            <p>{element.description}</p>
                            <p>{element.contributed_by}</p>
                            </Link>
                        </div>
                    })
                }
            </div>
        )
    }
}



export default  RandomBeer;
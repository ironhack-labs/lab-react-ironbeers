import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Beer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }

    }
    componentDidMount() {
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
            .then(listBeers => {
                const beers = listBeers.data
                this.setState({ beers })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.beers.map((element, index) => {
                        return <div key={index}>
                            <Link to={`/beers/${element._id}`}>
                                <img src={element.images_url} alt={element.contributed_by}></img>
                                <h1>{element.name}</h1>
                                <p>{element.tagline}</p>
                                <p>{element.contributed_by}</p>
                                </Link>
                        </div>
                    })
                }
            </div>

        )
    }
}

export default Beer;
import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UniqueBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
        console.log(this.state.beer)
    }
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${id}`)
            .then(uniquebeer => {
                const beer = uniquebeer.data
                this.setState({ beers: [...this.state.beers, beer] })
                console.log(this.state.beers)
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.beers.map((element, index) => {
                        return <div key={index}>
                            <img src={element.images_url} alt={element.contributed_by} ></img>
                            <p>{element.name}</p>
                            <p>{element.tagline}</p>
                            <p>{element.first_brewed}</p>
                            <p>{element.attenuation_level}</p>
                            <p>{element.description}</p>
                            <p>{element.contributed_by}</p>
                        </div>
                    })
                }
            </div>
        )
    }

}


export default UniqueBeer;
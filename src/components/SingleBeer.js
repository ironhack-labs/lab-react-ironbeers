import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'



class SingleBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneBeer: ''
        };
    }

    componentDidMount() {

        axios.get(
            'https://ih-beers-api2.herokuapp.com/beers/' +
            this.props.match.params.beerId
        )
            .then((res) => {
                this.setState({
                    oneBeer: res.data
                })
            })
    }

    render() {
        // if (!this.state.todo){
        //     return <p>Loading ....</p>
        // }

        // const {image, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.oneBeer

        return (
            <div>
                <img src={this.state.oneBeer.image_url} alt = "" />
                <p> {this.state.oneBeer.name}</p>
                <p> {this.state.oneBeer.tagline}</p>
                <p> {this.state.oneBeer.frist_brewed}</p>
                <p> {this.state.oneBeer.attenuation_level}</p>
                <p> {this.state.oneBeer.description}</p>
                <p> {this.state.oneBeer.contributed_by}</p>
                <Link to='/singlebeer'>Single Beer</Link>

            </div>
        )
    }
}

export default SingleBeer
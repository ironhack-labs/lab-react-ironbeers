import React, { Component } from 'react'
import axios from 'axios';

export default class DetailsBeer extends Component {
    constructor(){
        super();
        this.state = { singleBeer: null };
    }
    getOneBeer = () => {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/` + this.props.match.params.id)
            .then(responseFromApi => {
                console.log('respuesta de la busqueda de unaaa')
                console.log(responseFromApi);
                this.setState({
                    singleBeer: responseFromApi.data
                })
            })
    }
    componentDidMount() {
        this.getOneBeer();
    }
    render() {
        return this.state.singleBeer ? (
            <div>
                <img src={this.state.singleBeer.image_url} alt="beerImage" />
                <h1>{this.state.singleBeer.name}</h1>
                <p>{this.state.singleBeer.description}</p>
            </div>
        )
            :
            (<p>Loading...</p>)
    }
}

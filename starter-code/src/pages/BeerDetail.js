import React, {Component} from 'react'
import axios from 'axios';

class BeerDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
    }
    componentDidMount() {
        axios
            .get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.beerId}`)
            .then(response => {
                this.setState({
                    beer: response.data
                })
            })
            .catch((err)=>{}
            )
    }
    render() {
        return (
            <div>
                <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                <h1>{this.state.beer.name}</h1>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
                {/* <h1>ID: {this.props.match.params.beerId}</h1> */}
            </div>
        )
    }
}

export default BeerDetail
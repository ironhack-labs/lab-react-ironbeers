import React, { Component } from 'react';
import BeerServices from '../../services/beers.services';


const beerList = [...BeerServices];

export default class Beers extends Component {
    constructor (props) {
        super (props);

        this.state = {
            beers: []
        }

        this.beerService = new BeerServices();
    }

    componentDidMount() {
        this.beerService.getAll()
        .then((response) => {
            console.log(response.data)
            this.setState({ beers: response.data })
        })
        .catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                {this.state.beers.map((beer) => {
                    return (
                        <div>
                            <Link to={`/${beer._id}`}>
                                <div>
                                    <img src={beer.image_url}></img>
                                    <h3>{beer.name}</h3>
                                    <h4>{beer.tagline}</h4>
                                    <p>{beer.contributed_by}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

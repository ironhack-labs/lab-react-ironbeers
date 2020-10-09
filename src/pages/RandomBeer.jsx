import React, {Component} from 'react';
import Header from '../components/Header';
import Loader from '../components/Loader';
import beerAPI from '../api/beerApi';

import "../styles/SingleBeer.css";


class RandomBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            beer: null,
        };
    };

    async componentDidMount() {
        try {
            const beer = await beerAPI.getRandomBeer();
            console.log(beer)

            this.setState({
                isLoading:false,
                beer: beer.data
            });

        } catch(errApi) {
            console.log(errApi);
        }
    }

    render() {
        return (
            <>
            <Header />
                <div className="single-beer">
                    
                    <div className="container">
                        {this.state.isLoading ? (
                            <Loader />
                        ) : (
                            <>
                                <img className="image" src={this.state.beer.image_url} alt={this.state.beer.name}/>
                                <div className="flex-between margin-b-10">
                                    <h1 className="title">{this.state.beer.name}</h1>
                                    <span className="att-levl">{this.state.beer.attenuation_level}</span>
                                </div>
                                
                                <div className="row flex-between margin-b-10">
                                    <h2 className="tagline">{this.state.beer.tagline}</h2>
                                    <span className="first-brewed">{this.state.beer.first_brewed}</span>
                                </div>
                                <p className="description margin-b-15">
                                    {this.state.beer.description}
                                </p>

                                <p className="contributed">
                                {this.state.beer.contributed_by}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default RandomBeer

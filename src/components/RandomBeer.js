import React from 'react';
import axios from 'axios';
import Navbar from './NavBar';

class RandomBeer extends React.Component {

    state = {
        beer: null,
        loading: true
    };

    componentDidMount() {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(resp => {
                this.setState({
                    beer: resp.data,
                    loading: false
                });
            });
    }

    render() {

        return (
            <div>
                <Navbar />
                {/* Bootstrap spinner */}
                {this.state.loading && (<div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>)}

                {/* first data has to be there (loaded) */}
                {/* if data is not there you would try to show for example this.state.beer.null instead of this.state.beer.image_url and example this.state.beer.null will always cause errors */}
                {this.state.beer && (
                    <div>
                        <img src={this.state.beer.image_url} alt='featured beer' className='small-beer-picture' />
                        <h2>{this.state.beer.name}</h2>
                        <p>{this.state.beer.tagline}</p>
                        <p>{this.state.beer.first_brewed}</p>
                        <p>{this.state.beer.attenuation_level}</p>
                        <p>{this.state.beer.description}</p>
                        <p>{this.state.beer.contributed_by}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default RandomBeer;
import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class Random extends Component {

    state = {
        currentBeer: []
    }

    componentDidMount() {
        Axios.get('https://ih-beer-api.herokuapp.com/beers/random')
            .then(random => {
                this.setState({
                    currentBeer: random.data
                })
            })
    }

    render() {
        console.log(this.state.currentBeer)
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br></br>
                            <h1>{this.state.currentBeer.name} {this.state.currentBeer.attenuation_level}</h1>
                            <img src={this.state.currentBeer.image_url} alt="img" style={{ height: 300 }} />
                            <h3>{this.state.currentBeer.tagline}</h3>
                            <p>first Brewed: {this.state.currentBeer.first_brewed}</p>
                            <p>{this.state.currentBeer.description}</p>
                            <p><strong>Contributed by:</strong><i> {this.state.currentBeer.contributed_by}</i></p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Random;

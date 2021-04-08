import React, { Component } from 'react';
import { getRandomBeer } from '../service/BaseService';
import PacmanLoader from "react-spinners/PacmanLoader";

class RandomBeer extends Component {

    state = {
        beer: null,
        loading: true
    }

    componentDidMount(){
        getRandomBeer()
            .then((response) => this.setState({beer: response, loading: false}))
    }

    render() {
        const { beer, loading } = this.state
        return (
            loading
                ?
                (
                    <div className="text-center" >
                        <PacmanLoader color="yellow" />
                    </div>
                )
                :
                (
                    <div className="container">
                        <div className="card mt-5 " style={{ maxWidth: '1000px', margin: "0 auto" }}>
                            <img src={beer.image_url} className="card-img-top rounded mx-auto d-block mt-3" alt={beer.name} style={{ width: '60px', height: '150px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{beer.name} <span style={{ marginLeft: '40px' }}>{beer.attenuation_level}</span></h5>
                                <p className="card-text text-center"><small className="text-muted">{beer.tagline}</small>  {beer.first_brewed}</p>
                                <p className="card-text text-center">{beer.description}</p>
                                <p className="card-text text-center"><small className="text-muted">{beer.contributed_by}</small></p>
                            </div>
                        </div>
                    </div>
                )
        );
    }
}

export default RandomBeer;
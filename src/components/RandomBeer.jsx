import React, { Component , Fragment} from 'react';
import { getRandomBeer } from '../services/BaseSevices';
import Header from './Header';
import SyncLoader from 'react-spinners/SyncLoader';




class BeerRandom extends Component {

    state = {
        beer: null,
        loading: true
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        getRandomBeer()
        .then((beer) => { this.setState({ beer, loading: false }) })


    }

    render() {
        const { beer, loading } = this.state;
      



        return (
            <div className="BeerRandom" >
                <Header />
                {
                    loading
                        ? (
                            <div className="text-center">
                                <SyncLoader color="blue" />
                            </div>
                        )
                        :
                        (
                            <Fragment>
                              <span className="d-flex justify-content-center py-5" >
                                    <img src={beer.image_url} alt={beer.name} style={{ height: 350 }} />

                                </span>
                                <span className="d-flex justify-content-between">
                                    <h2>{beer.name}</h2>
                                    <h2 className="text-muted">{beer.attenuation_level}</h2>

                                </span>
                                <span className="d-flex justify-content-between"> 
                                    <p className="text-muted">{beer.tagline}</p>
                                    <p style={{fontWeight: 800}}>{beer.first_brewed}</p>

                                </span>
                                <p>{beer.description}</p>
                                <p className="text-muted" style={{fontWeight: 800}}>{beer.contributed_by}</p>

                            </Fragment>
                        )

                }
            </div>
        );


    }
}

export default BeerRandom;
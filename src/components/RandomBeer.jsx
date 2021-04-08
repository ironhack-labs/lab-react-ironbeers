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
                                <img src={beer.image_url} alt="" />
                                <h2>{beer.name}</h2>
                                <p>{beer.attenuation_level}</p>
                                <p>{beer.tagline}</p>
                                <p>{beer.first_brewed}</p>
                                <p>{beer.description}</p>
                                <p>{beer.contributed_by}</p>
                            </Fragment>
                        )

                }
            </div>
        );


    }
}

export default BeerRandom;
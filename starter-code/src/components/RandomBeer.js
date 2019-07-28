import React, { Component, Fragment } from 'react';
import Loader from './Loader';
import Header from './Header';
import BeerModal from './BeerModal';
import axios from 'axios';

class RandomBeer extends Component {
    state = {
        beer: {},
        loader: true,
        modal: false
    }

    componentDidMount() {
        axios.get('https://sample-api-ih.herokuapp.com/random')
            .then( res => {
                this.setState({
                    beer: res.data,
                    loader: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggleBeerModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="row random-beer-row">
                        {
                            this.state.loader ?
                            <Loader />
                            :
                            <div className="col s12 m6 push-m3">
                                <div className="card horizontal random-card">
                                    <div className="card-image">
                                        <img src={this.state.beer.image_url} />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <span className="card-title">{this.state.beer.name}</span>
                                            <p>{this.state.beer.tagline}</p>
                                            <span><b>Created by:</b> {this.state.beer.name}</span>
                                            <button onClick={this.toggleBeerModal} className="btn">See details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {
                    this.state.modal &&
                    <BeerModal {...this.state.beer} handleClick={this.toggleBeerModal} randomRoute />
                }
            </Fragment>
        )
    }
}

export default RandomBeer;

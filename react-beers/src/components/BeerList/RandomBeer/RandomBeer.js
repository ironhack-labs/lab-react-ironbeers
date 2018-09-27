import React, { Component } from 'react';
import './RandomBeer.css';
import Header from '../../../components/Header/Header';
import axios from 'axios';

class RandomBeer extends Component {

    state={
        beer: {}
    };

    componentDidMount() {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
            .then(res => {
                this.setState({
                    beer: res.data[0]
                });
            })
            .catch(() => {
                console.log('Something went wrong.');
            });
    }

    render() {
        const { beer } = this.state;

        return (
            <div>
                <Header />
                <div className="row info-wrap">
                    <div className="col-12 col-md-4 info-blog">
                        <div className="info-img">
                            <img src={ beer.image_url } alt="infoImage"/>
                        </div>
                        <div className="info-name">
                            <p className="b-name">{ beer.name }</p>
                            <p className="b-level">{ beer.attenuation_level }</p>
                        </div>
                        <div className="info-tag">
                            <p className="b-tgl">{ beer.tagline }</p>
                            <p className="b-brewed">{ beer.first_brewed }</p>
                        </div>
                        <p className="info-descr">{ beer.description }</p>
                        <p className="info-contr">{ beer.contributed_by }</p>
                    </div>
                </div>
            </div>

        );
    }


}

export default RandomBeer;
import React, { Component } from 'react';
import './BeerList.css';
import BeerTab from './BeerTab/BeerTab';
import Header from '../Header/Header';
import axios from 'axios';

class BeerList extends Component {
    state={
      beerList: []
    };

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    beerList: res.data
                });
            })
            .catch(() => {
                console.log('Something went wrong!');
            });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {
                        this.state.beerList.map((beer, id) => {
                            const { image_url, name, tagline, contributed_by } = beer;
                            return <BeerTab key={ beer + id } image={ image_url } name={ name } tagline={ tagline } contributed_by={ contributed_by } />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default BeerList;
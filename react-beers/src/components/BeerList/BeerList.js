import React, { Component } from 'react';
import './BeerList.css';
import BeerTab from './BeerTab/BeerTab';
import Header from '../Header/Header';
import axios from 'axios';

class BeerList extends Component {
    state={
      beerList: [],
      name: ""
    };

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
            .then((res) => {
                this.setState({
                    beerList: res.data
                });
            })
            .catch(() => {
                console.log('Something went wrong!');
            });
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            name: value
        });

        if(value !== "") {
            axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${value}`)
                .then((res) => {
                    this.setState({
                        beerList: res.data
                    });
                })
                .catch( error => console.log(error) )
        }
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container beerCont">
                    <div className="form-group search col-12 col-md-5">
                        <label htmlFor="name">Search beer:</label>
                        <input type="text" value={ this.state.name} className="form-control"  name="name" onChange={ this.handleChange } placeholder="Search..."/>
                    </div>
                    {
                        this.state.beerList.map((beer, id) => {
                            const { image_url, name, tagline, contributed_by, _id } = beer;
                            return <BeerTab key={ beer + id } image={ image_url } name={ name } tagline={ tagline } contributed_by={ contributed_by } id={ _id } />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default BeerList;
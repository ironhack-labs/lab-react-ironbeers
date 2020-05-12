import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header"
import { getBeers, searchBeer } from "../services/beerService";
import { Link } from "react-router-dom";

class Beers extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        getBeers().then((res) => {
            const { data } = res;
            this.setState({ data })
        });
    }

    handleSearch = (e) => {
        let { value } = e.target;
        searchBeer(value).then((res) => {
            const { data } = res;
            this.setState({ data })
        })
    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar handleChange={this.handleSearch} />
                {this.state.data.map((item, index) => (
                    <div key={index} className="beers-container">
                        <div className="uk-height-medium uk-width-5-6 uk-padding-small beer-card" uk-grid="true">
                            <div className="uk-card-media-left uk-height-1-1 uk-width-1-4">
                                <img className="uk-height-1-1" src={item.image_url} alt="Beer" />
                            </div>
                            <div>
                                <div className="uk-card-body uk-text-left">
                                    <h2><Link to={`/beers/${item._id}`} className="uk-text-emphasis">{item.name}</Link></h2>
                                    <h4 className="uk-text-muted">{item.tagline}</h4>
                                    <p><span className="uk-text-bold">Created by: </span>{item.contributed_by ? item.contributed_by.replace(/<\w+>/, "") : "S/N"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Beers;
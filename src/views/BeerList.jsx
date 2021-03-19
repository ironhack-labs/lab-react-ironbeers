import React, { Component } from 'react';
import { listBeers } from './../services/beers-api';
import { Link } from 'react-router-dom';

class BeerList extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        this.loadBeerList();
      }


      async loadBeerList() {
        const list = await listBeers();
        this.setState({
          list: list
        });
      }

    render() {
        return (
            <div>
                <h1>List of Beers</h1>
                <ul>
                    {this.state.list.map((beer) => (
                        <li key={beer.id}>
                            <Link to={`/beers/${beer.id}`}>
                                <img src={beer.image_url} alt={beer.name} />
                                <h1>{beer.name}</h1>
                                <h3>{beer.tagline}</h3>
                                <h3>{beer.contributed_by}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BeerList;

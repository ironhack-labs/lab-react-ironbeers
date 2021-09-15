import React from 'react';
import './BeerList.css';
import axios from 'axios';
import BeerCard from "../beerCard/BeerCard";
import Header from '../header/Header';

export default class BeerList extends React.Component {
    state = {
		beer: null
	};

    componentDidMount ()  {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
              .then((res) => {
                  this.setState({ beer: res.data });
              })
        .catch(() => {
          console.log("Error");
        });
	}

    render() {
        if (!this.state.beer) {
			return "Loading...";
        }
        return(
            <div className='BeerList'>
                <Header />
                <div className='BeerList__container'>
                {this.state.beer.map(beer => (
                    <BeerCard
                    key={beer._id}
                    {...beer}
                    />
                    ))}
                    <hr /> 
                </div>
            </div>
        )
    }
}


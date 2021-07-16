import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import FilteredBeer from './FilteredBeer';

class BeersList extends React.Component {

state = {
beers: [],
filteredBeers: [],
}


    async componentDidMount() {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    

        this.setState({
        beers: response.data,
        filteredBeers: response.data,
    })
    }


    handleFilterBeer = (query) => {
        this.setState((previousState) => {
            return {
                filteredBeers: previousState.beers.filter((beer) => {
                    return beer.name.toLowerCase().includes(query.toLowerCase());
                }),
            };
        });
    };




render(){
    const {beers} = this.state
    const {filteredBeers} = this.state;
    return (
        <>
        <Navbar />

        <FilteredBeer filterBeer={this.handleFilterBeer}/>

        <div>
            {beers && beers.length ? filteredBeers.map((beer) => {
                return (
                    <>
                    <div>
                    <img src={beer.image_url} alt="beer" />
                    </div>
                    <div>
                    <NavLink key={beer._id} to={`/beers/${beer._id}`}><h3>{beer.name}</h3></NavLink>
                    
                    <h5>{beer.tagline}</h5>                    
                    <p><b>Created by:</b>{beer.contributed_by}</p>
                </div>
                </>
                )
            }
            ) : <p>Loading</p>

            }
        </div>
        </>
    )
}

}

export default BeersList;
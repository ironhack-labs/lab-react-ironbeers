import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import FilteredBeer from './FilteredBeer';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


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




    render() {
        const { beers } = this.state
        const { filteredBeers } = this.state;
        return (
            <>
                <Navbar />

                <FilteredBeer filterBeer={this.handleFilterBeer} />

                <div>
                    {beers && beers.length ? filteredBeers.map((beer) => {
                        return (
                            <>
                                
                                    <Card className="card">
                                        <CardImg className="card-img" top width="100%" src={beer.image_url} alt="beer" />
                                        <CardBody>
                                        <NavLink className="card-link" key={beer._id} to={`/beers/${beer._id}`}><CardTitle tag="h5">{beer.name}</CardTitle></NavLink>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">{beer.tagline}</CardSubtitle>
                                        <CardText className="card-text"><b>Created by:</b>{beer.contributed_by}</CardText>
                                            
                                        </CardBody>
                                    </Card>






                                  
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
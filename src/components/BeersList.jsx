import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import FilteredBeer from './FilteredBeer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



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
                                        <img  src={beer.image_url} alt="beer" style={{width: '90px'}}/>
                                        <CardContent>
                                        <NavLink className="card-link" key={beer._id} to={`/beers/${beer._id}`}><Typography tag="h2">{beer.name}</Typography></NavLink>
                                        <CardActions tag="h6" className="mb-2 text-muted">{beer.tagline}</CardActions>
                                        <CardActionArea className="card-text"><b>Created by:</b>{beer.contributed_by}</CardActionArea>
                                        </CardContent>
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
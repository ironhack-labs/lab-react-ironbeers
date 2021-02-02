import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, withRouter, Route } from 'react-router-dom'

class AllBeers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            allBeers: []
        }
    }
//{image_url: "https://images.punkapi.com/v2/keg.png", _id: "5fb6a86265b9c209606e10e2", name: "Buzz", tagline: "A Real Bitter Experience.", first_brewed: "09/2007", …}
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log("yeahh!");
                this.setState({
                    isLoaded: true,
                    allBeers: response.data
                })
            }, (error) => {
                this.setState({
                    error: error
                });
                console.log(error);
            });
    }

    render() {

        const beerList = this.state.allBeers.map( beer => {
            return (
                <Link to={`/${beer._id}`} key={beer._id}>
                    <img src={beer.image_url} style={{"maxHeight": "100px"}} />
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                </Link>
            )
        });

        return(
            <>
                {
                    this.state.isLoaded ? beerList : "loading...."
                }
            </>
        )
    }
}

export default AllBeers;
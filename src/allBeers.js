import React from 'react'; 
import axios from 'axios'; 
import Header from './Header'; 
import { Link } from "react-router-dom";

export default class BeerList extends React.Component {
    state={
        beers: []
    }
    getBeerData(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(res=> {
            const beers=res.data; 
            this.setState({beers}); 
        })
    }
    render(){
        return(

            <ul>
                <h1>All Beers:</h1>
                {this.state.beers.map(beer => <li>{beer.name}</li>)}
            </ul>
        )
    }




}
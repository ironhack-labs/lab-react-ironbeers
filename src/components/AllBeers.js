import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class AllBeers extends React.Component{
    state = {
        beers: []
      }
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
            console.log(response.data)
        })
    }

    render() {

        

    // props.match.params is the parts of the URL that *you* named
    // e.g. /education/:PandaPotato
    // console.log("THE params: ", props.match.params)   

    let beersDivs = this.state.beers.map(eachBeer => {
        return (
            <div key={eachBeer._id}>
             <h5><Link to={"/"}>HOME</Link></h5>
            <p><Link to={"/beers/" + eachBeer._id}>{eachBeer.name}</Link></p>
            <img src = {eachBeer.image_url}></img>
            </div>
            )
    })


    return (
        <div>
            {beersDivs}
        </div>
    )
}}

export default AllBeers;
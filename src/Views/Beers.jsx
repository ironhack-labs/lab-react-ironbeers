import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import Header from './Header'

class Beers extends React.Component{


    state={
        beers: [],
    }



    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log(response);
                this.setState({beers: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        return(
            <div>
                <Header>Go back Home</Header>
               <h1>All the beers are here</h1>
               {this.state.beers.map((beer) => {
                   return (
                       <div key={beer._id}>
                           <p>Hot sexy picture <img src={beer.image_url} alt="beeer"/></p>
                           <p>My name is: {beer.name}</p>
                           <p>Mah swag: {beer.tagline}</p>
                           <p><Link to={`/beers/${beer._id}`}>Get to know me</Link></p>
                       </div>
                   )
               })}
               
            </div>
        )
    }
}
export default Beers;
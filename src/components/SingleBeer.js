import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class SingleBeer extends React.Component{

    state = {
        randomBeer: {},
        loading:true
      }
    

    componentDidMount() {
       
        
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            this.setState({randomBeer: response.data,loading:false})
            console.log(response.data)
        })
    }


    render(){
   // MAKE REACT SYNTAX HERE:
        if(this.loading){
            return <div>Loading.....</div>
        }


    return (
        <div>
            <h5><Link to={"/"}>HOME</Link></h5>
                <h2>{this.state.randomBeer.name}</h2>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.first_brewed}</p>
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.brewers_tips}</p>
                <img src={this.state.randomBeer.image_url}></img>
        </div>
    )
}}

export default SingleBeer;
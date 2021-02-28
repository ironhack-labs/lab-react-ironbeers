import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class SingleBeer extends React.Component {

    state = {
        beer : []
    }

    componentDidMount() {
        //const id = this.props.match.params.id
        //console.log('BEER ID HERE',beerId);
       // axios.get(`/beers/${id}`)
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response =>{
            this.setState({
                beer: response.data
            })
        })
        .catch(err =>{
            console.log(err); 
        })

    }

    render(){
        return(
            <div>
                <h1>Beer Details</h1>
            <p>{this.state.beer.name}</p>
            </div>
            
        )
    }
}


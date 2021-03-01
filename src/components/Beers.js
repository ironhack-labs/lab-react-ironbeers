import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Beers extends React.Component {
    state = {
        beers: []
    }
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })
    }
    
    render() {
        

       
        return <div className="App">
      
            <Link to='/'>
                  Home
            </Link>
            
            {this.state.beers.map(beer => 
            <div>
                <img className="img" src={beer.image_url} alt={beer.name} width="100px"/>
                <h1>
                <Link to={`/beers/${beer._id}`}>
            {beer.name}
            </Link>
            </h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            
            </div>
            )}
        </div>
    }
}

export default Beers;
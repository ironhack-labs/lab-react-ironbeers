import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class allBeers extends React.Component {
    state = {
        beers: [],
    }

componentDidMount() {
    axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    )
    .then (response => {
        console.log(response.data);
        this.setState({
            beers: response.data,
          });
    })
    .catch (err => console.log(err)) 
}

render() {
    const mappedBeers = this.state.beers.map(singleBeer => {
        //console.log(this.state.beers);
        return (
            <div>
                <p key={singleBeer.name}></p>
                <Link to={`/beers/${singleBeer._id}`}>{singleBeer.name}</Link>
                <img src={singleBeer.image_url} width='50' alt="logo" ></img>
            </div>
        ) 
    }) 
    
    return(
        <div>
            <h1>Hola</h1>
            {mappedBeers}
        </div>
        
    ) 
    
}
}
export default allBeers;

// I need to print the ALL beers
// Ceed to put an identifier into the url
// with the identifier in the url, i can retrive details

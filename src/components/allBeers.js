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
        return (
            <div class="showBeer">
                {/* <p key={singleBeer.name}></p> */}
                <Link to={`/beers/${singleBeer._id}`}>{singleBeer.name}</Link>
                <img src={singleBeer.image_url} width='50' alt="logo" ></img>
                <p key={singleBeer.tagline}></p>
                <p key={singleBeer.contributed_by}></p>
            </div>
        ) 
    }) 
    
    return(
        <div>
            {mappedBeers}
        </div>
        
    ) 
    
}
}
export default allBeers;


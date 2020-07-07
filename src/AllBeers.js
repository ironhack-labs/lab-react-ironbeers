import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class AllBeers extends Component {

    state = {
        beers: []
      }
    
      async componentDidMount(){
    
        let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

        this.setState({ beers: res.data  });
    
        // await axios.post(`https://ironrest.herokuapp.com/ironhackbeersstolen`, {beers: res.data})
      }

      searchForBeer = async (event) => {
        console.log("search for beer")
        console.log(event.target.value)
        let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`)
        this.setState({ beers: res.data  });
      }
    
      showTheBeers = () => {
        return this.state.beers.map(beer => {
          return (
              <Link to={`/beers/${beer._id}`}>
                <h1>{beer.name}</h1>
                <img src={beer.image_url} alt="random" />
                <div>{beer.tagline}</div>
                <div>{beer.contributed_by}</div>
              </Link>
            )
          })
      }
    
    render() {
        return (
            <div>
                {this.showTheBeers()}
            </div>
        );
    }
}

export default AllBeers;
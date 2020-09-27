import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import './AllBeers.css'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default class AllBeers extends Component {
    state = {
        beers: [],
        query: ''
    }



    componentDidMount () {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(allBeers => {
            // console.log('este es allBeers',allBeers);
            this.setState({beers:[...new Set(allBeers.data)]})
            // console.log('esto es allBerrs.data', allBeers.data);
        })
        .catch(err => console.log(err))
    }



    handleQuery = (newValue) => {
        this.setState({
          query: newValue,
        });
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${newValue}`)
        .then(response => {
            // console.log(response.data);
            this.setState({
                beers: response.data
                })
            })

      };


  render() {
    //   console.log('This is state.beers in render', this.state.beers);
    return (
        <div>
            <Header />
            <SearchBar 
                query={this.state.query}
                handleQuery={this.handleQuery}
                />
            {this.state.beers.map((beer) => {   
                return (
                    <div key={beer._id}>
                        <div className="beer-container">
                            <div className="img-beer">
                                <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt={beer.name}/></Link> 
                            </div>
                            <div className="beer-text">
                                <h1>{beer.name}</h1>
                                <p style={{color:"#b3acab", fontSize:"3.2rem"}}>{beer.tagline}</p>
                                <p style={{fontSize:"2rem"}}><strong>Created by:</strong>{beer.contributed_by}</p>
                            </div>
                        </div>
                         <hr style={{width:'80%'}}/>
                    </div>
                )
            })}
           

        </div>
    )
  }
}

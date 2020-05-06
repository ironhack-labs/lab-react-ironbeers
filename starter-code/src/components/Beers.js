import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default class Beers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            beers: [],
            search:'',
             
        }
        this.getAllBeers = this.getAllBeers.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    

    getAllBeers() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(beers => {
                this.setState({
                    beers: beers.data
                })
                // console.log(this.state.beers)
        })
    }
    componentDidMount() {
        this.getAllBeers();
      }

    
    handleSearch(e) {
        this.setState({
            search: e.target.value.toLowerCase()
        })
    }
    
    render() {
       
        return (
           
            <div>
                <Navbar />
                <input placeholder="Search" type="text" name="search" onChange={this.handleSearch}></input>
                {this.state.beers.filter((item) =>
                    item.name.toLowerCase().includes(this.state.search)
                )
                .map((beer) => {

                    return (
                <div key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <div className="card">
                            <div className="img">
                                <img src={beer.image_url} alt=""/>
                            </div>
                            <h2>{beer.name}</h2>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </Link>
                </div>
                    );
                    })}
            </div>
        );
    }
}

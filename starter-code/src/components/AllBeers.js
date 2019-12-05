import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Header';

export default class AllBeers extends Component {
    state = {
        beers: [],
        search: '',
    }
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })
    }
    handleChange(event) {
        event.preventDefault();


        let { name, value } = event.target;
    
        this.setState( { [name]: value } );

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
            .then( (data) => {
                this.setState({beers: data.data})
            })
            .catch( (err) => console.log(err))
      }
    render() {
        return (
            <div className = 'allbeers'>
                <Nav />

                <input
                    type = 'text' 
                    name = 'search' 
                    className = 'searchinput'
                    value = {this.state.search}
                    onChange = {(e) => this.handleChange(e)}>    
                </input>
                <ul>
                {this.state.beers.map((beer, i) => {
                    let contributor = beer.contributed_by.substring(0, beer.contributed_by.indexOf('<'));
                      return (
                        <li><Link to = {`/singlebeer/${beer._id}`} className = 'allbeerelement'>
                        <div>
                            <img src = {`${beer.image_url}`} alt=''/>
                        </div>
                        <div class ='allbeerelementtext'>
                            <h1>{beer.name}</h1>
                            <h2>{beer.tagline}</h2>
                            <p><strong>Created By: </strong>{contributor}</p>
                        </div>
                        </Link>
                        <hr></hr></li>
                      );
                    })}
                </ul>
            </div>
        )
    }
}

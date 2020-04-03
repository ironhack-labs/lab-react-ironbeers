import React, {Component} from 'react';
import SingleBeer from '../components/SingleBeer'
import axios from 'axios';
import Nav from '../components/Nav';

class Beers extends Component {
    constructor(){
        super();
        this.state = {
            beers: []
        }
    }
    
    
    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then((response)=> {
            this.setState({beers: response.data})
        })
    }

    render() {
        return (
            <div className="App">
                <Nav />
                {this.state.beers.map((br, index)=> <SingleBeer 
                key = {index}
                name = {br.name} 
                pic = {br.image_url} 
                tagline = {br.tagline}
                contributed_by = {br.contributed_by}
                id = {br._id}
                />)}
            </div>
        );
    }
}

export default Beers;
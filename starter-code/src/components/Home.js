import React, { Component } from 'react';
import axios from 'axios';
import Section from './Section';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers:[],
        }

        this.getAllBeers = this.getAllBeers.bind(this);
    }
    
    getAllBeers(){ 
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            // console.log(response)
            this.setState({
                beers: response.data
            })
        })
        .catch(err => console.log(err))
        // console.log(this.state.beers)
    }
    
    render(){
    return (
        <div className="container">
            <Section to="/beers" url="/images/beers.png" alt="beer photo" name="All Beers" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in luctus lacus. Fusce et imperdiet leo. Suspendisse condimentum, nisl eget sollicitudin pellentesque, ipsum lectus rutrum enim, eu scelerisque nulla purus a velit."/>

            <Section to="/random-beer" url="/images/new-beer.png" alt="beer photo" name="Random Beer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in luctus lacus. Fusce et imperdiet leo. Suspendisse condimentum, nisl eget sollicitudin pellentesque, ipsum lectus rutrum enim, eu scelerisque nulla purus a velit."/>
     
            <Section to="/new-beer" url="/images/random-beer.png" alt="beer photo" name="New Beer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in luctus lacus. Fusce et imperdiet leo. Suspendisse condimentum, nisl eget sollicitudin pellentesque, ipsum lectus rutrum enim, eu scelerisque nulla purus a velit."/>
        </div>
        )
    }
}

export default Home




































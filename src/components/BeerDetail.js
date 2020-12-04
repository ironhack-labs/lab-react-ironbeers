import React, { Component } from 'react'
import { Beers } from "./Beers.js"
// import { Link } from "react-router-dom"
import axios from 'axios'

// function BeerDetail(props) {
class BeerDetail extends Component {

    state = {
        beer: null
     };

    getBeerDetails = () => {
        const beerId = this.props.match.params.id
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            const beer = response.data;
            // console.log(country);
            this.setState({
              beer: beer
            })
          })
          console.log(`inside getBeerDetails: ${this.state.beer}`)
      }

      componentDidMount() {
        this.getBeerDetails();
        console.log(`compDM ${this.state.beer}`)
      }

      componentDidUpdate(prevProps) {
        console.log('current props:', this.props.match.params.id)
        console.log('previous props:', prevProps.match.params.id)
        if (prevProps.match.params.id !== this.props.match.params.id) {
          this.getBeerDetails();
          console.log(`compDU ${this.state.beer}`)
        }
      }
    

    render() {

        const beer = this.state.beer;
        console.log(`declared beer = ${beer} `)
        
        if (!beer) return <> Loading... </>;

        return (
            <div>
                <p>
                    <img class="beerImage" src={beer.image_url} alt={beer.name}/>
                </p>
                <p>
                    <h2>
                        {beer.name} - {beer.attenuation_level}
                    </h2> 
                </p>
                <p>
                    <em>{beer.tagline}</em> First Brewed: {beer.first_brewed} 
                </p>

                <p>
                    {beer.description}
                </p>
                <p>
                    <b>Created by:</b> {beer.contributed_by}
                </p>

                <p>
                    <a href="/beers">Go back to all beers</a>
                </p>
            </div>
        );
    }
};

export default BeerDetail ;


// this should be a class almost identical to the beers.js 
// should include a state 
// componentDidMount, instead of all arrays, it should get only the one beer
// api request = send the beer that I want to render

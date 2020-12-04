import React, { Component } from 'react'
import axios from 'axios'

class Randombeer extends Component {

    state = {
        beer: null
     };

    getBeerDetails = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => {
            const beer = response.data;
            this.setState({
              beer: beer
            })
          })
      }

      componentDidMount() {
        this.getBeerDetails();
      }

      componentDidUpdate(prevProps) {
        // console.log('current props:', this.props.match.params.id)
        // console.log('previous props:', prevProps.match.params.id)
        if (prevProps.match.params.id !== this.props.match.params.id) {
          this.getBeerDetails();
          console.log(`compDU ${this.state.beer}`)
        }
      }
    

    render() {

        const beer = this.state.beer;
        // console.log(`declared beer = ${beer} `)
        
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

export default Randombeer ;

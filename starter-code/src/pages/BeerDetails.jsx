import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header'

export class BeerDetails extends Component {
    
    state = {
        beer:null
    }

    componentDidMount() {
        const id = this.props.match.params.beerid;
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
          .then((apiResponse) => {
            console.log(apiResponse.data);
            this.setState({ beer: apiResponse.data });
          })
          .catch((error) => {});
      }

    render() {

        if (!this.state.beer){
            return (<div>
                <Header />
                <h1>No Beer</h1>
            </div>)
            
        }
        return (<div>
            <Header />
            <div className="BeerDetails">
                <img src={this.state.beer.image_url} alt=""/>
                <h1>{this.state.beer.name}</h1>
                <h2>{this.state.beer.tagline}</h2>{}
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        </div>
            
        )
    }
}

export default BeerDetails


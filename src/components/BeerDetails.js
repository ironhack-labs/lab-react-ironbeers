import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class BeerDetails extends React.Component {


    state = {
        beer: []
    }

    getData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {

            let filtered = ''
            response.data.map( beer => {

                console.log('what is beer', beer._id)
                console.log('what is params', this.props.match.params.beerId)
                if (beer._id === this.props.match.params.beerId)
                filtered = beer
        
            })
            console.log('what is filtered', filtered)
            this.setState({
                beer: filtered 
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
		this.getData();
	}

    render() {
        return (
            <div>
                <Link to={`/`}>Home</Link> 
                <p>Beer Details</p>
                <p>{this.state.beer.name}</p>
                <img src={this.state.beer.image_url} alt="beerImage"></img>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
   


            </div>
        );
    }
}

export default BeerDetails;
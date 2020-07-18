import React from 'react';
import axios from 'axios';
import '../App.css';

class BeerDetails extends React.Component {

    state = {
        beer: null
    }

    getBeer = () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.match.params.id)
            .then(res => {
                this.setState({
                    beer: res.data
                })
        })
    }
    
    componentDidMount() {
        this.getBeer()
    }

    render() {
        if (!this.state.beer) return <></>;
        return (
            <div className="container">
                <div className="thumbnail">
                    <img className="img-fluid" id="thumb-img" src={ this.state.beer.image_url } alt="..." />
                    <div className="caption">
                        <h3>{ this.state.beer.name}</h3>
                        <p>{ this.state.beer.tagline }</p>
                        <p>{ this.state.beer.first_brewed }</p>
                        <p>{ this.state.beer.attenuation_level }</p>
                        <p>{ this.state.beer.description }</p>
                        <p>{ this.state.beer.contributed_by }</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default BeerDetails;
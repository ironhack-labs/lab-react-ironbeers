import React from 'react';
import Header from './Header';
import beersImage from '../assets/random-beer.png';


class RandomBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomBeer: {},
            isLoaded: false,
        }
    }

    
    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((res) => res.json())
        .then(
        (result) => {
            console.log(result)
            this.setState({
                randomBeer: result,
                isLoaded: true
            })
        },

        (error) => {
            this.setState({
            isLoaded: true,
            error,
            });
        }
        );
    }

    render() {
        return(
            <div>
                <Header image={beersImage} title="Random beer" description="Lorem ipsum"/>
                <img style={{maxHeight:"200px"}} src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name}></img>
                <h2>{this.state.randomBeer.name}</h2>
                <p><b>Tagline:</b> {this.state.randomBeer.tagline}<br />
                <b>First brewed on:</b> {this.state.randomBeer.first_brewed}<br />
                <b>Attenuation level:</b> {this.state.randomBeer.attenuation_level}<br />
                <b>Description:</b>{this.state.randomBeer.description}<br />
                <b>Contributed by:</b>{this.state.randomBeer.contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeer;
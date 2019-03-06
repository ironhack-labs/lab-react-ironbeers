import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RandomBeer extends Component {
    state={
        image_url:'',
        name:'',
        tagline:'',
        first_brewed:'',
        atenuation_level:'',
        description:'',
        contributed_by:'',
        beer:{}
    };

    getRandomBeer = () => {
        fetch("https://ironbeer-api.herokuapp.com/beers/random")
        .then(responseFromApi => {
            responseFromApi.json()
            .then( datos => {
                const beer = datos;
                console.log(beer)
                this.setState({beer:beer[0]});
            });
        })
        .catch(err=>console.log(err));
    }

    componentWillMount(){
        this.getRandomBeer();
    }

    render(){
        //console.log(this.state.beer)
        return(
            <div>
                <img src={this.state.beer.image_url} alt=""/>
                <h3>{this.state.beer.name}</h3>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.atenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p> 

                <Link to={"/beer"}>regresar</Link>

            </div>
        )
    }
};

export default RandomBeer;


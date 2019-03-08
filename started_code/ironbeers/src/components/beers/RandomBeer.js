import React, { Component } from 'react';
import NavBar from './NavBar'

class RandomBeer extends Component {
    state={
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
            <div className='container'>
                <NavBar/>
                <div className='info-sigle'>
                    <div className="beerDatils" >
                        <img src={this.state.beer.image_url} alt="" className="img-Details"/>
                    </div>
                    <div >
                        <div className="row ">
                            <h3  className="col-8">{this.state.beer.name}</h3>
                            <p  className="col ">{this.state.beer.attenuation_level}</p>
                        </div>
                        <div className="row">

                            <p className="col-8">{this.state.beer.tagline}</p>
                            <p className="col">{this.state.beer.first_brewed}</p>
                        
                        </div>
                            <p>{this.state.beer.description}</p>
                            <p>{this.state.beer.contributed_by}</p> 
                    </div>
                </div>
           
            </div>
        )
    }
};

export default RandomBeer;


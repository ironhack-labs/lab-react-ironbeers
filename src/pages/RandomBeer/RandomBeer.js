import React from 'react';
import { Component } from 'react';
import BeerDetails from '../../components/BeerDetails/BeerDetails';
import NavBar from '../../components/NavBar/NavBar';
import BeersService from '../../services/beers.service';

export default class Beer extends Component {
    constructor(props){
        super(props);
        this.state = {
            beer: {}
        }
        this.beersService = new BeersService();
        
    }
    
    componentDidMount(){
        this.getBeer();
    }


    getRandomBeer = () => {
    this.beersService
      .getRandom()
      .then(({ data }) => {
          console.log(data)
          this.setState({beer: data})
      })
      .catch((err) => console.error(err));
    };

    render(){
        return (
            <div>
                <NavBar />
                <BeerDetails {...this.state.beer} />
            </div>
        );
    }
}

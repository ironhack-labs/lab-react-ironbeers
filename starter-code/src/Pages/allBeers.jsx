import React, { Component } from 'react';
import {getAllBeers} from '../services/beerService';
//import {Link} from 'react-router-dom'
import BeerCard from '../components/BeerCard';

export default class allBeers extends Component {
    state={
        allBeers: [{
            id: null,
            name: 'Loading...',
            img: '',
            contributed_by: 'Espera en lo que terminamos de cargar las cervezas',
            tagline:''
        }]
    }

    async componentDidMount(){
        const allBeers = await getAllBeers();
        this.setState({allBeers})
        console.log(allBeers)
    }

    render() {
        return (
            <>
                {this.state.allBeers && (this.state.allBeers.map((beer,i)=>(
                    <BeerCard 
                        name =  {beer.name}
                        img = {beer.image_url}
                        contributed_by = {beer.contributed_by}
                        tagline = {beer.tagline}
                        id = {beer._id}
                    />
                )))}
            </>
        )
    }
}

import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom';

export class ListBeer extends Component {
    constructor(props){
        super(props)
        this.state ={
            beers:[] 
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            this.setState({
                beers: response.data
            })
        })
        .catch(e => console.log(e))
    }

    render() {
        const beerList = this.state.beers.map(beer =>
            <div key={beer._id}>
                <div className="container ">
                    <div className="beerlist">
                    <img src={beer.image_url} alt="beer-image"/>
                    <Link key={beer._id} to={'/beers/' + beer._id}><h3>{beer.name}</h3></Link>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    </div>
                   
                </div>
            </div>
            )
        return (
            <div>
                                <Header/>

                <h1>Beer list</h1>
                {beerList}
            </div>
        )
    }
}

export default ListBeer

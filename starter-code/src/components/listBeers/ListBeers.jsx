import React from 'react'
import Navigation from '../Navigation'
import axios from 'axios';
import BeerItem from './BeerItem';

export default class ListsBeers extends React.Component {
    constructor(){
        super();
        this.state = {
            beers:[]
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(allBeers => {
            this.setState({
                beers: allBeers.data
            })
        })
    }

    render() {


        return (
            <div className="list-beers">
                <Navigation></Navigation>

                <div className="section">
                    <div className="container">
                    {this.state.beers.map(beer => 
                    <BeerItem key={beer._id} {...beer}></BeerItem>
                )}
                    </div>
                </div>
            </div>
        )
    }
}

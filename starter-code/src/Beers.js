import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Beers extends Component {

    state= {
        allTheBeers:[]
    }

    componentDidMount() {
        this.getAllBeers()
    }
    getAllBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then(allTheBeers=>{
          console.log(allTheBeers)
          this.setState({
            allTheBeers:allTheBeers.data
          })
        })
    }
    showTheBeers = () => {
        return this.state.allTheBeers.map(eachBeer => {
            return (
                    <Link to={`/beer-detail/${eachBeer._id}`}>
                    <li>
                    <h4>{eachBeer.name}</h4>
                    <img src={eachBeer.image_url} width="200px"/>
                    <p>{eachBeer.description}</p>
                    </li>
                    </Link>
                    )
        })
    }

    render() {
        return (
            <div>
                Beers
                {this.showTheBeers()}
            </div>
        );
    }
}

export default Beers;
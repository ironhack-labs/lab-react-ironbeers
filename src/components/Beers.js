import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios'

class Beers extends Component {
    state={
        beers: []
    }

    componentDidMount = async () => {
        const beers = await axios.get("https://api.punkapi.com/v2/beers")
        console.log(beers.data)
        // axios devuelve un objeto con la respuesta dentro de "data"
        this.setState({ beers: beers.data})
    }

    render(){
        return (
            <div>
            <Header />
                <div className="beers">
                    {this.state.beers.map((beer, index) =>{
                        return<div key={index}>
                        <img src={beer.image_url} alt="" style={{height: 180}}/>
    
                        <div>
                            <Link to={`/beers/${beer.id}`}><h2>{beer.name}</h2></Link>
                            <h3>{beer.tagline}</h3>
                            <h6><b>Created by:</b> {beer.contributed_by}</h6>
                        </div>
                        <hr></hr>
                        </div>
                    })}
                </div>
            </div>
        )
    }
    
}

export default Beers
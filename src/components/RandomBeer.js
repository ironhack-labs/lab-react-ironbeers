import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios'

class Beers extends Component {
    state={
        random: []
    }

    componentDidMount = async () => {
        const randomBeer = await axios.get("https://api.punkapi.com/v2/beers/random")
        console.log(randomBeer.data)
        // axios devuelve un objeto con la respuesta dentro de "data"
        this.setState({ random: randomBeer.data})
    }

    render(){
        return (
            <div>
            <Header />
                <div className="random">
                {this.state.random.map((random, index) =>{
                        return<div key={index}>
                        <img src={random.image_url} alt="" style={{height: 180}}/>
    
                        <div>
                            <h2>{random.name}</h2>
                            <h3>{random.tagline}</h3>
                            <p>{random.description}</p>
                            <p><b>First brewed in: </b>{random.first_brewed} </p>
                            <p><b>Attenuation level: </b>{random.attenuation_level} </p>
                            <h6><b>Created by:</b> {random.contributed_by}</h6>
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
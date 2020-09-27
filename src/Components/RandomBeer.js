import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom'

export default class RandomBeer extends Component {

    state = {
        randomBeer : null
    }


    getRandomBier = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response=> {
            // console.log('this is response' ,response.data);
            this.setState({
                randomBeer: response.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount () {
        this.getRandomBier()
    }

    render() {
        // console.log(this.state.randomBeer);
        const randomBeer = this.state.randomBeer
        if (!randomBeer) return <></>;
        return (
            <div>
                <Header />
                <div className="singleBeer-container">
                    <div>
                        <img className="img" src={randomBeer.image_url} alt={randomBeer.name}/>
                    </div>
                    <div className="name-attenuation">
                        <h2 style={{fontSize:"2.5rem"}}>{randomBeer.name}</h2>
                        <h2 style={{color:"#b3acab"}}>{randomBeer.attenuation_level}</h2>
                    </div>
                    <div className="tagline-brewed">
                        <p style={{color:"#b3acab", fontSize:"2rem"}}><strong>{randomBeer.tagline}</strong></p>
                        <p><strong>{randomBeer.first_brewed}</strong></p>
                    </div>
                    <div className="text-contributed">
                        <p style={{fontSize:"1.5rem"}}>{randomBeer.description}</p>
                        <p style={{fontSize:"1.3rem", color:"#b3acab"}}>{randomBeer.contributed_by}</p>
                    </div>
                    <div>
                    </div>
                    <div>
                        <button className="btn-single"><Link to='/beers' className="link-single">Back to List of Beers</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class RandomBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            randomBeer:{}
        }
    }

    getRandomBeer = () => {
       
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(responseFromApi => {
            console.log(responseFromApi.data)

            this.setState({
                randomBeer:responseFromApi.data
            })
        })

    }

    componentDidMount() {
        this.getRandomBeer()
    }


    render() {
        
        const oneRandomBeer = this.state.randomBeer

        return (
            <div>
                <Link to='/'> <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='' /> <header>Home</header></Link>
                <h1>{oneRandomBeer.name}</h1>
                    <p>{oneRandomBeer.tagline}</p>
                    <img style={{height:'150px'}} src={oneRandomBeer.image_url} alt=''/>
                    <p>First brewed: {oneRandomBeer.first_brewed}</p>
                    <p>Attenuation level: {oneRandomBeer.attenuation_level}</p>
                    <h4>{oneRandomBeer.description}</h4>
                    <span>Contributed by: {oneRandomBeer.contributed_by}</span> <br/>
                    
                    <button onClick={() => window.location.reload(false)}>Click to get a new beer!</button>

            </div>
        )
    }
}


export default RandomBeers
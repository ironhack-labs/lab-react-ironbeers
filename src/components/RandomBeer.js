import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'


class RandomBeer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            randomBeer: []
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then( (response => {
                this.setState({
                    isLoaded: true,
                    randomBeer: response.data
                })
            }),
            (error) => {
                this.setState({
                    error: error
                })
            })
    }

    render(){
        console.log(this.state.randomBeer)
    return (
        <div>
  
      <Navbar />
        <div className='container'>
            <div className='beerDetailImg'>
            <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name} width="10%" />
            <div className='beerDetail'>
                <h1>{this.state.randomBeer.name}</h1>
                <h1 style={{ color: 'gray' }}>{this.state.randomBeer.attenuation_level}</h1>
            </div>
            <div className='beerDetail'>
                <h3 style={{ color: 'gray' }}>{this.state.randomBeer.tagline}</h3>
                <h3>
                <strong>{this.state.randomBeer.first_brewed}</strong>
                </h3>
            </div>
            <p>{this.state.randomBeer.description}</p>
            <p style={{ color: 'gray' }}>{this.state.randomBeer.contributed_by}</p>
            </div>
            <Link to='/'>Back</Link>
        </div>
    </div>
    )
    }
}

export default RandomBeer

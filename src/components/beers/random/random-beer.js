import React, {Component} from 'react'

//API
import BeerService from '../../../service/beers-service'

class Random extends Component {
     
    constructor (props){
        super (props)
        this.state = {
            random: {}
        }
        this.BeerService = new BeerService()
    }

    componentDidMount = () => {
        
        this.BeerService
            .getRandomBeer()
            .then(response => {
                this.setState({ random: response.data })}
                )
            .catch(err => console.log(err))
    }

    render () {
        return (
            <div className='text-card'>
                <h3>{this.state.random.name}</h3>
                <img src={this.state.random.image_url} />
                <h6>{this.state.random.tagline}</h6>
                <p>{this.state.random.first_brewed}</p>
                <p>{this.state.random.attenuation_level}</p>
                <p>description: {this.state.random.description}</p>
                <p>{this.state.random.contributed_by}</p>

            </div>
        )
    }
}

export default Random
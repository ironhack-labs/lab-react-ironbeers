import React, { PureComponent } from 'react'
import axios from 'axios'
import './RandomBeer.css'

class RandomBeer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            randBeer: {}
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then(res => {
            this.setState({
                randBeer: res.data
            })        })
    }

    render() {
        return (
            <div className='rb'>
                <img src={this.state.randBeer.image_url} alt='Pic' style={{width: "100px", height: "200px"}} />
                <strong>{this.state.randBeer.name}</strong>
                <p>{this.state.randBeer.description}</p>
            </div>
        )
    }
}

export default RandomBeer